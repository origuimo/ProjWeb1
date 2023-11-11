<template>
    <div class="createchar">
      <h1 class="title">{{ title }}</h1>
      <div class="content">
        <section id="infochar">
          <form>
            <label for="NAME">NAME</label>
            <input type="text" id="name" name="name" required>
  
            <label for="PASSWORD">PASSWORD</label>
            <input type="text" id="password" name="password" required>
  
            <label for="PASSWORD2">REPEAT PASSWORD</label>
            <input type="text" id="password2" name="password2" required>
          </form>
  
          <h2>CHARACTER</h2>
  
          <div class="characters">
            <img src="@/assets/images/dracula.png" class="charsize" />
            <img src="@/assets/images/dragon.png" class="charsize" />
            <img src="@/assets/images/fantasma.png" class="charsize" />
            <img src="@/assets/images/hada.png" class="charsize" />
            <img src="@/assets/images/orco.png" class="charsize" />
            <img src="@/assets/images/vikingo.png" class="charsize" />
          </div>
        </section>
  
        <section class="charfinal">
          <img src="@/assets/images/hada.png" class="charfinalsize" />
          <h2>NAMECHAR</h2>
          <button @click="createNewChar">Create</button>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Create Character',
      };
    },
    methods: {
    createNewChar() {
      this.$router.push('/menu');
    },
}
  };
  </script>
  
  <style>
  .createchar {
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
  
  #infochar form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
  
  .charsize {
    width: 70px;
    height: auto;
  }
  .charfinalsize {
    width: 350px;
    height: auto;
  }
  .charfinal {
    text-align: right;
  }
  
  .title {
  margin-right: 20px;
}

  </style>
  
  