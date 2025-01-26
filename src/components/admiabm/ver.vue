<template>
  <div class="page-container">
    <nav class="navbar">Gestión de Roles</nav>
    <div class="background-overlay">
      <!-- Sección de Usuarios con Rol -->
      <div class="role-container">
        <h1>Usuarios con Rol</h1>
        <table>
          <thead>
            <tr>
              <th>ID Usuario</th>
              <th>Nombre</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in usersWithRole" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sección de Usuarios Sin Rol -->
      <div class="role-container">
        <h1>Usuarios Sin Rol</h1>
        <table>
          <thead>
            <tr>
              <th>ID Usuario</th>
              <th>Nombre</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in usersWithoutRole" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>No asignado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersWithRole: [
        { id: 1, name: 'Juan Pérez', role: 'Administrador' },
        { id: 2, name: 'Ana Gómez', role: 'Editor' },
      ],
      usersWithoutRole: [
        { id: 3, name: 'Carlos López', role: 'No asignado' },
        { id: 4, name: 'Sofía Ramírez', role: 'No asignado' },
      ],
    };
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}
.navbar {
  background-color: #082447;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
}
.background-overlay {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f0;
  padding: 20px 0;
}
.role-container {
  max-width: 800px;
  width: 90%;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}
h1 {
  color: #004080;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: #004080;
  color: white;
}
th,
td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}
tr:hover {
  background-color: #003366;
}
tr:hover td {
  background-color: #f4f4f4;
}
</style>
