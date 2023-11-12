<template>
  <div class="attackdetailview">
    <h1 class="attack-title">{{ attack.name }} Details</h1>
    <div class="main-container">
      <div class="info-container">
        <div class="info">
          <p>Attack ID: {{ attack.id }}</p>
          <p>Positions: {{ attack.positions }}</p>
          <p>Power: {{ attack.power }}</p>
          <p>Price: {{ attack.price }}</p>
          <p>Level: {{ attack.level }}</p>
        </div>
      </div>
      <div class="image-container">
        <img src="/src/assets/images/spell.jpg" alt="Imagen del ataque" />
      </div>
    </div>
    <button @click="buyAttack" class="buy-button">Buy Attack</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attack: null
    };
  },
  created() {
    // Obtén el ID del ataque desde la ruta
    const attackId = this.$route.params.id;
    this.attack = this.getElementDetailsById(attackId);
  },
  methods: {
    getElementDetailsById(id) {
      //llamamos a la API para que nos devuelva la info de este ataque y manejamos la array para quedarnos solo con el que nos interesa
      return {
        id: id,
        name: 'Demon incantation',
        positions: `1,3`,
        power: 4,
        price: 20,
        level: 6,
      };
    },
    buyAttack() {
      this.$router.push('/menuStore');
    },
  },
};
</script>

<style scoped>
.attackdetailview {
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/images/escritorio.jfif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  grid-template-rows: min-content 1fr;
  justify-items: center;
}

.attack-title {
  font-size: 5vw;
  margin: 2vw;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.main-container {
  display: flex;
  width: 70%;
  height: 40vh;
  margin: 2vw auto;
  font-size: 2vw;
}

.info-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: black;
  padding: 2vw;
  box-sizing: border-box;
}

.info {
  text-align: left;
  margin: 1vw 0;
  padding: 1vw;
  border-radius: 0.5vw;
  font-size: 1.5vw;
}

.buy-button {
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

.image-container {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
