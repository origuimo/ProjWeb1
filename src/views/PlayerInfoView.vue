<template>
    <div class="playerinfo">
      <h1>{{ title }}</h1>
      <div class="content">
        <section id="infochar">
          <div class="info">
          <span>Name: {{ playerInfo.player_ID }}</span>
          <span>Level: {{ playerInfo.level }}</span>
          <span>Experience: {{ playerInfo.xp }}</span>
          <span><img src="@/assets/images/dinero.png" class="charsize" />: {{ playerInfo.coins }}</span>
          
          </div>
          <div class="buttonsline">
            <button class= buttoninfo @click="deleteChar">DELETE</button>
            <button class= buttoninfo @click="stats">STATS</button>
          </div>"
        
        </section>
  
        <section class="charequippedfinal">
          <img :src="playerInfo.img" class="charfinalsize2" />
       
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Player Info',
        playerInfo: {
        player_ID: '',
        img: '',
        xp: 0,
        level: 0,
        coins: 0,
      },
      };
    },
    methods: {
      deleteChar() {
        this.$router.push('/delete');
      },
      
      stats(){
        this.$router.push('/phistory');
      },

      fetchPlayerInfo() {
      
        const playerId = localStorage.getItem('playerId');
        console.log('Player ID:', playerId);
      fetch(`https://balandrau.salle.url.edu/i3//players/${playerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer' : localStorage.getItem('token'), 
        },
      })
        .then(response => response.json())
        .then(data => {
          this.playerInfo = data;
        })
          .catch(error => console.error('Error fetching player info:', error));
      },
    },

    mounted() {
    
      this.fetchPlayerInfo();
    },

  };
  </script>
  
  <style scoped>
  .playerinfo {
    position: relative;
    text-align: center;
    color:white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    background-image: url('@/assets/images/fondomed.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
  }
  
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; 
    max-width: 900px;
    margin: 0 auto;
  }
  
  #infochar {
    text-align: left;
  }
  #infochar span {
  color:black; 
  font-weight: bold;
}
  
  .info span {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .buttoninfo {
  background-image: url('@/assets/images/button.jpg');
  width: 100%; 
  margin: 10px 0;
}

  .charsize {
  width: 10%; 
  max-width: 70px; 
  height: auto;
}

.charfinalsize {
  width: 50%; 
  max-width: 350px; 
  height: auto;
}
.charfinalsize2 {
  width: 40%; 
  max-width: 150px; 
  height: auto;
}

h2 {
  font-size: 1rem;
}

  .charfinal {
    text-align: right;
  }
  </style>
  