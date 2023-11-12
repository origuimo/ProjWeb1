<template>
    <div class="show-game">
      <div class="title-section">
        <h1>{{ title }}</h1>
        </div>
      <div class="main-section">
        <div class="left-section">
          <div class="info-container">
            <div class="info-section">
              <div class="info-text">Files i columnes:&nbsp;&nbsp;</div>
              <div class="info-value">{{ primerNumero }}</div>
            </div>
            <div class="info-section">
              <div class="info-text">HP del jugador:&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div class="info-value">{{ segundoNumero }}</div>
            </div>
            <div class="info-section">
              <div class="info-text">Nom de la partida:&nbsp;</div>
              <div class="info-value">{{ nom }}</div>
            </div>
          </div>
        </div>
        <div class="cuadricula-container">
          <div class="grid-container" :style="{ gridTemplateColumns: `repeat(${parseInt(primerNumero)}, 1fr)`, gridGap: dynamicGridGap, width: gridWidth + 'px' }">
            <div v-for="n in Number(primerNumero) * Number(primerNumero)" :key="n" class="grid-square"></div>

          </div>
        </div>
      </div>
      <div class="button-section">
            <button @click="navigateToOption1">Join</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        title: 'Info Game',
        primerNumero: 4,
        segundoNumero: 14,
        nom: 'Partida',
      };
    },
    props: ['playerData'],
  mounted() {
    console.log('Props en InfoGame:', this.primerNumero, this.segundoNumero, this.nom);
  },
    computed: {

      ...mapState(['primerNumero', 'segundoNumero', 'nom']),
      dynamicGridGap() {
        const baseGap = 5;
        const minColumnsForGap = 5;
        const columns = parseInt(this.primerNumero);
        return columns >= minColumnsForGap ? `${baseGap}px` : '5px';
      },
      gridWidth() {
        const baseSquareSize = 50; // Tamaño base de cada cuadrado
        const gap = parseInt(this.dynamicGridGap);
        const columns = parseInt(this.primerNumero);
        return columns * baseSquareSize + (columns - 1) * gap;
      },
    },
    methods: {
    navigateToOption1() {
      this.$router.push('/gameview');
    },
  },
  };
  </script>
  
  <style>
  .show-game {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    height: 100vh;
    background-image: url('@/assets/images/fono2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
  }
  
  .title-section {
    margin-top: 2%;
  }
  
  .main-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .left-section {
    width: 49%;
  }
  
  .info-container {
    margin-left: 34%;
    margin-top: 28%;
  }
  
  .cuadricula-container {
    align-items: center;
    width: 47%;
    margin-left: 20%;
    margin-top: 10%;
  }
  
  .grid-title {
    text-align: center;
  }
  
  .grid-container {
    display: grid;
    grid-gap: 5px;
  }
  
  .grid-square {
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: center;
    background-image: url('@/assets/images/espases.avif');
  }
  
  .info-section {
    display: flex;
    align-items: center;
    margin-top: 5%;
  }
  
  .info-text {
    font-family: 'Press Start 2P', cursive;
    color: white;
    margin-right: 10px;
  }
  
  .info-value {
    font-family: 'Press Start 2P', cursive;
    color: yellow; /* Color rojo para el texto */
    font-size: 1.3em; /* Tamaño de texto más grande */
  }

  .button-section {
  display: grid;
  justify-content: center;
  margin-bottom: 5%;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-image: url('@/assets/images/button.jpg');
}
  </style>
  