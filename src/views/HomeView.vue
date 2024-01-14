<template>
  <!-- Vista de la pantalla de entrada al juego -->
    <div class="container" @click="navigateToOtherPage">
      <div class="titol1">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
      </div>
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
        this.$router.push('/menulogin');
      },
    },
  };
  </script>
  
  <style >
.container {
    display: flex;
    text-align: center;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('@/assets/images/portada2.jpg');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
}
  
  body, html {
    margin: 0;
    padding: 0;
  }
  
  .titol1 {
    margin-bottom: 27%;
  }
  
  h1 {
    font-size: 4em;
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    background: linear-gradient(180deg, orangered, yellow);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  h2 {
    font-size: 1em;
    margin: 0;
    font-family: 'Press Start 2P', cursive;
  }
  
  .subtitle {
    position: absolute;
    bottom: 90px;
    font-family: 'Press Start 2P', cursive;
    font-size: 1.4em;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .fight {
    position: absolute;
    font-family: 'Press Start 2P', cursive;
    margin-top: 145px;
    font-size: 1.5em;
    left: 50%;
    transform: translateX(-50%);
  }
  </style>