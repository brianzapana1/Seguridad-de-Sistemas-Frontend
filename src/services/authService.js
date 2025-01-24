import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth';

export const authService = {
    async login(nombreUsuario, contrasena) {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                Nombre_usuario: nombreUsuario,
                Contrasenia: contrasena,
            });

            return response.data; // Devuelve el token y el rol
        } catch (error) {
            throw error.response?.data?.error || 'Error en la autenticación';
        }
    }
};
