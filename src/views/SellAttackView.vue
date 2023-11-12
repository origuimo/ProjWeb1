<template>
  <div class="sellattackview">
    <h1>{{ title }}</h1>
    <div class="options">
      <div class="element-list-container">Select attack:
        <ElementList :elements="elementArray" :selectedElement="selectedElement" @elementSelected="onElementSelected" />
      </div>
      <div class="textos">
        <div class="price-input">
          <label for="price">Price:</label>
          <input type="text" v-model="price" placeholder="Enter price" class="input-field" />
        </div>
      </div>
    </div>
    <div>
      <button @click="sellAttack" class="sell-button">Mark for sell</button>
    </div>
  </div>
</template>

<script>
import ElementList from '@/components/ElementList.vue';

export default {
  components: {
    ElementList,
  },
  data() {
    return {
      title: 'Sell Attack',
      elementArray: [
        { id: 1, name: 'Attack 1' },
        { id: 2, name: 'Attack 2' },
        { id: 3, name: 'Attack 3' },
        { id: 4, name: 'Attack 4' },
        { id: 5, name: 'Attack 5' },
        { id: 6, name: 'Attack 6' },
        { id: 7, name: 'Attack 7' },
        { id: 8, name: 'Attack 8' },
        { id: 9, name: 'Attack 9' },
        { id: 10, name: 'Attack 10' },
        { id: 11, name: 'Attack 11' },
        { id: 12, name: 'Attack 12' },
        { id: 13, name: 'Attack 13' },
        { id: 14, name: 'Attack 14' },
        { id: 15, name: 'Attack 15' },
        
      ],
      selectedElement: null,
      price: 0,
    };
  },
  methods: {
    onElementSelected(element) {
      this.selectedElement = element;
    },
    sellAttack() {
      // Implementa la lógica para guardar los datos
      console.log('Nombre ataque:', this.selectedElement);
      console.log('Precio ataque:', this.price);
      this.$router.push('/menuStore');
    },
  },
};
</script>

<style scoped>
.sellattackview {
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url('@/assets/images/descarga.jfif');
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
  position: relative; 
}

.element-list-container {
  height: 100%; /* Ocupa la mitad superior del recuadro negro */
}
.price-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw 0;
}
.input-field {
  margin: 1vw 0;
  padding: 1vw;
  border-radius: 0.5vw;
  font-size: 1.5vw;
}


.sell-button {
  width: 40%; 
    height: 8vh;  
    padding: 1vw; 
    font-size: 1em; 
    font-weight: bold;
    position: relative;
    background-image: url('@/assets/images/button.jpg');
    background-size: cover;
    background-position: center;
    color: white; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5%;
}
</style>
<style>
body {
  overflow: hidden; 
}
</style>