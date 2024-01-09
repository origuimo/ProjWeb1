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
              <input type="text" required v-model="firstNumber" placeholder="First Number" />
            </div>
            <div class="section2">
              <div class="text">HP del jugador:&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input type="text" required v-model="secondNumber" placeholder="Second Number" />
            </div>
            <div class="section3">
              <div class="text">Nom de la partida:&nbsp;</div>
              <input type="text" required v-model="nom" placeholder="Nom" />
            </div>
            <div class="spacer"></div>
            <div class="button-section">
              <button class="buttonjoin1" @click="saveNumbers">Save Numbers</button>
            </div>
          </div>
        </div>
      </div>

      <div class="right-section">
        <div class="cuadricula-container" v-if="this.firstNumber !== null && this.firstNumber !== ''">
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
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: 'New Game',
      firstNumber: '', // Cambiado a cadena vacía en lugar de 0
      secondNumber: '',
      nom: '',
    };
  },
  computed: {
    ...mapGetters(['getToken']),
    dynamicGridGap() {
      if (this.firstNumber !== null && this.firstNumber !== '') {
        const baseGap = 5;
        const minColumnsForGap = 5;
        const columns = parseInt(this.firstNumber);
        return columns >= minColumnsForGap ? `${baseGap}px` : '5px';
      } else {
        return '5px';
      }
    },
    gridWidth() {
      if (this.firstNumber !== null && this.firstNumber !== '') {
        const baseSquareSize = 50;
        const gap = parseInt(this.dynamicGridGap);
        const columns = parseInt(this.firstNumber);
        return columns * baseSquareSize + (columns - 1) * gap;
      } else {
        return 0;
      }
    },
  },
  methods: {
    saveNumbers() {
      const parsedFirstNumber = parseInt(this.firstNumber);
      if (!Number.isNaN(parsedFirstNumber) && parsedFirstNumber >= 2 && parsedFirstNumber <= 10) {
        this.callApi();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El número debe estar entre 2 y 10.',
        });
      }
    },
    callApi() {
      const requestData = {
        game_ID: this.nom,
        size: parseInt(this.firstNumber),
        HP_max: parseInt(this.secondNumber),
      };
      console.log("token: ", localStorage.getItem('token'));

      fetch('https://balandrau.salle.url.edu/i3/arenas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
        body: JSON.stringify(requestData),
      })
        .then(res => {
          if (res.status == 201) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'You have entered the game as Player1. Good luck!',
            });
          } else {
            throw new Error(`Failed with status: ${res.status}`);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error.message);
        });
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

.buttonjoin1 {
  width: 40%; 
    height: 8vh;  
    width: 15vh;
    padding: 10px; 
    font-size: 1.2em; 
    font-size: 1.5em;
    font-weight: bold;
    position: relative;
    background-image: url('@/assets/images/button.jpg');
    background-size: cover;
    background-position: center;
    color: white; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5%;
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
