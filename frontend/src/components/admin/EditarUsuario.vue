<template>
    <div class="admin-dashboard">
      <h1 class="welcome-message">✏️ Editar Usuario</h1>
  
      <div class="admin-info">
        <h2>Seleccionar Usuario</h2>
  
        <select v-model="usuarioSeleccionado" class="form-group">
          <option v-for="usuario in usuarios" :key="usuario.idUsuario" :value="usuario.idUsuario">
            {{ usuario.Nombre_usuario }} ({{ usuario.Correo }})
          </option>
        </select>
  
        <div v-if="usuarioSeleccionado">
          <h2>✏️ Editar Datos</h2>
          <form @submit.prevent="editarUsuario" class="edit-form">
            <div class="form-group">
              <label>Nombre:</label>
              <input v-model="usuarioEditado.Nombre_usuario" type="text" required />
            </div>
            <div class="form-group">
              <label>Correo:</label>
              <input v-model="usuarioEditado.Correo" type="email" required />
            </div>
            <div class="form-group">
              <label>Teléfono:</label>
              <input v-model="usuarioEditado.Telefono" type="text" />
            </div>
            <div class="form-group">
              <label>Dirección:</label>
              <input v-model="usuarioEditado.Direccion" type="text" />
            </div>
  
            <button class="save-button" type="submit">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return { usuarios: [], usuarioSeleccionado: null, usuarioEditado: {} };
    },
    methods: {
      async cargarUsuarios() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/usuarios`);
        this.usuarios = response.data;
      },
      async editarUsuario() {
        try {
          await axios.put(`${import.meta.env.VITE_API_URL}/usuarios/${this.usuarioSeleccionado}`, this.usuarioEditado);
          alert("Usuario editado correctamente");
          this.cargarUsuarios();
        } catch (error) {
          console.error("Error al editar usuario:", error);
        }
      },
    },
    watch: {
      usuarioSeleccionado(newVal) {
        if (newVal) {
          const usuario = this.usuarios.find(u => u.idUsuario === newVal);
          this.usuarioEditado = { ...usuario };
        }
      }
    },
    mounted() {
      this.cargarUsuarios();
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/adminStyles.css";
  </style>
  