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
            <button @click="deleteChar">Delete</button>
          </div>
        
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
    },
  };
  </script>
  
  <style>
  .playerinfo {
    position: relative;
    text-align: center;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('@/assets/images/fono2.jpg');
    background-size: 100%;
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
  
  .info span {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .charsize {
    width: 70px;
    height: auto;
  }
  .charfinalsize2 {
    width: 300px;
    height: auto;
  }
  .charfinal {
    text-align: right;
  }
  </style>
  