<template>
  <div class="createattackview">
    <h1>{{ title }}</h1>
    <div class="options">
      <div class="textos">
        <div>Attack name:
          <input type="text" v-model="name" placeholder="Enter name" />
        </div>
        <div>Position:
          <input type="text" v-model="position" placeholder="Enter position" />
        </div>
      </div>
      <button v-if="randomButtonVisible" @click="generateRandomValue" class="generate-button">Generate random power</button>
      <div v-if="randomValue !== null">Power: {{ randomValue }}</div>
    </div>
    <div>
      <button @click="saveAttack" class="save-button">Save Attack</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Create Attack',
      name: '',
      position: '',
      randomValue: null,
      randomButtonVisible: true,
    };
  },
  methods: {
    generateRandomValue() {
      this.randomValue = Math.floor(Math.random() * 16) + 2;
      this.randomButtonVisible = false;
    },
    saveAttack() {
      console.log('Nombre ataque:', this.name);
      console.log('Posicion ataque:', this.position);
      console.log('Poder ataque:', this.randomValue);
      this.$router.push('/menuStore');
    },
  },
};
</script>

<style scoped>
.createattackview {
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/images/forja.jfif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  grid-template-rows: min-content 1fr;
  justify-items: center;
}

h1 {
  font-size: 5vw;
  margin: 2vw;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.options {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 5vw;
  width: 70%; 
  height: 40vh; 
  margin: 2vw auto;
  font-size: 2vw; 
}

input {
  margin: 1vw 0;
  padding: 1vw;
  border-radius: 0.5vw;
  font-size: 1.5vw;
}

.generate-button {
  margin-top: 1vw;
  padding: 2vw 4vw;
  font-size: 1.5vw;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  width: 60%; 
  text-align: center; 
  line-height: 1.5;
}
.save-button {
  padding: 2vw 4vw;
  font-size: 1.5vw;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  width: 100%;
  width: auto; 
  margin-top: 1vw;
}
</style>