<template>
    <div class="other-page">
      <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Welcome to the Other Page!',
    };
  },
};
</script>

<style>
.other-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-image: url('@/assets/images/fono2.jpg'); /* Utiliza una ruta relativa para la imagen de fondo */
  background-size: cover;
  background-position: center;
}
</style>
