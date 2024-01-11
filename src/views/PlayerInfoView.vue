<template>
    <div class="playerinfo">
      <h1>{{ title }}</h1>
      <div class="content">
        <section id="infochar">
          <div class="info">
            <span>Name: TuNombre</span>
            <span>Level: 10</span>
            <span>Experience: 500</span>
            <span>  <img src="@/assets/images/dinero.png" class="charsize" />: 45</span>
          
          </div>
  
          <h2>ATTACKS</h2>
  
          <div class="characters">
            <img src="@/assets/images/viento.png" class="charsize" />
            <img src="@/assets/images/agua.png" class="charsize" />
            <img src="@/assets/images/fuego.png" class="charsize" />
            <img src="@/assets/images/fumar.png" class="charsize" />
            <img src="@/assets/images/productos-quimicos.png" class="charsize" />
          </div>
          <div class="buttonsline">
            <button class= button3 @click="deleteChar">DELETE</button>
            <button class= button3 @click="stats">STATISTICS</button>
          </div>"
        
        </section>
  
        <section class="charequippedfinal">
          <img src="@/assets/images/hada.png" class="charfinalsize2" />
          <h2>NAMECHAR</h2>
          <img src="@/assets/images/viento.png" class="charsize" />
          <img src="@/assets/images/productos-quimicos.png" class="charsize" />
          <img src="@/assets/images/fuego.png" class="charsize" />
       
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Player Info',
      };
    },
    methods: {
      deleteChar() {
        this.$router.push('/delete');
      },
      stats(){
        this.$router.push('/phistory');
      }
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
  