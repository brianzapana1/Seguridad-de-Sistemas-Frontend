<template>
  <div class="admin-dashboard">
    <h1 class="welcome-message">Bienvenido al Panel de Administración</h1>

    <div v-if="authStore.tieneAlgunPermiso" class="admin-info">
      <h2>Información del Administrador</h2>
      
      <form v-if="isEditing && authStore.tienePermiso('admin', 'actualizar')" @submit.prevent="guardarDatosAdmin" class="edit-form">
        <div class="form-group">
          <label for="nombreCompleto">Nombre Completo</label>
          <input v-model="admin.nombreCompleto" type="text" id="nombreCompleto" required />
        </div>
        <div class="form-group">
          <label for="correo">Correo Electrónico</label>
          <input v-model="admin.correo" type="email" id="correo" required />
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono</label>
          <input v-model="admin.telefono" type="text" id="telefono" required />
        </div>
        <div class="form-group">
          <label for="direccion">Dirección</label>
          <input v-model="admin.direccion" type="text" id="direccion" required />
        </div>
        <div class="form-group">
          <label for="historial_acad">Historial Académico</label>
          <textarea v-model="admin.historial_acad" id="historial_acad" required></textarea>
        </div>
        <div class="form-group">
          <label for="nombre_usuario">Nombre de Usuario</label>
          <input v-model="admin.nombre_usuario" type="text" id="nombre_usuario" disabled />
        </div>
        <div class="form-group">
          <label for="rol">Rol</label>
          <input v-model="admin.rol" type="text" id="rol" disabled />
        </div>
        <button class="save-button" type="submit">Guardar cambios</button>
      </form>

      <div v-else>
        <table class="admin-info-table">
          <tbody>
            <tr><td><strong>Nombre Completo:</strong></td><td>{{ admin.nombreCompleto }}</td></tr>
            <tr><td><strong>Correo Electrónico:</strong></td><td>{{ admin.correo }}</td></tr>
            <tr><td><strong>Teléfono:</strong></td><td>{{ admin.telefono }}</td></tr>
            <tr><td><strong>Dirección:</strong></td><td>{{ admin.direccion }}</td></tr>
            <tr><td><strong>Historial Académico:</strong></td><td>{{ admin.historial_acad }}</td></tr>
            <tr><td><strong>Nombre de Usuario:</strong></td><td>{{ admin.nombre_usuario }}</td></tr>
            <tr><td><strong>Rol:</strong></td><td>{{ admin.rol }}</td></tr>
          </tbody>
        </table>
        
        <button v-if="authStore.tieneAlgunPermiso" class="edit-button" @click="isEditing = true">
          Editar Datos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authStore';
import { useAdmin } from '@/composables/useAdmin';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const { admin, isEditing, obtenerDatosAdmin, guardarDatosAdmin } = useAdmin();
    
    // ✅ Solo redirigir si no tiene ningún permiso asignado
    if (!authStore.tieneAlgunPermiso) {
      console.warn("⚠️ No tienes permisos. Redirigiendo...");
      console.log("Permisos actuales:", authStore.permisos);  // 🔍 Verifica si hay permisos
      router.push('/');
    }



    return { authStore, admin, isEditing, obtenerDatosAdmin, guardarDatosAdmin };
  }
};

</script>





<style scoped>
.admin-dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  text-align: center;
  animation: fadeIn 1.2s ease-in-out;
}

.welcome-message {
  font-size: 2.2em;
  color: #333;
  margin-bottom: 30px;
  animation: slideDown 1s ease forwards;
  opacity: 0;
}

.admin-info {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.admin-info h2 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.edit-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 8px;
}

.form-group input, .form-group textarea {
  padding: 12px;
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
}

.form-group input:focus, .form-group textarea:focus {
  border-color: #4b9ce2;
}

.form-group input:disabled, .form-group textarea:disabled {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
}

.save-button {
  padding: 12px 25px;
  font-size: 1.2em;
  background-color: #4b9ce2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 20px;
}

.save-button:hover {
  background-color: #3a80c1;
}

.edit-button {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1.1em;
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.edit-button:hover {
  background-color: #e68a00;
}

.admin-info-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

.admin-info-table td {
  padding: 12px;
  text-align: left;
}

.admin-info-table td:first-child {
  font-weight: bold;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>
