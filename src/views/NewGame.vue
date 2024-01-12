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
          } else if(res.status == 403) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'This game already exists',
            });
          }
          else {
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

<style scoped>
.newgame {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url('@/assets/images/preparantLluita.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
}

.title-section h1 {
  font-size: 3rem; /* Ajusta para un mejor tamaño en todas las pantallas */
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.main-section {
  display: flex;
  width: 100%; /* Ajusta para que tome todo el ancho */
  justify-content: space-around; /* Espacia las secciones */
}

.left-section, .right-section {
  flex: 1;
  padding: 20px; /* Agrega padding para separar el contenido */
}

.input-container {
  margin-top: 10%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  padding: 20px;
  border-radius: 15px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra para resaltar */
}

.input-section, .button-section {
  margin-top: 10px;
}

input, .buttonjoin1 {
  width: 50%; /* Ajusta para que tomen todo el ancho disponible */
  padding: 10px;
  font-size: 1em;
  margin-top: 10px; /* Espacio entre elementos */
}

.buttonjoin1 {
  background-image: url('@/assets/images/button.jpg');
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buttonjoin1:hover {
  background-color: #0056b3;
}

.grid-square {
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/images/espases.avif');
}
</style>
