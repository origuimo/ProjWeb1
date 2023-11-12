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
              <h3>{{ player.name }}</h3>
              <p>Level: {{ player.level }}</p>
              <p>Experience: {{ player.experience }}</p>
              <p>Coins: {{ player.coins }}</p>
              <button class="small-button" @click="showmore"> Show more </button>
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
            level: 10,
            experience: 500,
            coins: 100
          },
          {
            id: 2,
            name: 'Player 2',
            level: 3,
            experience: 50,
            coins: 76
          },
          {
            id: 3,
            name: 'Player 3',
            level: 5,
            experience: 230,
            coins: 256
          },
        ],
      };
    }, methods:{
     showmore() {
      this.$router.push('/phistory');
     }
  },
  };
  </script>
    
  <style>
  .ranking {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('@/assets/images/fondomed.jpg');
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
  .small-button {
    width: 100px; 
    height: 35px;
    font-size: 12px; 
    background-image: url('@/assets/images/button.jpg');
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
    padding: 2vw;
    align-items: center;
    background-color: black;
    width: 400px;
  }
  

  
  </style>
  