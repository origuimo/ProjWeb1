<template>
  <!-- Log del juego -->
    <div class="Log">
      <h1 class="logTitle">Log</h1>
      <div class="logContainer">
        <!-- Estructura entrada log -->
        <div v-for="(entry, index) in logEntries" :key="index" class="logText">
        <p>Date/Time: {{ entry.date_time }}</p>
        <p>Player ID: {{ entry.playerID }}</p>
        <p>Description: {{ entry.description }}</p>
        <hr />
      </div>
    </div>
      <button @click="goBack" class="backButton">Back</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logEntries: [],
      };
    },
    methods: {
      fetchDataLogs(){
        //Obtenim id del joc
        const gameId = this.$route.params.gameID;
        fetch(`https://balandrau.salle.url.edu/i3/${gameId}/logs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
      })
      .then(response => {
        //Control errors
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.logEntries = data;
        })
        .catch(error => {
          console.error('Error fetching logs:', error);
        });
      },
    goBack() {
      this.$router.push('/phistory');
    },
    }
  };
  </script>
  
  <style scoped>
  .Log {
    display: grid;
    place-items: center;
    color: white;
    height: 100vh;
    background-image: url('@/assets/images/blood.jfif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    grid-template-rows: min-content 1fr;
    justify-items: center;
  }
  
  .logTitle {
    font-size: 5vw;
    margin: 2vw;
    font-family: 'Press Start 2P', cursive;
    background: linear-gradient(180deg, orangered, yellow);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .logContainer {
    width: 80vw;
    max-width: 600px;
    height: 40vh;
    overflow-y: scroll;
    border: 2px solid black;
    padding: 10px;
    box-sizing: border-box;
    background-color: black;
  }
  
  .logText {
    margin-bottom: 10px;
    margin-left: 0;
    color:white;
  }
  

  .backButton {
    padding: 2vw 4vw;
    font-size: 1.5vw;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 0.5vw;
    cursor: pointer;
    background-image: url('@/assets/images/button.jpg');
    width: 100%;
    width: auto; 
    margin-top: 1vw;
  }

  </style>
  