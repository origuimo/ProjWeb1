<template>
  <div class="createchar">
    <h1 class="createchartitle">{{title }}</h1>
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

        <h4>CHARACTER</h4>

        <div class="characters">
          <img src="@/assets/images/dracula.png" class="charsize" />
          <img src="@/assets/images/dragon.png" class="charsize" />
          <img src="@/assets/images/fantasma.png" class="charsize" />
          <img src="@/assets/images/hada.png" class="charsize" />
          <img src="@/assets/images/orco.png" class="charsize" />
          <img src="@/assets/images/vikingo.png" class="charsize" />
        </div>
        
        <button class= button3 @click="createNewChar">CREATE</button>

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
    this.$router.push('/menulogin');
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
  justify-content: top;
  background-image: url('@/assets/images/fondomed.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
.button3{
  background-image: url('@/assets/images/button.jpg');
  
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
  margin-top: 60px;

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
.charfinal {
  text-align: right;
  margin-top: 30px;
}

.createchartitle {
  text-align: center;
  font-size: 4vw; 
  margin: 2vw; 
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 100%;
}
#infochar form label {
  color:black; 
  font-weight: bold;
}

#infochar h4 {
  color: black; 
  font-weight: bold;
}
</style>

