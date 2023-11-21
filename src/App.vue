<template>

    <router-view /> <!-- Esto mostrará el componente correspondiente según la ruta actual -->

</template>

<script>
import store from './store/store';


export default {
  name: 'App',
  store, // Hacer que el store esté disponible para todos los componentes
};
</script>

<style>
/* Estilos globales para la aplicación */
</style>
