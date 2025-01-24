import { defineStore } from 'pinia';
import { authService } from '@/services/authService';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: sessionStorage.getItem('token') || null, 
    user: sessionStorage.getItem('nombreUsuario') || null, 
    rol: sessionStorage.getItem('rol') || null,
    mensaje: '',  // ✅ Agregado mensaje
    mensajeTipo: ''  // ✅ Agregado tipo de mensaje (éxito/error)
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.rol === 'Admin',
    isUsuario: (state) => state.rol === 'Usuario',
  },
  actions: {
    async login(nombreUsuario, contrasena) {
      try {
        const data = await authService.login(nombreUsuario, contrasena);
        if (!data.token || !data.rol) throw new Error('Respuesta inválida');

        // ✅ Guardamos datos en el estado
        this.token = data.token;
        this.user = nombreUsuario;
        this.rol = data.rol;
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('nombreUsuario', nombreUsuario);
        sessionStorage.setItem('rol', data.rol);

        // ✅ Mensaje de éxito
        this.mensaje = 'Inicio de sesión exitoso';
        this.mensajeTipo = 'exito';
      } catch (error) {
        // ✅ Mensaje de error
        this.mensaje = error || 'Error en la autenticación';
        this.mensajeTipo = 'error';
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      this.rol = null;
      sessionStorage.clear();

      // ✅ Mensaje de sesión cerrada
      this.mensaje = 'Sesión cerrada correctamente';
      this.mensajeTipo = 'exito';
    }
  },
});
