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
      elementArray: [],
      selectedElement: null,
      price: 0,
    };
  },
  methods: {
    onElementSelected(element) {
      this.selectedElement = element;
    },
    sellAttack() {
      
      // Convert price to a number
      const numericPrice = Number(this.price);

      console.log('price', localStorage.getItem('token') );

      fetch('https://balandrau.salle.url.edu/i3/shop/attacks/' + this.selectedElement.id + '/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer' : localStorage.getItem('token'), //pillar el token 
          //'Bearer' : '0dd3d79c-df5f-4944-b53c-3b3e12afab4d'
        },
        body: JSON.stringify({
          price: numericPrice,
        }),
      }) 
      .then(response => {
      if (response.status === 200) {
        console.log('Precio', this.price);
        this.$router.push('/menuStore');
      } else if (response.status === 400) {
        //tendras que desjonsar el json para que con los campos q te dan entindas mas el error  
        return response.json();
      } else if (response.status === 422) {
        return response.json();
      }else if (response.status === 403) {
        //this atatck is already on sale
        return response.json();
      }else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    })
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
  width: 20vh; 
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