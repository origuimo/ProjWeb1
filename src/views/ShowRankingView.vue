<template>
  <!-- Ranking de jugadores  -->
  <div class="ranking">
    <h1 class="ranking-title">{{ title }}</h1>
    <div class="player-list">
      <player-item v-for="player in players" :key="player.player_ID" :player="player" />
    </div>
  </div>
</template>
  
  <script>
import PlayerItem from '@/components/PlayerItem.vue';

export default {
  components: {
    PlayerItem, 
  },
  data() {
    return {
      title: 'Player Ranking',
      players: [],
    };
  },
  methods: {
    showRanking() {
      fetch('https://balandrau.salle.url.edu/i3/players', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Error fetching player data. Status: ${response.status}`);
          }
        })
        .then(players => {
          //Ordenamos los jugadores segun su nivel para hacer el ranking
          this.players = players.sort((a, b) => b.level - a.level);
        })
        .catch(error => {
          console.error('Error fetching player data:', error);
        });
    },
    showmore() {
      this.$router.push('/phistory');
    },
  },
  mounted() {
    this.showRanking();
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
  .player-list {
    max-height: 700px;
    max-width: 600px;
    margin: 0 auto;
    overflow-y: auto;
  }
  
  </style>
  