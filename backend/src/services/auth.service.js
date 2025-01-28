import bcrypt from "bcryptjs";
import { db } from "../config/database.js"; // 🔥 Cambiado de `prisma` a `db`
import { logsDb } from "../config/database.js"; // ✅ Base de datos de logs
import { generarToken } from "../utils/tokenUtils.js";
import jwt from "jsonwebtoken";
import { registrarIntentoLogin } from "./logsIntentos.service.js";
import dotenv from "dotenv";




/**
 * Registra un evento en la tabla Logs_Sistema.
 * @param {Object} data - Información del evento.
 * @param {number} data.idUsuario - ID del usuario que realiza la acción.
 * @param {string} data.Tipo_evento - Tipo de evento (LOGIN, LOGIN_FAIL, LOGIN_BLOCKED).
 * @param {string} data.Descripcion - Descripción detallada del evento.
 * @param {string} data.ipUsuario - Dirección IP del usuario.
 * @param {string} data.Nivel - Nivel del evento (INFO, WARN, ERROR).
 */


/**
 * Verifica credenciales de usuario y devuelve el usuario si son correctas.
 */
const verificarCredenciales = async (Nombre_usuario, Contrasenia) => {
  const usuario = await db.Usuario.findUnique({  // ✅ Corregido (mayúscula en "Usuario")
    where: { Nombre_usuario },
    include: {
      UsuarioRol: {
        include: { Rol: true },
      },
    },
  });

  if (!usuario) {
    throw new Error("Credenciales incorrectas");
  }

  const match = await bcrypt.compare(Contrasenia, usuario.Contrasenia);
  if (!match) {
    throw new Error("Credenciales incorrectas");
  }

  return usuario;
};

/**
 * Obtiene los permisos del usuario al iniciar sesión
 */
const obtenerPermisosUsuario = async (idUsuario) => {
  const usuarioRol = await db.UsuarioRol.findFirst({  // ✅ Corregido (mayúscula en "UsuarioRol")
    where: { idUsuario },
    include: {
      Rol: true,
      Permisos: {
        include: {
          Modulo: true,
        },
      },
    },
  });

  if (!usuarioRol) {
    throw new Error("El usuario no tiene un rol asignado.");
  }

  const permisos = usuarioRol.Permisos.map((permiso) => ({
    modulo: permiso.Modulo.Nombre,
    permisos: {
      crear: permiso.Crear,
      actualizar: permiso.Actualizar,
      eliminar: permiso.Eliminar,
      leer: permiso.Leer,
      reportes: permiso.Reportes,
    },
  }));

  return {
    rol: usuarioRol.Rol.Nombre,
    permisos,
  };
};

/**
 * Inicia sesión de usuario y almacena el token en una cookie HTTP-only.
 */
