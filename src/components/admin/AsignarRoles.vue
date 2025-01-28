<template>
    <div class="admin-dashboard">
      <h1 class="welcome-message">⚖️ Asignar Roles</h1>
  
      <div class="admin-info">
        <h2>👤 Seleccionar Usuario</h2>
        <div class="form-group">
          <select v-model="usuarioSeleccionado">
            <option disabled value="">Seleccione un usuario...</option>
            <option v-for="usuario in usuarios" :key="usuario.idUsuario" :value="usuario.idUsuario">
              {{ usuario.Nombre_usuario }} ({{ usuario.Correo }})
            </option>
          </select>
        </div>
  
        <h2>🎭 Seleccionar Rol</h2>
        <div class="form-group">
          <select v-model="nuevoRol">
            <option disabled value="">Seleccione un rol...</option>
            <option v-for="rol in roles" :key="rol.idRol" :value="rol.idRol">
              {{ rol.Nombre }}
            </option>
          </select>
        </div>
  
        <button @click="asignarRol" class="save-button" :disabled="!usuarioSeleccionado || !nuevoRol">
          ✅ Asignar Rol
        </button>
  
        <p v-if="mensajeError" class="error-message">{{ mensajeError }}</p>
        <p v-if="mensajeExito" class="success-message">{{ mensajeExito }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        usuarios: [],
        roles: [],
        usuarioSeleccionado: "",
        nuevoRol: "",
        mensajeError: "",
        mensajeExito: "",
      };
    },
    methods: {
      async cargarDatos() {
        try {
          const [usuariosResponse, rolesResponse] = await Promise.all([
            axios.get("http://localhost:3001/api/usuario/all", { withCredentials: true }),
            axios.get("http://localhost:3001/api/rol/all", { withCredentials: true }),
          ]);
          this.usuarios = usuariosResponse.data;
          this.roles = rolesResponse.data;
        } catch (error) {
          console.error("❌ Error cargando datos:", error);
        }
      },
      async asignarRol() {
        if (!this.usuarioSeleccionado || !this.nuevoRol) {
          this.mensajeError = "⚠️ Debes seleccionar un usuario y un rol.";
          return;
        }
  
        try {
          await axios.post(
            "http://localhost:3001/api/usuariorol/register",
            {
              idUsuario: this.usuarioSeleccionado,
              idRol: this.nuevoRol,
            },
            { withCredentials: true }
          );
          this.mensajeExito = "✅ Rol asignado correctamente.";
          this.mensajeError = "";
          this.cargarDatos();
        } catch (error) {
          console.error("❌ Error al asignar rol:", error);
          this.mensajeError = "⚠️ No se pudo asignar el rol. Intenta de nuevo.";
          this.mensajeExito = "";
        }
      },
    },
    mounted() {
      this.cargarDatos();
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/adminStyles.css";
  
  .error-message {
    color: red;
    font-size: 0.9em;
    margin-top: 10px;
  }
  
  .success-message {
    color: green;
    font-size: 0.9em;
    margin-top: 10px;
  }
  </style>
  