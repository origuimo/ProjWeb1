<template>
  <div class="game">
    <div class="attack-panel">
      <h3>Attacks</h3>
      <ul class="attack-list">
        <li v-for="(attack, index) in attacks" :key="index" @click="selectAttack(attack)">
          {{ attack.attack_ID }} - {{ attack.positions }} - Power: {{ attack.power }}
        </li>
      </ul>
    </div>
    <div class="grid-container"
        :style="{ 
          '--files': files, 
          '--gap': dynamicGridGap + 'px', 
          gridTemplateColumns: `repeat(${files}, 1fr)` 
        }">
      <div v-for="n in files * files" :key="n" :class="['grid-square', { 'attack-cell': n === attackPosition }]">
        <Player v-if="n === playerPosition" :direction="playerDirection" />
      </div>
    </div>
  </div>
</template>
<script>
import Player from '../components/PlayerView.vue';
export default {

  components: {
    Player,
  },
  data() {
    return {
      title: 'Games',
      files: 0,
      playerPosition: null,
      attackPosition: null,
      playerDirection: 'Norte',
      attacks: [ ],
      selectedAttack: null,
    };
  },

  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.files = parseInt(this.$route.params.files);
    this.placePlayerRandomly();
    window.addEventListener('keydown', this.handleKeyPress);
    this.callApi();
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    selectAttack(attack) {
      this.selectedAttack = attack;
      this.launchAttack(attack.positions); 
    },
    handleResize() {
      this.gridWidth = this.calculateGridWidth();
    },
    placePlayerRandomly() {
      const totalSquares = this.files * this.files;
      this.playerPosition = Math.floor(Math.random() * totalSquares);
    },
    handleKeyPress(event) {
      const size = this.files;
      let row = Math.floor(this.playerPosition / size);
      let col = this.playerPosition % size;

      switch(event.keyCode) {
        case 37: // Flecha izquierda
          if (col > 1 || col == 0) {
              col--;
            this.playerDirection = 'Oeste';
          }
          break;
        case 38: // Flecha arriba
          if (row > 0) {
            row--;
            this.playerDirection = 'Norte';
          }
          break;
        case 39: // Flecha derecha
          if (col < size && col != 0) {
            col++;
            this.playerDirection = 'Este';
          }
          break;
        case 40: // Flecha abajo
          if (row < size - 1) {
            row++;
            this.playerDirection = 'Sur';
          }
          break;
      }
      console.log("ei", this.atack)
      this.playerPosition = row * size + col;
    },
    launchAttack(positions) {
      const cleanedPositions = positions.replace(/[()]/g, ''); // Elimina los paréntesis
      const [x, y] = cleanedPositions.split(',').map(Number);

      // Obtener la fila y columna actual del jugador
      const size = this.files;
      let row = Math.floor(this.playerPosition / size);
      let col = this.playerPosition % size;

      // Calcular la nueva posición basada en la dirección del jugador y el ataque
      let newRow, newCol;
      switch (this.playerDirection) {
        case 'Norte':
          newRow = row - y;
          newCol = col + x;
          break;
        case 'Sur':
          newRow = row + y;
          newCol = col - x;
          break;
        case 'Este':
          newRow = row + x;
          newCol = col + y;
          break;
        case 'Oeste':
          newRow = row - x;
          newCol = col - y;
          break;
      }
      
      // Verificar que la nueva posición esté dentro de los límites del tablero
      if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
        this.attackPosition = newRow * size + newCol;
      } else {
        console.error("Attack out of bounds");
        this.attackPosition = null; // o manejarlo de otra manera
      }
      console.log("ei", newCol, newRow, [x, y], this.attackPosition);
    },
    calculateGridWidth() {
      const availableWidth = window.innerWidth - 40; // Ajusta según tus márgenes
      const baseSquareSize = availableWidth / this.files - (this.dynamicGridGap * (this.files - 1));
      return this.files * baseSquareSize + (this.files - 1) * this.dynamicGridGap;
    },

    async callApi() {
      try {
        const response = await       
        fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
        method: 'GET',
        headers: {
          "Bearer": localStorage.getItem('token'), 
          'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          this.attacks = data; 
        } else {
          throw new Error(`Failed with status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    },
  },
  computed: {
    dynamicGridGap() {
      const baseGap = 5;
      const minColumnsForGap = 5;
      const columns = this.files;
      return columns >= minColumnsForGap ? `${baseGap}px` : '5px';
    },
    gridWidth() {
      return this.gridWidth;
    },

  },
};

</script>

<style scoped>
.game {
  display: flex;
  height: 100vh;
  align-items: c;
  background-color: black;
  background-image: url('@/assets/images/battleArena.png');
}

.attack-panel {
  width: 280px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  overflow-y: auto;
}

.attack-list {
  list-style-type: none;
  padding: 0;
}

.attack-list li {
  cursor: pointer;
  padding: 5px;
  margin: 5px 0;
  border: 1px solid white;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.attack-list li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.game-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  background-image: url('@/assets/images/battleArena.png');
}

.grid-container {
  display: grid;
  grid-template-rows: auto; /* Ajusta según sea necesario */
  margin-top: 5%; /* Ajusta el margen superior a tu gusto */
  gap: 10px; /* Espacio entre cuadrados */
  background-color: black;
  padding: 20px;
  align-self: center;
  margin-left: 25%;
  background: rgba(0, 0, 0, 0.8);
}
.grid-square {
  width: 60px;
  height: 60px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/images/icono.png');
  transition: background-color 0.3s, opacity 0.3s; /* Añade transición para suavizar el cambio */
}

.attack-cell {
  background-color: red; /* Cambia el color de fondo para las celdas de ataque */
  opacity: 0.5; /* Ajusta la opacidad para que el rojo sea visible */
}

.select-attack {
  margin-bottom: 20px;
}
</style>
