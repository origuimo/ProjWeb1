<template>
  <div class="ranking">
    <div class="title-section">
      <h1>{{ title }}</h1>
    </div>
    <div class="search-bar">
      <img src="@/assets/images/lupa.png" class="search-icon" alt="Search Icon">
      <input type="text" placeholder="Search game...">
    </div>
    <div class="player-list">
      <GameList
        v-for="player in gameDataList"
        :key="player.id"
        :player="player"
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
        nom: 'Partida 1',
      };
    },

    mounted(){
      this.callApi();
    },
    methods: {
  navigateToOption1(player) {
    this.$router.push({
      name: 'infoGame',
      props: {
        playerData: player,
      },
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
          console.log("ei", data);
          this.$store.commit('setGameDataList', data);
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
  
    .player-list {
      max-height: 75vh;
      overflow-y: auto;
      overflow-x: hidden;
    }
  
    .player-list::-webkit-scrollbar {
      width: 12px;
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
  