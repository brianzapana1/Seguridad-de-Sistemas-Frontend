import { logsDb } from "../config/database.js";

/**
 * Registra un evento en la tabla Logs_Permisos.
 * @param {Object} data - Información del evento.
 * @param {number} data.idAdministrador_mod - ID del administrador que realizó la acción.
 * @param {number} data.idUsuario - ID del usuario afectado.
 * @param {number} data.idModulo - ID del módulo afectado.
 * @param {string} data.Permiso - Permiso asignado o removido (Ejemplo: "CREAR", "EDITAR").
 * @param {boolean} data.Estado - Estado del permiso (true para asignado, false para removido).
 */
export const registrarLogPermiso = async ({ idAdministrador_mod, idUsuario, idModulo, Permiso, Estado }) => {
    try {
        // 🔹 Obtener la fecha actual en UTC
        const fechaUTC = new Date();

        // 🔥 Ajustar manualmente la hora a Bolivia (UTC-4)
        fechaUTC.setHours(fechaUTC.getHours() - 4);

        // ✅ Convertir a formato ISO compatible con PostgreSQL
        const fechaISO = fechaUTC.toISOString();

        await logsDb.logs_Permissions.create({
            data: {
                idAdministrador_mod,
                idUsuario,
                idModulo,
                Permiso,
                Estado,
                Fecha: fechaISO, // 🔥 Ahora sí está en el formato correcto
            },
        });

        console.log(`✅ Log de permiso registrado: [${Permiso}] para usuario ${idUsuario} - Fecha: ${fechaISO}`);
    } catch (error) {
        console.error("❌ Error registrando log en Logs_Permissions:", error.message);
    }
};

