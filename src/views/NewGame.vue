<template>
  <div class="newgame">
    <h1>{{ title }}</h1>

    <!-- Sección de Inputs y Textos alineada a la izquierda -->
    <div class="input-section">
      <div class="section">
        <div class="text">Nombre de files i columnes:</div>
        <input type="text" v-model="firstNumber" placeholder="First Number" />
      </div>
      <div class="section">
        <div class="text">HP del jugador:</div>
        <input type="text" v-model="secondNumber" placeholder="Second Number" />
      </div>

      <!-- Más espacio entre las secciones -->
      <div class="spacer"></div>

      <!-- Botón centrado en la parte inferior -->
      <div class="button-section">
        <button @click="saveNumbers">Save Numbers</button>
      </div>
    </div>

    <!-- Sección de Cuadrícula alineada a la derecha -->
    <div class="grid-section">
      <h2>Representación de la cuadrícula:</h2>
      <div class="grid-container" :style="{ gridTemplateColumns: `repeat(${parseInt(firstNumber)}, 1fr)`, gridGap: dynamicGridGap }">
        <div v-for="n in parseInt(firstNumber) * parseInt(firstNumber)" :key="n" class="grid-square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'New Game',
      firstNumber: 0,
      secondNumber: 0,
    };
  },
  computed: {
    dynamicGridGap() {
      // Ajusta el espacio dinámicamente en función del número de columnas
      const baseGap = 5; // Espacio base entre columnas
      const minColumnsForGap = 5; // Número mínimo de columnas para aplicar el espacio
      const columns = parseInt(this.firstNumber);
      return columns >= minColumnsForGap ? `${baseGap}px` : '5px';
    },
  },
  methods: {
    saveNumbers() {
      // Implementa la lógica para guardar los números
      console.log('Primer número:', this.firstNumber);
      console.log('Segundo número:', this.secondNumber);
    },
  },
};
</script>

<style>
.newgame {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url('@/assets/images/fono2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
}

h1 {
  font-size: 3.5em;
  margin: 40px;
  font-family: 'Press Start 2P', cursive; /* Asegúrate de haber importado la fuente en tu proyecto */
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.input-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.grid-section {
  text-align: center;
}

.grid-container {
  display: grid;
  grid-gap: 10px; /* Espaciado entre las celdas */
}

.grid-square {
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/images/espases.avif');
}

.section {
  display: flex;
  align-items: center; /* Alinea los elementos verticalmente */
}

.text {
  font-family: 'Press Start 2P', cursive; /* Asegúrate de haber importado la fuente en tu proyecto */
  color: white;
  margin-right: 10px; /* Espacio entre el texto e input */
}

input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.spacer {
  height: 50px; /* Ajusta según sea necesario */
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
