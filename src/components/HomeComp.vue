<template>
  <div class="container" @click="navigateToOtherPage">
    <h1>{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="fight">{{ fight }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Battle Arena',
      subtitle: 'Click on the screen to continue...',
      fight: 'Get ready to fight!',
    };
  },
  methods: {
    navigateToOtherPage() {
      this.$router.push('/menu'); // Navegar a la página 'OtherPage'
    },
  },
};
</script>

<style>
.container {
  position: relative; /* Añade la posición relativa para ajustar el texto en la parte inferior */
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/fono2.jpg');
  background-size: 100%; /* Ajusta este valor según tus necesidades */
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

body, html {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 4em;
  margin: 0;
  font-family: 'Press Start 2P', cursive; /* Asegúrate de haber importado la fuente en tu proyecto */
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  position: absolute;
  bottom: 90px; /* Ajusta la posición del texto según sea necesario */
  font-family: 'Press Start 2P', cursive; /* Asegúrate de haber importado la fuente en tu proyecto */
  font-size: 1.4em; /* Ajusta el tamaño del texto según sea necesario */
  left: 50%;
  transform: translateX(-50%);
}

.fight {
  position: absolute;
  font-family: 'Press Start 2P', cursive; /* Asegúrate de haber importado la fuente en tu proyecto */
  margin-top: 145px; /* Agrega un margen superior entre las frases */
  font-size: 1.5em;
  left: 50%;
  transform: translateX(-50%);
  
}
</style>
