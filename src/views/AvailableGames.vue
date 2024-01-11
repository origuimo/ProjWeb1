<template>
  <div class="available">
    <div class="title-section">
      <h1>{{ title }}</h1>
    </div>
    <div class="search-bar">
      <img src="@/assets/images/lupa.png" class="search-icon" alt="Search Icon">
      <input type="text" placeholder="Search game..." v-model="searchQuery">
    </div>
    <div class="player-list">
      <GameList
        v-for="game in filteredGames"
        :key="game.game_ID"
        :player="game"
        @show-more="navigateToOption1"
      />
    </div>
  </div>
</template>

  <script>
  import GameList from '../components/GameList.vue';
  export default {
    components: {
      GameList,
    },
    data() {
      return {
        title: 'Available Games',
        gameDataList: [
        ],
      };
    },
    computed: {
      filteredGames() {
        if (this.searchQuery) {
          return this.gameDataList.filter(game =>
            game.game_ID.includes(this.searchQuery)
          );
        }
        return this.gameDataList;
      },
    },


    mounted(){
      this.callApi();
    },
    methods: {
      navigateToOption1(gameID) {
      this.$router.push({
        name: 'infoGame',
      params: { gameID: gameID },
      });
    },
      async callApi() {
      try {
        const response = await       
        fetch('https://balandrau.salle.url.edu/i3/arenas', {
        method: 'GET',
        headers: {
          "Bearer": localStorage.getItem('token'), 
          'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          this.gameDataList = data; 
        } else {
          throw new Error(`Failed with status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    },
  },
  };
  </script>
    
    <style >
    .available {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url('@/assets/images/postLluita.png');
      background-size: cover;
      background-position: center;
      height: 100vh;
      padding: 20px;
    }
  
    .player-list {
      max-height: 70%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  
    .player-list::-webkit-scrollbar {
      width: 15px;
    }
  
    .player-list::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  
    .player-list::-webkit-scrollbar-thumb {
      background-color: #888;
    }
  
    .player-list::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  
    h1 {
      margin-bottom: 20px;
    }
  
    .player-text {
      display: inline-block;
      background-color: black;
      padding: 10px;
      margin-right: 10px;
      border-radius: 5px;
    }
  
    .title-section {
      margin-top: 2%;
    }
  
    .search-bar {
      display: flex;
      align-items: center;
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
  