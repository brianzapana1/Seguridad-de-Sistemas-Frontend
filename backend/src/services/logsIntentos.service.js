import { logsDb } from "../config/database.js";

/**
 * Registra un intento de inicio de sesión en `Logs_Intentos_Login`.
 * @param {number} idUsuario - ID del usuario (puede ser null si no existe).
 * @param {string} ipUsuario - Dirección IP del usuario.
 * @param {boolean} exitoso - Indica si el intento fue exitoso o no.
 * @param {string} motivoFallo - Razón del fallo (si aplica).
 * @param {number} numeroIntento - Número del intento.
 */
export const registrarIntentoLogin = async (idUsuario, ipUsuario, exitoso, motivoFallo, numeroIntento) => {
  try {
    // 🔹 Obtener la fecha actual en UTC
    // ✅ Ajustar la hora a Bolivia
    const fechaBolivia = new Date();
    fechaBolivia.setHours(fechaBolivia.getHours() - 4); // UTC-4
    const fechaISO = fechaBolivia.toISOString();

    await logsDb.logs_Intentos_Login.create({
      data: {
        idUsuario,
        ipUsuario: ipUsuario || "0.0.0.0",
        Fecha_intento: fechaISO,
        Exitoso: exitoso,
        Motivo_fallo: motivoFallo || null,
        Numero_intento: numeroIntento,
      },
    });

    console.log(`✅ Intento de login registrado: Usuario ${idUsuario}, Exitoso: ${exitoso}, Intento #${numeroIntento}`);
  } catch (error) {
    console.error("❌ Error registrando intento de login:", error.message);
  }
};
