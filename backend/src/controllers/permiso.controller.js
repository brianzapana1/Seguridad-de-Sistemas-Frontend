import {
    obtenerPermisos,
    obtenerPermisoPorId,
    crearPermiso,
    actualizarPermiso,
    eliminarPermiso,
  } from "../services/permiso.service.js";
  

  import { registrarLogPermiso } from "../services/logsPermisos.service.js";
  /**
   * Controlador para obtener todos los permisos.
   */
  export const getPermisos = async (req, res, next) => {
    try {
      const permisos = await obtenerPermisos();
      res.json(permisos);
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controlador para obtener un permiso por ID.
   */
  export const getPermisoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const permiso = await obtenerPermisoPorId(id);
  
      if (!permiso) {
        return res.status(404).json({ message: "Permiso no encontrado" });
      }
  
      res.json(permiso);
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controlador para crear un nuevo permiso.
   */
  export const createPermiso = async (req, res, next) => {
    try {
        const { idModulo, idUsuarioRol, Crear, Actualizar, Eliminar, Leer, Reportes } = req.body;
        const idAdministrador_mod = req.userId || req.user?.userId; // 🔥 Ahora siempre obtiene el ID

        if (!idAdministrador_mod || !idModulo || !idUsuarioRol) {
            return res.status(400).json({ error: "Faltan datos obligatorios." });
        }

        const nuevoPermiso = await crearPermiso({
            idModulo,
            idUsuarioRol,
            Crear,
            Actualizar,
            Eliminar,
            Leer,
            Reportes,
        });

        // 🔥 Registrar la creación del permiso en Logs_Permisos
        await registrarLogPermiso({
            idAdministrador_mod,
            idUsuario: idUsuarioRol,
            idModulo,
            Permiso: "CREACIÓN_PERMISO",
            Estado: true,
        });

        res.status(201).json(nuevoPermiso);
    } catch (error) {
        next(error);
    }
};
  
  /**
   * Controlador para actualizar un permiso.
   */
  export const updatePermiso = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { idModulo, idUsuarioRol, Crear, Actualizar, Eliminar, Leer, Reportes } = req.body;
        const idAdministrador_mod = req.userId || req.user?.userId; // 🔥 Ahora siempre obtiene el ID

        console.log("📌 ID Admin Mod (Desde Token):", idAdministrador_mod);
        console.log("📌 ID Modulo:", idModulo);
        console.log("📌 ID Usuario Rol:", idUsuarioRol);
        console.log("📌 Datos de Permiso:", { Crear, Actualizar, Eliminar, Leer, Reportes });

        if (!idAdministrador_mod || !idModulo || !idUsuarioRol) {
            return res.status(400).json({ error: "Faltan datos obligatorios." });
        }

        const permisoExistente = await obtenerPermisoPorId(id);
        if (!permisoExistente) {
            return res.status(404).json({ error: "Permiso no encontrado." });
        }

        const permisoActualizado = await actualizarPermiso(id, { Crear, Actualizar, Eliminar, Leer, Reportes });

        // 🔥 Registrar solo los cambios en `Logs_Permisos`
        const cambios = [
            { permiso: "Crear", estado: Crear },
            { permiso: "Actualizar", estado: Actualizar },
            { permiso: "Eliminar", estado: Eliminar },
            { permiso: "Leer", estado: Leer },
            { permiso: "Reportes", estado: Reportes },
        ];

        for (const cambio of cambios) {
            if (permisoExistente[cambio.permiso] !== cambio.estado) {
                await registrarLogPermiso({
                    idAdministrador_mod,
                    idUsuario: idUsuarioRol,
                    idModulo,
                    Permiso: cambio.permiso,
                    Estado: cambio.estado,
                });
            }
        }

        res.json({ message: "Permiso actualizado correctamente", permiso: permisoActualizado });
    } catch (error) {
        console.error("Error en updatePermiso:", error.message);
        next(error);
    }
};
  
  /**
   * Controlador para eliminar un permiso.
   */
  export const deletePermiso = async (req, res, next) => {
    try {
        const { id } = req.params;
        const idAdministrador_mod = req.userId || req.user?.userId; // 🔥 Ahora siempre obtiene el ID

        if (!idAdministrador_mod) {
            return res.status(400).json({ error: "Se requiere el ID del administrador que eliminó el permiso." });
        }

        const permisoExistente = await obtenerPermisoPorId(id);
        if (!permisoExistente) {
            return res.status(404).json({ error: "Permiso no encontrado." });
        }

        await eliminarPermiso(id);

        // 🔥 Registrar la eliminación del permiso en Logs_Permisos
        await registrarLogPermiso({
            idAdministrador_mod,
            idUsuario: permisoExistente.idUsuarioRol,
            idModulo: permisoExistente.idModulo,
            Permiso: "ELIMINACIÓN_PERMISO",
            Estado: false,
        });

        res.json({ message: "Permiso eliminado correctamente" });
    } catch (error) {
        next(error);
    }
};
  