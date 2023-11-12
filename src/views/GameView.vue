<template>
  <div class="game">
    <div class="title-section">
      <h1>{{ title }}</h1>
    </div>
    <div class="grid-container"
      :style="{ gridTemplateColumns: `repeat(${4}, 1fr)`, gridGap: dynamicGridGap, width: gridWidth + 'px' }"
    >
      <div v-for="n in 4 * 4" :key="n" class="grid-square"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Game',
    };
  },
  computed: {
    dynamicGridGap() {
      const baseGap = 5;
      const minColumnsForGap = 5;
      const columns = 4; // Ajustado a 4 columnas como en tu ejemplo
      return columns >= minColumnsForGap ? `${baseGap}px` : '5px';
    },
    gridWidth() {
      const baseSquareSize = 80; // Ajusta el tamaño de los cuadrados aquí
      const gap = parseInt(this.dynamicGridGap);
      const columns = 4; // Ajustado a 4 columnas como en tu ejemplo
      return columns * baseSquareSize + (columns - 1) * gap;
    },
  },
};
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: black;
  height: 100vh;
}

.title-section {
  margin-top: 2%;
}

.grid-container {
  display: grid;
  grid-template-rows: auto; /* Ajusta según sea necesario */
  margin-top: 5%; /* Ajusta el margen superior a tu gusto */
}

.grid-square {
  width: 80px; /* Ajusta el tamaño de los cuadrados aquí */
  height: 80px; /* Ajusta el tamaño de los cuadrados aquí */
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/images/espases.avif');
}
</style>
