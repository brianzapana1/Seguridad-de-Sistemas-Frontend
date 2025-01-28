import { db as prisma } from "../config/database.js";

/**
 * Obtiene todos los roles.
 */
export const obtenerRoles = async () => {
  try {
    return await prisma.roles.findMany();
  } catch (error) {
    throw new Error("Error al obtener roles: " + error.message);
  }
};

/**
 * Obtiene un rol por ID.
 */
export const obtenerRolPorId = async (idRol) => {
  try {
    const rol = await prisma.roles.findUnique({
      where: { idRol: parseInt(idRol) },
    });

    if (!rol) {
      throw new Error("Rol no encontrado.");
    }

    return rol;
  } catch (error) {
    throw new Error("Error al obtener el rol: " + error.message);
  }
};

/**
 * Crea un nuevo rol.
 */
export const crearRol = async (data) => {
  try {
    // Verificar si el nombre del rol ya existe
    const rolExistente = await prisma.roles.findUnique({
      where: { Nombre: data.Nombre },
    });

    if (rolExistente) {
      throw new Error("El nombre del rol ya está en uso.");
    }

    return await prisma.roles.create({ data });
  } catch (error) {
    throw new Error("Error al crear el rol: " + error.message);
  }
};

/**
 * Actualiza un rol por ID.
 */
export const actualizarRol = async (idRol, data) => {
  try {
    // Verificar si el rol existe
    const rolExistente = await prisma.roles.findUnique({
      where: { idRol: parseInt(idRol) },
    });

    if (!rolExistente) {
      throw new Error("Rol no encontrado.");
    }

    return await prisma.roles.update({
      where: { idRol: parseInt(idRol) },
      data,
    });
  } catch (error) {
    throw new Error("Error al actualizar el rol: " + error.message);
  }
};

/**
 * Elimina un rol por ID.
 */
export const eliminarRol = async (idRol) => {
  try {
    // Verificar si el rol existe antes de eliminar
    const rolExistente = await prisma.roles.findUnique({
      where: { idRol: parseInt(idRol) },
    });

    if (!rolExistente) {
      throw new Error("Rol no encontrado.");
    }

    await prisma.roles.delete({
      where: { idRol: parseInt(idRol) },
    });

    return { message: "Rol eliminado correctamente." };
  } catch (error) {
    throw new Error("Error al eliminar el rol: " + error.message);
  }
};
