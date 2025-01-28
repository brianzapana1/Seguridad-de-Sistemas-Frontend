import { db as prisma } from "../config/database.js";

/**
 * Obtiene todos los permisos.
 */
export const obtenerPermisos = async () => {
  try {
    return await prisma.permisos.findMany({
      include: {
        Modulo: true,
        UsuarioRol: {
          include: {
            Usuario: true,
            Rol: true,
          },
        },
      },
    });
  } catch (error) {
    throw new Error("Error al obtener los permisos: " + error.message);
  }
};

/**
 * Obtiene un permiso por ID.
 */
export const obtenerPermisoPorId = async (idPermiso) => {
  try {
    const permiso = await prisma.permisos.findUnique({
      where: { idPermiso: parseInt(idPermiso) },
      include: {
        Modulo: true,
        UsuarioRol: {
          include: {
            Usuario: true,
            Rol: true,
          },
        },
      },
    });

    if (!permiso) {
      throw new Error("Permiso no encontrado.");
    }

    return permiso;
  } catch (error) {
    throw new Error("Error al obtener el permiso: " + error.message);
  }
};

/**
 * Crea un nuevo permiso.
 */
export const crearPermiso = async (data) => {
  try {
    // Verificar si el módulo y el usuario-rol existen
    const modulo = await prisma.modulo.findUnique({
      where: { idModulo: data.idModulo },
    });

    const usuarioRol = await prisma.usuarioRol.findUnique({
      where: { idUsuarioRol: data.idUsuarioRol },
    });

    if (!modulo) {
      throw new Error("El módulo especificado no existe.");
    }

    if (!usuarioRol) {
      throw new Error("El usuario-rol especificado no existe.");
    }

    return await prisma.permisos.create({ data });
  } catch (error) {
    throw new Error("Error al asignar permiso: " + error.message);
  }
};

/**
 * Actualiza un permiso por ID.
 */
export const actualizarPermiso = async (idPermiso, data) => {
  try {
    // Verificar si el permiso existe
    const permisoExistente = await prisma.permisos.findUnique({
      where: { idPermiso: parseInt(idPermiso) },
    });

    if (!permisoExistente) {
      throw new Error("Permiso no encontrado.");
    }

    return await prisma.permisos.update({
      where: { idPermiso: parseInt(idPermiso) },
      data,
    });
  } catch (error) {
    throw new Error("Error al actualizar el permiso: " + error.message);
  }
};

/**
 * Elimina un permiso por ID.
 */
export const eliminarPermiso = async (idPermiso) => {
  try {
    // Verificar si el permiso existe
    const permisoExistente = await prisma.permisos.findUnique({
      where: { idPermiso: parseInt(idPermiso) },
    });

    if (!permisoExistente) {
      throw new Error("Permiso no encontrado.");
    }

    await prisma.permisos.delete({
      where: { idPermiso: parseInt(idPermiso) },
    });

    return { message: "Permiso eliminado correctamente." };
  } catch (error) {
    throw new Error("Error al eliminar el permiso: " + error.message);
  }
};
