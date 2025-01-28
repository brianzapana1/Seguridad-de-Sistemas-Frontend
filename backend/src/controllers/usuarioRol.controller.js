import {
    obtenerUsuarioRoles,
    obtenerUsuarioRolPorId,
    asignarRolAUsuario,
    actualizarRolDeUsuario,
    eliminarRolDeUsuario,
  } from "../services/usuarioRol.service.js";
  
  /**
   * Controlador para obtener todas las relaciones UsuarioRol.
   */
  export const getUsuarioRoles = async (req, res, next) => {
    try {
      const usuarioRoles = await obtenerUsuarioRoles();
      res.json(usuarioRoles);
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controlador para obtener una relación UsuarioRol por ID.
   */
  export const getUsuarioRolById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const usuarioRol = await obtenerUsuarioRolPorId(id);
  
      res.json(usuarioRol);
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controlador para asignar un rol a un usuario.
   */
  export const createUsuarioRol = async (req, res, next) => {
    try {
      const { idUsuario, idRol } = req.body;
  
      if (!idUsuario || !idRol) {
        return res.status(400).json({ error: "Los campos idUsuario y idRol son obligatorios." });
      }
  
      const nuevoUsuarioRol = await asignarRolAUsuario(idUsuario, idRol);
  
      res.status(201).json(nuevoUsuarioRol);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  /**
   * Controlador para actualizar el rol de un usuario.
   */
  export const updateUsuarioRol = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { idRol } = req.body;
  
      if (!idRol) {
        return res.status(400).json({ error: "El campo idRol es obligatorio." });
      }
  
      const usuarioRolActualizado = await actualizarRolDeUsuario(id, idRol);
      res.json(usuarioRolActualizado);
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controlador para eliminar una relación Usuario-Rol.
   */
  export const deleteUsuarioRol = async (req, res, next) => {
    try {
      const { id } = req.params;
      await eliminarRolDeUsuario(id);
      res.json({ message: "UsuarioRol eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  };
  