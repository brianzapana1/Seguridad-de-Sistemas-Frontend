import {
  loginUsuario,
  loginAdmin,
  obtenerInfoAdmin,
  actualizarInfoAdmin,
} from "../services/auth.service.js";
import { verificarToken } from "../utils/tokenUtils.js";
import { db as prisma } from "../config/database.js"; // ✅ Esto está bien


/**
 * Inicia sesión de usuario y almacena el token en una cookie segura.
 */
export const login = async (req, res, next) => {
  try {
    const { Nombre_usuario, Contrasenia } = req.body;

    // ✅ Extraer la IP real del usuario
    let ipUsuario = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // ✅ Si `x-forwarded-for` tiene múltiples IPs, tomar la primera (IP real del usuario)
    if (ipUsuario.includes(",")) {
      ipUsuario = ipUsuario.split(",")[0].trim();
    }

    // ✅ Convertir `::1` (IPv6 localhost) a `127.0.0.1` (IPv4 localhost)
    if (ipUsuario === "::1") {
      ipUsuario = "127.0.0.1";
    }

    const { token, rol, permisos } = await loginUsuario(Nombre_usuario, Contrasenia, ipUsuario);

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      path: "/",
      maxAge: 2 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      ipUsuario,  // 🔹 Esto es solo para verificar en la respuesta
      rol,
      permisos,
    });
  } catch (error) {
    console.error("Error en login:", error.message);
    next(error);
  }
};



/**
 * Inicia sesión de administrador y almacena el token en una cookie segura.
 */
export const loginAdminController = async (req, res, next) => {
  try {
    const { Nombre_usuario, Contrasenia } = req.body;
    const { token, permisos } = await loginAdmin(Nombre_usuario, Contrasenia);

    // 🔥 Configuramos la cookie de manera segura
    res.cookie("access_token", token, {
      httpOnly: true,      
      secure: process.env.NODE_ENV === "production", 
      sameSite: "Strict",  
      maxAge: 2 * 60 * 60 * 1000, 
    });

    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      permisos,
    });
  } catch (error) {
    console.error("Error en loginAdmin:", error.message);
    next(error);
  }
};

/**
 * Obtiene la información del usuario autenticado.
 */

export const getUserInfo = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({ message: "No autenticado" });
    }

    const decoded = verificarToken(token);
    if (!decoded) {
      return res.status(403).json({ message: "Token inválido o expirado" });
    }

    // ✅ Consulta corregida
    const usuario = await prisma.usuario.findUnique({
      where: { idUsuario: decoded.userId },
      include: {
        UsuarioRol: {
          include: {
            Rol: true,
            Permisos: {
              include: {
                Modulo: true, // ✅ Asegura obtener el nombre del módulo
              },
            },
          },
        },
      },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // ✅ Extraer la información correctamente
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

    res.status(200).json({
      usuario: {
        Nombre_usuario: usuario.Nombre_usuario,
        Rol: rolNombre,
      },
      permisos,
    });
  } catch (error) {
    console.error("Error en getUserInfo:", error.message);
    next(error);
  }
};




/**
 * Cierra sesión del usuario eliminando la cookie.
 */
export const logout = async (req, res) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    return res.status(200).json({ message: "Sesión cerrada correctamente" });
  } catch (error) {
    console.error("Error en logout:", error.message);
    res.status(500).json({ message: "Error al cerrar sesión" });
  }
};


/**
 * Actualiza la información del usuario autenticado.
 */
export const updateAdminInfo = async (req, res, next) => {
  try {
    const updatedData = await actualizarInfoAdmin(req.userId, req.body);
    return res.status(200).json({ message: "Datos actualizados correctamente", persona: updatedData });
  } catch (error) {
    console.error("Error en updateAdminInfo:", error.message);
    next(error);
  }
};
