import { db as prisma } from "../config/database.js";


export const registrarPersona = async (data) => {
  return await prisma.persona.create({ data });
};

export const obtenerPersonas = async () => {
  return await prisma.persona.findMany();
};

export const editarPersona = async (id, data) => {
  const personId = parseInt(id, 10);
  if (isNaN(personId)) throw new Error("El id proporcionado no es válido.");

  const existingPerson = await prisma.persona.findUnique({
    where: { idPersona: personId },
  });

  if (!existingPerson) throw new Error("Persona no encontrada.");

  return await prisma.persona.update({
    where: { idPersona: personId },
    data,
  });
};

export const eliminarPersona = async (id) => {
  const personId = parseInt(id, 10);
  if (isNaN(personId)) throw new Error("El id proporcionado no es válido.");

  const existingPerson = await prisma.persona.findUnique({
    where: { idPersona: personId },
  });

  if (!existingPerson) throw new Error("Persona no encontrada.");

  await prisma.persona.delete({ where: { idPersona: personId } });

  return { message: "Persona eliminada exitosamente." };
};
