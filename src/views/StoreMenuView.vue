<template>
  <div class="menuStore">
    <div class="main-container">
      <div class="side-menu">
        <h1 class="store-title">Store</h1>
        <button class="menu-button" @click="navigateToOption1">Create Attack</button>
        <button class="menu-button" @click="navigateToOption2">Sell Attack</button>
        <button class="menu-button" @click="navigateToOption3">Available Attacks</button>
      </div>
      <div class="content">
        <img src="/src/assets/images/shop.jpg" alt="Your Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Store',
    };
  },
  methods: {
    navigateToOption1() {
      this.$router.push('/createattackview');
    },
    navigateToOption2() {
      this.$router.push('/sellattackview');
    },
    navigateToOption3() {
      this.$router.push('/availableattacksview');
    },
  },
};
</script>


<style scoped>
.menuStore {
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-color: #f0f0f0;
  overflow: hidden; 
}

.main-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden; 
}

.store-title {
  font-size: 4vw; 
  margin: 2vw; 
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.side-menu {
  width: 30%; 
  background-color: black;
  padding: 2vw; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.menu-button {
  width: 100%;
  padding: 5vw; 
  margin-bottom: 2vw; 
  font-size: 3vw; 
  cursor: pointer;
  white-space: normal; 
  background-image: url('@/assets/images/button.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column; 
}

.content img {
  width: 100%;
  flex-grow: 1; /* Hacer que la imagen ocupe todo el espacio disponible */
  object-fit: cover;
}
</style>