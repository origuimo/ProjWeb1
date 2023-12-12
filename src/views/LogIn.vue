<template>
    <div class="createchar">
      <h1 class="Logintitle">{{title }}</h1>
      <div class="content">
        <section id="infochar">
          <form>
            <label for="NAME">NAME</label>
            <input type="text" id="name" name="name" required>
            <label for="PASSWORD">PASSWORD</label>
            <input type="text" id="password" name="password" required>
            <button class= button3 @click="logIn">LOG IN</button>
          </form>
        </section>

      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      title: 'Log in',
    };
  },
  methods: {
  logIn() {
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

.loginitle {
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

