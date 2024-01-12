<template>
  <div class="player" :data-direction="direction">
  </div>
</template>
<script>
export default {
  props: {
    direction: String,
  },
};
</script>
  
<style scoped>
.player {
  width: 60%; /* Ajustar al tamaño completo de la celda */
  height: 60%; /* Ajustar al tamaño completo de la celda */
  border-radius: 50%; /* Forma circular */
  background-image: url('@/assets/images/player.png'); /* Imagen del jugador */
  background-size: cover; /* Asegurar que la imagen cubra todo el círculo */
  background-position: center; /* Centrar la imagen */
  transform: rotate(var(--player-rotation)); /* Rotar según la dirección */
  transition: transform 0.3s; /* Animación suave al girar */
}

.player[data-direction='Norte'] {
  --player-rotation: 0deg;
}
.player[data-direction='Sur'] {
  --player-rotation: 180deg;
}
.player[data-direction='Este'] {
  --player-rotation: 90deg;
}
.player[data-direction='Oeste'] {
  --player-rotation: -90deg;
}
</style>
  