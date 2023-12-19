<template>
  <div class="ranking">
    <div class="title-section">
      <h1>{{ title }}</h1>
    </div>
    <div class="search-bar">
      <img src="@/assets/images/lupa.png" class="search-icon" alt="Search Icon">
      <input type="text" placeholder="Search game...">
    </div>
  </div>
    <div class="player-list">
      <div class="player-container">
        <div class="player" v-for="player in gameDataList" :key="player.id">
          <div class="player-details">
            <div class="player-info">
              <img :src="player.image" alt="Player Image">
              <div class="player-text">
                <h3>{{ player.nom }}</h3>
                <h3>{{ nom }}</h3>
              </div>
              <button @click="navigateToOption1(player)">Show more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

  <script>
  import { mapState } from 'vuex';
  import { mapGetters } from 'vuex';
  export default {
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
        console.log('Datos del jugador:', typeof player.primerNumero);
        console.log('Datos del jugador:', typeof player);
        console.log('Datos del jugador:', player.primerNumero);
        this.$router.push({ 
          name: 'infoGame',
          props: { 
            playerData: player 
          }
        });
      },
      callApi() {
      const token = this.getToken;
      console.log("wi  ", token);
      fetch('https://balandrau.salle.url.edu/i3/arenas', {
        method: 'GET',
        headers: {
          "Bearer": token, 
          'Content-Type': 'application/json',
        },

      })
        .then(res => {
          if (res.status == 200) {
            const data = res.json();
            this.$store.commit('setGameDataList', data);
          }else{
            throw new Error(`Failed with status: ${res.status}`);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error.message);
        });
    }
    },


    computed: {
      ...mapState(['gameDataList']),
      ...mapGetters(['getToken']),
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
  
    .player-container {
        max-height: 75vh; /* Ocupa el 100% de la altura de la ventana */
        overflow-y: auto; /* Agrega scroll vertical si hay más elementos */
        overflow-x: hidden; /* Oculta el scroll horizontal */   
    }
        .player-container::-webkit-scrollbar {
    width: 12px; /* Puedes ajustar el ancho según tus preferencias */
    }

    .player-container::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Puedes ajustar el color según tus preferencias */
    }
    .player-container::-webkit-scrollbar-thumb {
    background-color: #888; /* Puedes ajustar el color según tus preferencias */
    }
    .player-container::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Puedes ajustar el color según tus preferencias */
    }
  h1 {
    margin-bottom: 20px;
  }
  
  .player-text {
  display: inline-block;
  background-color: black; 
  padding: 10px; /* Espaciado interno del rectángulo */
  margin-right: 10px; /* Margen derecho para separar del botón */
  border-radius: 5px; /* Bordes redondeados para el rectángulo */
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