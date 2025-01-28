import { registrarPersona, obtenerPersonas, editarPersona, eliminarPersona } from "../services/personas.service.js";

export const registerPersona = async (req, res) => {
  try {
    const persona = await registrarPersona(req.body);
    res.status(201).json({ message: "Persona registrada exitosamente.", persona });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPersonas = async (req, res) => {
  try {
    const personas = await obtenerPersonas();
    res.status(200).json({ success: true, personas });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePersona = async (req, res) => {
  try {
    const updatedPerson = await editarPersona(req.params.id, req.body);
    res.json({ message: "Persona actualizada exitosamente.", person: updatedPerson });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePersona = async (req, res) => {
  try {
    const result = await eliminarPersona(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