export const loginUsuario = async (Nombre_usuario, Contrasenia, ipUsuario) => {
  try {
    const fechaISO = new Date().toISOString(); // 📌 Fecha en formato ISO

    const usuario = await db.Usuario.findUnique({
      where: { Nombre_usuario },
      include: {
        UsuarioRol: {
          include: {
            Rol: true,
            Permisos: { include: { Modulo: true } },
          },
        },
      },
    });

    if (!usuario) {
      await new Promise(resolve => setTimeout(resolve, 500));

      await registrarIntentoLogin(null, ipUsuario, false, "Usuario no encontrado", 1);

      await logsDb.logs_Sistema.create({
        data: {
          idUsuario: null,
          Tipo_evento: "LOGIN_FALLIDO",
          Descripcion: `Intento de inicio de sesión fallido para usuario: ${Nombre_usuario}`,
          ipUsuario: ipUsuario || "0.0.0.0",
          Nivel: "ADVERTENCIA",
          Fecha: fechaISO,
        },
      });

      throw new Error("Credenciales incorrectas.");
    }

    if (usuario.Bloqueado) {
      const ultimoIntento = await logsDb.logs_Intentos_Login.findFirst({
        where: { idUsuario: usuario.idUsuario },
        orderBy: { Fecha_intento: "desc" },
      });

      if (ultimoIntento) {
        const tiempoBloqueo = new Date(ultimoIntento.Fecha_intento);
        tiempoBloqueo.setHours(tiempoBloqueo.getHours() + 1);

        if (new Date() > tiempoBloqueo) {
          await db.Usuario.update({
            where: { idUsuario: usuario.idUsuario },
            data: { Bloqueado: false },
          });

          await logsDb.logs_Sistema.create({
            data: {
              idUsuario: usuario.idUsuario,
              Tipo_evento: "DESBLOQUEO_AUTOMATICO",
              Descripcion: `Usuario ${Nombre_usuario} ha sido desbloqueado automáticamente tras 1 hora.`,
              ipUsuario: "0.0.0.0",
              Nivel: "INFO",
              Fecha: fechaISO,
            },
          });
        } else {
          await logsDb.logs_Sistema.create({
            data: {
              idUsuario: usuario.idUsuario,
              Tipo_evento: "LOGIN_BLOQUEADO",
              Descripcion: `Intento de inicio de sesión de usuario bloqueado: ${Nombre_usuario}`,
              ipUsuario: ipUsuario || "0.0.0.0",
              Nivel: "ERROR",
              Fecha: fechaISO,
            },
          });

          throw new Error("Usuario bloqueado. Espere 1 hora o contacte al administrador.");
        }
      }
    }

    const esValida = await bcrypt.compare(Contrasenia, usuario.Contrasenia);
    if (!esValida) {
      const intentosPrevios = await logsDb.logs_Intentos_Login.findMany({
        where: { idUsuario: usuario.idUsuario },
        orderBy: { Fecha_intento: "desc" },
        take: 4,
      });

      const nuevoIntento = (intentosPrevios.length > 0 ? intentosPrevios.length : 0) + 1;

      await registrarIntentoLogin(usuario.idUsuario, ipUsuario, false, "Contraseña incorrecta", nuevoIntento);

      await logsDb.logs_Sistema.create({
        data: {
          idUsuario: usuario.idUsuario,
          Tipo_evento: "LOGIN_FALLIDO",
          Descripcion: `Contraseña incorrecta en intento de inicio de sesión: Intento ${nuevoIntento}`,
          ipUsuario: ipUsuario || "0.0.0.0",
          Nivel: "ADVERTENCIA",
          Fecha: fechaISO,
        },
      });

      if (nuevoIntento >= 5) {
        await db.Usuario.update({
          where: { idUsuario: usuario.idUsuario },
          data: { Bloqueado: true },
        });

        await logsDb.logs_Sistema.create({
          data: {
            idUsuario: usuario.idUsuario,
            Tipo_evento: "USUARIO_BLOQUEADO",
            Descripcion: `Usuario ${Nombre_usuario} ha sido bloqueado tras 5 intentos fallidos.`,
            ipUsuario: ipUsuario || "0.0.0.0",
            Nivel: "CRÍTICO",
            Fecha: fechaISO,
          },
        });

        throw new Error("Usuario bloqueado tras 5 intentos fallidos.");
      }

      throw new Error("Credenciales incorrectas.");
    }

    const usuarioRol = usuario.UsuarioRol.length > 0 ? usuario.UsuarioRol[0] : null;
    const rolNombre = usuarioRol ? usuarioRol.Rol.Nombre : "Sin rol";
    const permisos = usuarioRol
      ? usuarioRol.Permisos.map((permiso) => ({
          modulo: permiso.Modulo.Nombre,
          permisos: {
            crear: permiso.Crear,
            actualizar: permiso.Actualizar,
            eliminar: permiso.Eliminar,
            leer: permiso.Leer,
            reportes: permiso.Reportes,
          },
        }))
      : [];

    const token = jwt.sign(
      { userId: usuario.idUsuario, rol: rolNombre, permisos },
      process.env.JWT_SECRET,
      { expiresIn: "30m", algorithm: "HS256" }
    );

    await registrarIntentoLogin(usuario.idUsuario, ipUsuario, true, null, 1);

    await logsDb.logs_Sistema.create({
      data: {
        idUsuario: usuario.idUsuario,
        Tipo_evento: "LOGIN_EXITOSO",
        Descripcion: "Inicio de sesión exitoso",
        ipUsuario: ipUsuario || "0.0.0.0",
        Nivel: "INFO",
        Fecha: fechaISO,
      },
    });

    return { token, rol: rolNombre, permisos };
  } catch (error) {
    console.error("Error en loginUsuario:", error.message);
    throw error;
  }
};




/**
 * Inicia sesión de administrador verificando el rol correctamente.
 */
export const loginAdmin = async (Nombre_usuario, Contrasenia, res) => {
  const usuario = await verificarCredenciales(Nombre_usuario, Contrasenia);
  const usuarioRol = await prisma.usuarioRol.findFirst({
    where: { idUsuario: usuario.idUsuario },
    include: { Rol: true },
  });

  if (!usuarioRol || usuarioRol.Rol.Nombre !== "Admin") {
    throw new Error("Esta cuenta no es de administrador");
  }

  const { permisos } = await obtenerPermisosUsuario(usuario.idUsuario);
  const token = generarToken(usuario.idUsuario, usuarioRol.Rol.Nombre);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 2 * 60 * 60 * 1000,
  });

  return { permisos };
};

/**
 * Cierra sesión eliminando la cookie del cliente.
 */
export const logoutUsuario = (res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  return { message: "Sesión cerrada correctamente" };
};

/**
 * Obtiene la información del administrador autenticado.
 */
export const obtenerInfoAdmin = async (adminId) => {
  const usuario = await prisma.usuario.findUnique({
    where: { idUsuario: adminId },
    include: { Persona: true },
  });

  if (!usuario) {
    throw new Error("Usuario no encontrado.");
  }

  const usuarioRol = await prisma.usuarioRol.findFirst({
    where: { idUsuario: adminId },
    include: { Rol: true },
  });

  if (!usuarioRol || usuarioRol.Rol.Nombre !== "Admin") {
    throw new Error("No tienes permiso para acceder a esta información.");
  }

  return {
    usuario: {
      Nombre_usuario: usuario.Nombre_usuario,
      Rol: usuarioRol.Rol.Nombre,
    },
    persona: usuario.Persona,
  };
};

/**
 * Actualiza la información del administrador autenticado.
 */
export const actualizarInfoAdmin = async (adminId, data) => {
  const usuario = await prisma.usuario.findUnique({
    where: { idUsuario: adminId },
    include: { Persona: true },
  });

  if (!usuario) {
    throw new Error("Usuario no encontrado.");
  }

  const usuarioRol = await prisma.usuarioRol.findFirst({
    where: { idUsuario: adminId },
    include: { Rol: true },
  });

  if (!usuarioRol || usuarioRol.Rol.Nombre !== "Admin") {
    throw new Error("No tienes permiso para acceder a esta información.");
  }

  const updatedPersona = await prisma.persona.update({
    where: { idPersona: usuario.idPersona },
    data,
  });

  return updatedPersona;
};
