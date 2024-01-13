<template>
   <!-- Componente que representa un jugador para mostrar en la lista de jugadores del ranking -->
  <div class="player-item">
   <!-- <img :src="player.img" alt="Player Image" class="player-image" /> -->
    <div class="player-info">
      <p class="player-name"> Name: {{ player.player_ID }}</p>
      <p class="player-level"> Level: {{ player.level }}</p>
      <p class="player-xp"> XP: {{ player.xp }}</p>
      <p class="player-coins"> Coins: {{ player.coins }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: Object, 
  },
};
</script>

<style scoped>
.player-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: black;
}

.player-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.player-info {
  flex-grow: 1;
}

.player-name {
  font-weight: bold;
}

.player-level,
.player-xp,
.player-coins {
  margin: 5px 0;
}
</style>