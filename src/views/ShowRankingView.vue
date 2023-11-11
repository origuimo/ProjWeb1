<template>
    <div class="ranking">
      <h1>{{ title }}</h1>
      <div class="search-bar">
        <img src="@/assets/images/lupa.png" class="search-icon" alt="Search Icon">
        <input type="text" placeholder="Search player...">
      </div>
      <div class="player-list">
        <div class="player" v-for="player in players" :key="player.id">
          <div class="player-details">

            <div class="player-info">
            <img :src="player.image">
              <h3>{{ player.name }}</h3>
              <p>Level: {{ player.level }}</p>
              <p>Experience: {{ player.experience }}</p>
              <p>Coins: {{ player.coins }}</p>
              <button> Show more </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Show Ranking',
        players: [
          {
            id: 1,
            name: 'Player 1',
            image: '@/assets/images/vikingo.png',
            level: 10,
            experience: 500,
            coins: 100
          },
          {
            id: 2,
            name: 'Player 2',
            image: '@/assets/images/orco.png',
            level: 3,
            experience: 50,
            coins: 76
          },
          {
            id: 3,
            name: 'Player 3',
            image: '@/assets/images/dracula.png',
            level: 5,
            experience: 230,
            coins: 256
          },
        ],
      };
    },
  };
  </script>
    
  <style>
  .ranking {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('@/assets/images/fono2.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .search-icon {
    width: 20px;
    margin-right: 10px;
  }
  
  .player {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;

  }  
  
  .player-info {
    display: flex;
    align-items: center;
    width: 100%;

  }
  
  .player-details {
    display: flex;
    flex-direction: row;
    padding: 10px;
  }

  
  </style>
  