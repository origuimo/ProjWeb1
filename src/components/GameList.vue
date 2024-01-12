<template>
  <div class="player">
    <div class="player-details">
      <div class="player-info">
        <div class="player-text">
          <h3>{{ player.game_ID }}</h3>
        </div>
        <button @click="navigateToOption1" class="show-more-btn">Show more</button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    player: Object,
  },
  methods: {
    navigateToOption1() {
      this.$emit('show-more', this.player.game_ID);
    },
  },
};
</script>
  
  <style scoped>
  .player {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .player-details {
    display: flex;
    align-items: center;
  }
  
  .player-info {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .player-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .player-text {
    flex-grow: 1;
  }
  
  .show-more-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .show-more-btn:hover {
    background-color: #0056b3;
  }
  </style>
  