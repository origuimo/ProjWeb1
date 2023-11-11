<template>
  <div class="newgame">
    <div class="title-section">
      <h1>{{ title }}</h1>
    </div>
    <div class="main-section">
      <div class="left-section">
        <div class="input-container">
          <div class="input-section">
            <div class="section1">
              <div class="text">Files i columnes:&nbsp;&nbsp;</div>
              <input type="text" v-model="firstNumber" placeholder="First Number" />
            </div>
            <div class="section2">
              <div class="text">HP del jugador:&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input type="text" v-model="secondNumber" placeholder="Second Number" />
            </div>
            <div class="section3">
              <div class="text">Nom de la partida:&nbsp;</div>
              <input type="text" v-model="nom" placeholder="Nom" />
            </div>
            <div class="spacer"></div>
            <div class="button-section">
              <button @click="saveNumbers">Save Numbers</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cuadricula-container">
        <div class="grid-container" :style="{ gridTemplateColumns: `repeat(${parseInt(firstNumber)}, 1fr)`, gridGap: dynamicGridGap, width: gridWidth + 'px' }">
          <div v-for="n in parseInt(firstNumber) * parseInt(firstNumber)" :key="n" class="grid-square"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  data() {
    return {
      title: 'New Game',
      firstNumber: 0,
      secondNumber: 0,
      nom: ' ',
    };
  },
  computed: {
    dynamicGridGap() {
      const baseGap = 5;
      const minColumnsForGap = 5;
      const columns = parseInt(this.firstNumber);
      return columns >= minColumnsForGap ? `${baseGap}px` : '5px';
    },
    gridWidth() {
      const baseSquareSize = 50; // Tamaño base de cada cuadrado
      const gap = parseInt(this.dynamicGridGap);
      const columns = parseInt(this.firstNumber);
      return columns * baseSquareSize + (columns - 1) * gap;
    },
  },
  methods: {
    saveNumbers() {
      const store = useStore();
      store.commit('guardarNumeros', { primerNumero: this.firstNumber, segundoNumero: this.secondNumber, nom: this.nom });
      console.log('Números guardados en el store:', this.$store.state);
    },
  },
};
</script>

<style>
.newgame {
  display: flex;
  flex-direction: column; /* Cambiado a columna */
  align-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url('@/assets/images/fono2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px; /* Añadido para mejorar la apariencia */
}

.title-section {
  margin-top: 2%;
}

.main-section {
  display: flex;
  justify-content: space-between; /* Alineación entre las secciones */
  width: 100%;
}

.left-section{
  width: 49%;
}
.right-section {
  width: 47%; /* Ajusta el ancho según sea necesario, considerando el espacio entre ellas */
}

.input-container{
  align-items: center;
  margin-left: 34%;
  margin-top: 28%;
}
.cuadricula-container {
  align-items: center;
  width: 47%; /* Ajustado al mismo ancho que left-section */
  margin-left: 20%;
  margin-top: 10%;
}

.grid-title {
  text-align: center;
}


h1 {
  font-size: 3.5em;
  margin: 40px;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


.input-section,
.grid-section {
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

.section1 {
  display: flex;
  align-items: center;
}

.section2 {
  display: flex;
  align-items: center;
  margin-top: 5%;
}
.section3 {
  display: flex;
  align-items: center;
  margin-top: 5%;
}

.text {
  font-family: 'Press Start 2P', cursive;
  color: white;
  margin-right: 10px;
}

input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.spacer {
  height: 20px; /* Ajusta según sea necesario */
}

.button-section {
  display: flex;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
