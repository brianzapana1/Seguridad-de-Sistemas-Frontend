<template>
  <router-view />
</template>

<script>
export default {
name: 'App',
};
</script>

<style>
body, #app {
margin: 0;
padding: 0;
min-height: 100vh;
display: flex;
flex-direction: column;
overflow-x: hidden; /* Evita el desbordamiento horizontal en toda la página */
font-family: 'Roboto', serif; /* Aplica la fuente de manera global */
}

.content {
flex: 1;
}
</style>