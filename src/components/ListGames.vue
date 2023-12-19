<!-- PlayerDetails.vue -->
<template>
    <div class="player">
      <div class="player-details">
        <div class="player-info">
          <img :src="player.image" alt="Player Image">
          <div class="player-text">
            <h3>{{ player.nom }}</h3>
            <h3>{{ nom }}</h3>
          </div>
          <button @click="navigateToOption1">Show more</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      player: Object,
      nom: String,
    },
    methods: {
      navigateToOption1() {
        this.$emit('showMore', this.player);
      },
    },
  };
  </script>
  
  <style>
  /* Estilos específicos del componente PlayerDetails */
  </style>
  