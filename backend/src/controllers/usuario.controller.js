import {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../services/usuario.service.js";

/**
 * Controlador para obtener todos los usuarios.
 */
export const getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await obtenerUsuarios();
    if (!usuarios.length) {
      return res.status(404).json({ message: "No hay usuarios registrados." });
    }
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
    next(error);
  }
};

/**
 * Controlador para obtener un usuario por ID.
 */
export const getUsuarioById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "El ID debe ser un número válido." });
    }

    const usuario = await obtenerUsuarioPorId(parseInt(id));

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // 🔥 Bloquear respuesta si el usuario está bloqueado
    if (usuario.Bloqueado) {
      return res.status(403).json({ message: "Usuario bloqueado. No se puede acceder." });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error(`Error al obtener usuario con ID ${req.params.id}:`, error.message);
    next(error);
  }
};

/**
 * Controlador para crear un nuevo usuario.
 */
export const createUsuario = async (req, res, next) => {
  try {
    const { Nombre_usuario, Contrasenia, idPersona } = req.body;

    if (!Nombre_usuario || !Contrasenia || !idPersona) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    if (typeof Nombre_usuario !== "string" || Nombre_usuario.trim() === "") {
      return res.status(400).json({ error: "El nombre de usuario es inválido." });
    }

    if (typeof Contrasenia !== "string" || Contrasenia.length < 6) {
      return res.status(400).json({ error: "La contraseña debe tener al menos 6 caracteres." });
    }

    if (isNaN(idPersona)) {
      return res.status(400).json({ error: "El ID de persona debe ser un número válido." });
    }

    const nuevoUsuario = await crearUsuario(
      { Nombre_usuario, Contrasenia, idPersona: parseInt(idPersona), Bloqueado: false }, // 🔥 Bloqueado por defecto en false
      req.userId
    );

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error al crear usuario:", error.message);
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controlador para actualizar un usuario.
 */
export const updateUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ error: "El ID debe ser un número válido." });
    }

    const usuarioActualizado = await actualizarUsuario(parseInt(id), data);

    if (!usuarioActualizado) {
      return res.status(404).json({ message: "Usuario no encontrado o sin cambios." });
    }

    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error(`Error al actualizar usuario con ID ${req.params.id}:`, error.message);
    next(error);
  }
};

/**
 * Controlador para eliminar un usuario.
 */
export const deleteUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ error: "El ID debe ser un número válido." });
    }

    await eliminarUsuario(parseInt(id));

    res.status(200).json({ message: "Usuario eliminado correctamente." });
  } catch (error) {
    console.error(`Error al eliminar usuario con ID ${req.params.id}:`, error.message);
    next(error);
  }
};
