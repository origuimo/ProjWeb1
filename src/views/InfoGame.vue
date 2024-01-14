<template>
    <div class="show-game">
      <div class="title-section">
        <h1>{{ title }}</h1>
        </div>
      <div class="main-section">
        <div class="left-section">
          <div class="info-container1">
            <div v-if="gameDetails" class="info-container">
              <div class="info-section">
                <div class="info-text">Files i columnes:&nbsp;&nbsp;</div>
                <div class="info-value">{{ gameDetails.size }}</div>
              </div>
              <div class="info-section">
                <div class="info-text">HP del jugador:&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="info-value">{{ gameDetails.HP_max }}</div>
              </div>
              <div class="info-section">
                <div class="info-text">Nom de la partida:&nbsp;</div>
                <div class="info-value">{{ gameDetails.game_ID }}</div>
              </div>
              <button class="buttonjoin" @click="navigateToOption1">Join</button>
            </div>
          </div>
        </div>
        <!--<div class="cuadricula-container">
          <div class="grid-container" :style="{ gridTemplateColumns: `repeat(${parseInt(primerNumero)}, 1fr)`, gridGap: dynamicGridGap, width: gridWidth + 'px' }">
            <div v-for="n in Number(primerNumero) * Number(primerNumero)" :key="n" class="grid-square"></div>

          </div>
        </div>-->
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        title: 'Info Game',
        gameDetails: null,
        id: 0,
      };
    },
    async mounted() {
    const gameID = this.$route.params.gameID;
    this.id = gameID;
    console.log("Game ID:", this.id);
    if (gameID) {
      await this.fetchGameDetails(gameID);
    }
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
      async fetchGameDetails(gameID) {
      try {
        const response = await fetch(`https://balandrau.salle.url.edu/i3/arenas/${gameID}`, {
          method: 'GET',
          headers: {
            "Bearer": localStorage.getItem('token'), 
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          this.gameDetails = await response.json();
          console.log("hola");
        } else {
          console.error(`Failed to fetch game details with status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching game details:', error.message);
      }
    },
    navigateToOption1() {
    if (this.gameDetails && this.gameDetails.size) {
      this.$router.push({
        name: 'gameView',
        params: { files: this.gameDetails.size, source: 'infoGame', id: this.id}
      });
    } else {
      console.error("Game details are not available");
    }
  },
  },
  };
  </script>
  
  <style scoped>
.show-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url('@/assets/images/Lluita.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
}



.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%; /* Reducción del ancho para mejorar la distribución */
  margin-top: 10%;
}

.info-container1 {
  background: rgba(0, 0, 0, 0.8); /* Fondo semi-transparente para mejorar la legibilidad */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Sombra para resaltar el contenedor */
  width: 100%; /* Ajuste para que tome todo el ancho del contenedor principal */
}

.info-section {
  margin: 10px 0;
}

.info-text, .info-value {
  font-family: 'Arial', sans-serif; /* Cambio a una fuente más legible */
  color: white;
  margin-right: 10px;
}

.info-value {
  font-weight: bold;
  color: #FFD700; /* Color dorado para resaltar los valores */
}

.button-section {
  margin-top: 20px;
}

.buttonjoin {
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  width: fit-content;
}

.buttonjoin:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Efecto de crecimiento al pasar el ratón */
}

  </style>
  