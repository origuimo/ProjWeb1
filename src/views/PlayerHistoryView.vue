<template>
    <div class="phistory">
      <h1>{{ title }}</h1>
      <div>
        <h2>NameChar</h2>
        
        <h2>Games Won: x%</h2>

      </div>
      <div class="games-list">
        <div class="game" v-for="game in games" :key="game.id">
          <div class="player-details">

            <div class="game-info">
              <h3>{{ game.name }}</h3>
              <p>Size: {{ game.size }}</p>
              <p>Date: {{ game.creationDate }}</p>
              <p>Player: {{ game.player }}</p>
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
        title: 'Current Games',
        players: [
          {
            id: 1,
            name: 'Game 1',
            size: 10,
            date: '10-2-2022',
            palyer: 'paula'
          },
          {
            id: 2,
            name: 'Game 2',
            size: 16,
            date: '13-6-2022',
            palyer: 'victoria'
          },
          {
            id: 1,
            name: 'Game 3',
            size: 23,
            date: '25-10-2021',
            palyer: 'oriol'
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
  
  
  .game {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #898585;
    width: 100%;

  }  
  
  .game-info {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .game-details {
    display: flex;
    flex-direction: row;
   
  }
  
  </style>