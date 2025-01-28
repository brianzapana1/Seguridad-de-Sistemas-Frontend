import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth/admin';

export const adminService = {
    async obtenerDatosAdmin(token) {
        try {
            const response = await axios.get(`${API_URL}/info`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (error) {
            throw error.response?.data?.error || 'Error al obtener la información del administrador';
        }
    },

    async guardarDatosAdmin(token, admin) {
        try {
            const response = await axios.put(`${API_URL}/update`, {
                Nombre: admin.nombreCompleto.split(' ')[0],
                Seg_Nombre: admin.nombreCompleto.split(' ')[1] || null,
                Tercer_Nombre: admin.nombreCompleto.split(' ')[2] || null,
                Apellido_Paterno: admin.nombreCompleto.split(' ')[3],
                Apellido_Materno: admin.nombreCompleto.split(' ')[4] || null,
                Correo: admin.correo,
                Telefono: admin.telefono,
                Direccion: admin.direccion,
                Historial_acad: admin.historial_acad
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            return response.data;
        } catch (error) {
            throw error.response?.data?.error || 'Error al guardar los datos del administrador';
        }
    }
};
