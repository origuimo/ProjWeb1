<template>
  <div class="menu-container">
    <h1>{{ title }}</h1>
    <div class="options">
      <button @click="navigateToOption1">Create character</button>
      <button @click="navigateToOption2">Create game</button>
      <button @click="navigateToOption3">Show ranking</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Menú Principal',
    };
  },
  methods: {
    navigateToOption1() {
      this.$router.push('/createchar');
    },
    navigateToOption2() {
      this.$router.push('/newgame');
    },
    navigateToOption3() {
      this.$router.push('/showrank');
    },
  },
};
</script>

<style>
.menu-container {
  flex-direction: column;
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

h1 {
  font-size: 2.5em;
  margin-left: 30%;
  align-self: flex-start;
}

.options {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%; /* Ajusta este valor para reducir el espacio entre el título y los botones */
}

button {
  width: 350px; /* Ajusta el ancho según tus preferencias */
  height: 80px;
  padding: 20px;
  font-size: 1.5em;
  font-weight: bold;
  position: relative;
  background-image: url('@/assets/images/pacman5.jpg');
  background-size: cover;
  background-position: center;
  color: white; /* Color del texto */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10% 0;
}


</style>