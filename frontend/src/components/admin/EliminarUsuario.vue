<template>
    <div class="admin-dashboard">
      <h1 class="welcome-message">🗑️ Eliminar Usuario</h1>
  
      <div class="admin-info">
        <h2>Usuarios Registrados</h2>
  
        <table class="admin-info-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.idUsuario">
              <td>{{ usuario.Nombre_usuario }}</td>
              <td>{{ usuario.Correo }}</td>
              <td>
                <button @click="eliminarUsuario(usuario.idUsuario)" class="delete-button">❌ Eliminar</button>
              </td>
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
      async eliminarUsuario(idUsuario) {
        if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
          try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/usuarios/${idUsuario}`);
            alert("Usuario eliminado correctamente");
            this.cargarUsuarios();
          } catch (error) {
            console.error("Error al eliminar usuario:", error);
          }
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
  
  .delete-button {
    background: red;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .delete-button:hover {
    background: darkred;
  }
  </style>
  