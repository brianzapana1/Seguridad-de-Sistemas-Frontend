<template>
    <div>
        <NavbarAdmin />
        <router-view />
    </div>
</template>

<script>
    import NavbarAdmin from './NavbarAdmin.vue';
    
    export default{
        components :{
            NavbarAdmin,
        }
    }
</script>

<style>
    /*Estilos*/ 
</style>