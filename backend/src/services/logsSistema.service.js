import { logsDb } from "../config/database.js";

/**
 * Registra un evento en Logs_Sistema.
 * @param {Object} data - Información del evento a registrar.
 * @param {number|null} data.idUsuario - ID del usuario (puede ser null si no aplica).
 * @param {string} data.Tipo_evento - Tipo de evento (ej. INICIO_SERVIDOR, ERROR_DB, etc.).
 * @param {string} data.Descripcion - Descripción del evento.
 * @param {string} data.Nivel - Nivel del evento (INFO, WARN, ERROR).
 * @param {string} [data.ipUsuario] - Dirección IP del usuario (opcional).
 */
export const registrarLogSistema = async ({ idUsuario, Tipo_evento, Descripcion, Nivel, ipUsuario }) => {
    try {
      // ✅ Asegurar que idUsuario nunca sea null o undefined
      const idUsuarioFinal = idUsuario ?? 1; 
  
      // ✅ Ajustar la hora a Bolivia
      const fechaBolivia = new Date();
      fechaBolivia.setHours(fechaBolivia.getHours() - 4); // UTC-4
      const fechaISO = fechaBolivia.toISOString();
  
      await logsDb.logs_Sistema.create({
        data: {
          idUsuario: idUsuarioFinal, // ✅ Ahora siempre tendrá un valor válido
          Tipo_evento,
          Descripcion,
          ipUsuario: ipUsuario || "0.0.0.0",
          Nivel,
          Fecha: fechaISO,
        },
      });
  
      console.log(`✅ Log registrado en Logs_Sistema: [${Tipo_evento}] - ${Descripcion} - ${fechaISO}`);
    } catch (error) {
      console.error("❌ Error registrando log en Logs_Sistema:", error.message);
    }
  };
  
  
