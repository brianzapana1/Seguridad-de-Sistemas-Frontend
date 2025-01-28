<template>
  <div class="admin-dashboard">
    <h1 class="welcome-message">👥 Lista de Usuarios</h1>

    <div class="admin-info">
      <h2>Usuarios Registrados</h2>

      <table class="admin-info-table">
        <thead>
          <tr>
            <th>ID Usuario</th>
            <th>ID Persona</th>
            <th>Nombre de Usuario</th>
            <th>Contraseña</th>
            <th>Estado</th>
            <th>Intentos Fallidos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.idUsuario">
            <td>{{ usuario.idUsuario }}</td>
            <td>{{ usuario.idPersona }}</td>
            <td>{{ usuario.Nombre_usuario }}</td>
            <td>🔒 Oculta por seguridad</td>
            <td>
              <span :class="usuario.Bloqueado ? 'blocked' : 'active'">
                {{ usuario.Bloqueado ? "Bloqueado" : "Activo" }}
              </span>
            </td>
            <td>{{ usuario.intentos_fallidos }}</td>
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
        const response = await axios.get("http://localhost:3001/api/usuario/all", { withCredentials: true });

        console.log("📥 Datos recibidos de la API:", response.data); // 🔥 Para verificar qué datos devuelve el backend

        if (response.data && Array.isArray(response.data.usuarios)) {
          this.usuarios = response.data.usuarios;
          console.log("📌 Usuarios cargados en el frontend:", this.usuarios);
        } else {
          console.error("⚠️ La API no devolvió la lista esperada de usuarios.");
        }
      } catch (error) {
        console.error("❌ Error al cargar usuarios:", error);
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

/* Estilo para el estado de usuario */
.blocked {
  color: red;
  font-weight: bold;
}
.active {
  color: green;
  font-weight: bold;
}
</style>
