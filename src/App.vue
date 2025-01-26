<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

onMounted(() => {
  authStore.obtenerUsuarioAutenticado(); // 🔥 Verifica si hay sesión activa al iniciar
});
</script>

<style>
body, #app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  font-family: 'Roboto', serif;
}

.content {
  flex: 1;
}
</style>
