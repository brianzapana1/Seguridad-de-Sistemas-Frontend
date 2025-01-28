import { defineStore } from "pinia";
import authService from "@/services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    roles: [],
    permisos: [],
    mensaje: "",
    mensajeTipo: "",
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,

    tienePermiso: (state) => (modulo, permiso) => {
      const mod = state.permisos.find((p) => p.modulo === modulo);
      console.log("Verificando permisos:", { modulo, permiso, mod });
      return mod ? mod.permisos[permiso] : false;
    },

    tieneAlgunPermiso: (state) => {
      console.log("🔍 Verificando si el usuario tiene permisos:", state.permisos);
      return state.permisos.length > 0;
    },
    
    

    obtenerRoles: (state) => state.roles.map((rol) => rol.Nombre),
  },

  actions: {
    async login(nombreUsuario, contrasena) {
      try {
        await authService.login(nombreUsuario, contrasena);
        
        // 🔥 Esperar un momento antes de obtener la sesión (evita race conditions)
        await new Promise(resolve => setTimeout(resolve, 500));
    
        // 🔥 Llamar a obtenerUsuarioAutenticado() después del login
        await this.obtenerUsuarioAutenticado();
    
        this.mensaje = "Inicio de sesión exitoso";
        this.mensajeTipo = "exito";
      } catch (error) {
        console.error("Error en autenticación:", error);
        this.mensaje = error.response?.data?.message || "Error en la autenticación";
        this.mensajeTipo = "error";
      }
    },
    

    async obtenerUsuarioAutenticado() {
      try {
        const response = await authService.getUserInfo();
        console.log("✅ Datos del usuario obtenidos:", response.data);
        
        this.user = response.data.usuario.Nombre_usuario;
        this.roles = [response.data.usuario.Rol];
        this.permisos = response.data.permisos;
    
        console.log("🔍 Permisos asignados al usuario:", this.permisos);
    
      } catch (error) {
        console.warn("⚠️ No hay sesión activa:", error);
        this.logout();
      }
    },
    

    async logout() {
      try {
        await authService.logout();
      } catch (error) {
        console.warn("⚠️ Error cerrando sesión:", error);
      } finally {
        this.user = null;
        this.roles = [];
        this.permisos = [];
      }
    },
  },
});
