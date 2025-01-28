import { db as prisma } from "../config/database.js";
import bcrypt from "bcryptjs";

/**
 * Obtiene todos los usuarios con su información asociada.
 */
export const obtenerUsuarios = async () => {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: { Persona: true },
    });

    if (!usuarios.length) {
      throw new Error("No hay usuarios registrados.");
    }

    return usuarios;
  } catch (error) {
    console.error("❌ Error al obtener usuarios:", error.message);
    throw new Error("No se pudieron obtener los usuarios.");
  }
};

/**
 * Obtiene un usuario por ID con su información de persona.
 */
export const obtenerUsuarioPorId = async (idUsuario) => {
  try {
    if (isNaN(idUsuario)) {
      throw new Error("El ID debe ser un número válido.");
    }

    const usuario = await prisma.usuario.findUnique({
      where: { idUsuario: parseInt(idUsuario) },
      include: { Persona: true },
    });

    if (!usuario) {
      throw new Error("Usuario no encontrado.");
    }

    return usuario;
  } catch (error) {
    console.error(`❌ Error al obtener usuario con ID ${idUsuario}:`, error.message);
    throw new Error(error.message);
  }
};

/**
 * Crea un nuevo usuario, verificando duplicados y la existencia de la persona.
 */
export const crearUsuario = async (data, userId) => {
  try {
    const { Nombre_usuario, Contrasenia, idPersona } = data;

    console.log(`🆕 Creación de usuario por ${userId} - Nombre: ${Nombre_usuario}`);

    const persona = await prisma.persona.findUnique({ where: { idPersona } });
    if (!persona) throw new Error("La persona asociada no existe en la base de datos.");

    const usuarioExistente = await prisma.usuario.findUnique({ where: { Nombre_usuario } });
    if (usuarioExistente) throw new Error("El nombre de usuario ya está en uso.");

    const hashedPassword = await bcrypt.hash(Contrasenia, 10);

    return await prisma.usuario.create({
      data: {
        Nombre_usuario,
        Contrasenia: hashedPassword,
        idPersona,
        Bloqueado: false, // 🔥 Usuario NO bloqueado por defecto
      },
    });
  } catch (error) {
    console.error("❌ Error al crear usuario:", error.message);
    throw new Error(error.message);
  }
};

/**
 * Actualiza un usuario, permitiendo actualizar la contraseña si es necesario.
 */
export const actualizarUsuario = async (idUsuario, data) => {
  try {
    if (isNaN(idUsuario)) {
      throw new Error("El ID debe ser un número válido.");
    }

    // Si la contraseña se actualiza, hashearla antes de guardarla
    if (data.Contrasenia) {
      data.Contrasenia = await bcrypt.hash(data.Contrasenia, 10);
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { idUsuario: parseInt(idUsuario) },
      data,
    });

    return usuarioActualizado;
  } catch (error) {
    console.error(`Error al actualizar usuario con ID ${idUsuario}:`, error.message);
    throw new Error("No se pudo actualizar el usuario.");
  }
};

/**
 * Elimina un usuario por ID.
 */
export const eliminarUsuario = async (idUsuario) => {
  try {
    if (isNaN(idUsuario)) {
      throw new Error("El ID debe ser un número válido.");
    }

    const usuarioEliminado = await prisma.usuario.delete({
      where: { idUsuario: parseInt(idUsuario) },
    });

    return usuarioEliminado;
  } catch (error) {
    console.error(`Error al eliminar usuario con ID ${idUsuario}:`, error.message);
    throw new Error("No se pudo eliminar el usuario.");
  }
};
