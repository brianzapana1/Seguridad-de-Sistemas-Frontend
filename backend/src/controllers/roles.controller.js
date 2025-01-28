import {
    obtenerRoles,
    obtenerRolPorId,
    crearRol,
    actualizarRol,
    eliminarRol,
  } from "../services/roles.service.js";
  
  /**
   * Controlador para obtener todos los roles.
   */
  export const getRoles = async (req, res, next) => {
    try {
      const roles = await obtenerRoles();
      res.json(roles);
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controlador para obtener un rol por ID.
   */
  export const getRolById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await obtenerRolPorId(id);
  
      res.json(rol);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  /**
   * Controlador para crear un nuevo rol.
   */
  export const createRol = async (req, res, next) => {
    try {
      const { Nombre, descripcionRol } = req.body;
  
      if (!Nombre) {
        return res.status(400).json({ error: "El nombre del rol es obligatorio." });
      }
  
      const nuevoRol = await crearRol({ Nombre, descripcionRol });
  
      res.status(201).json(nuevoRol);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  /**
   * Controlador para actualizar un rol.
   */
  export const updateRol = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
  
      const rolActualizado = await actualizarRol(id, data);
  
      res.json(rolActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  /**
   * Controlador para eliminar un rol.
   */
  export const deleteRol = async (req, res, next) => {
    try {
      const { id } = req.params;
      const resultado = await eliminarRol(id);
  
      res.json(resultado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  