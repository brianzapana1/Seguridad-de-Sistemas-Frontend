<template>
    <div class="admin-dashboard">
      <h1 class="welcome-message">👥 Lista de Usuarios</h1>
  
      <div class="admin-info">
        <h2>Usuarios Registrados</h2>
  
        <table class="admin-info-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.idUsuario">
              <td>{{ usuario.Nombre_usuario }}</td>
              <td>{{ usuario.Correo }}</td>
              <td>{{ usuario.rolNombre }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return { usuarios: [] };
    },
    methods: {
      async cargarUsuarios() {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/usuarios`);
          this.usuarios = response.data;
        } catch (error) {
          console.error("Error al cargar usuarios:", error);
        }
      },
    },
    mounted() {
      this.cargarUsuarios();
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/adminStyles.css";
  </style>
  