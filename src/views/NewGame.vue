<template>
  <div class="newgame">
    <div class="title-section">
      <h1>{{ title }}</h1>
    </div>
    <div class="main-section">
      <div class="left-section">
        <div class="input-container">
          <div class="spacers"></div>
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

      <div class="right-section">
        <div class="cuadricula-container">
          <div
            class="grid-container"
            :style="{ gridTemplateColumns: `repeat(${parseInt(firstNumber)}, 1fr)`, gridGap: dynamicGridGap, width: gridWidth + 'px' }"
          >
            <div v-for="n in parseInt(firstNumber) * parseInt(firstNumber)" :key="n" class="grid-square"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swal from 'sweetalert2';
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
      const parsedFirstNumber = parseInt(this.firstNumber);

      if (!Number.isNaN(parsedFirstNumber) && parsedFirstNumber >= 2 && parsedFirstNumber <= 10) {
        const juego = {
          primerNumero: this.firstNumber,
          segundoNumero: this.secondNumber,
          nom: this.nom,
        };

        store.commit('guardarJuego', juego);
        console.log('Números guardados en el store:', store.state);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have enter the game as Player1 Good luck!',
        }).then(() => {
          window.location.href = '/gameview';
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El número debe estar entre 2 y 10.',
        });
      }
    },
  },
};
</script>

<style>
.newgame {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url('@/assets/images/fondoCG.jpg');
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
  flex: 1; /* Toma todo el espacio disponible en el eje vertical */
}

.spacers {
  height: 30px; /* Ajusta según sea necesario */
}

.left-section {
  flex: 1;
}

.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cuadricula-container {
  text-align: center;
}

.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-container {
  min-height: 70%;
  background-color: black;
  position: relative;
  margin-top: 10%;
  overflow: hidden;
}

.input-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%; /* Ajusta según sea necesario */
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
  height: 10px; /* Ajusta según sea necesario */
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
h1 {
  font-size: 3.5vw; /* Utiliza vw para que el tamaño sea relativo al ancho de la ventana */
  margin: 2vw; /* Ajusta según sea necesario */
}

.grid-square {
  width: 5vw;
  height: 5vw;
}

/* Diseño responsivo */
@media screen and (max-width: 768px) {
  .newgame {
    padding: 10px;
  }

  .left-section, .right-section {
    flex: 0;
  }
  .input-section {
    width: 90%; /* Reducir el tamaño para pantallas pequeñas */
  }
}

/* Otros ajustes */
.text {
  font-size: 1em; /* Ajusta según sea necesario */
}

.input-section {
  margin-left: 5%;
}
</style>
