<template>
  <!-- Vista para poner ataque a la venta -->
  <section class="sellattackview">
    <h1>{{ title }}</h1>
    <!-- Form que evita que si no se han rellenado todos los campos se pueda poner a la venta el ataque -->
    <form @submit.prevent="sellAttack" class="form-container">
      <!-- Lisat de los ataques del usuario -->
      <label>
        Select attack:
        <ElementList :elements="elementArray" :selectedElement="selectedElement" @elementSelected="onElementSelected" />
      </label>
      <!-- Campo para introducir el precio del ataque -->
      <div class="price-input">
        <label for="price">Price:</label>
        <input type="text" v-model="price" placeholder="Enter price" class="input-field" />
      </div>
    </form>
      <button type="submit" class="sell-button">Mark for sell</button>
  </section>
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
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks/' + this.selectedElement.id + '/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer' : localStorage.getItem('token'), //pillar el token 
        },
        body: JSON.stringify({
          price: numericPrice,
        }),
      }) 
      .then(response => {
      if (response.status === 200) {
        // Todo bien vuelves al menu de la tienda
        this.$router.push('/menuStore');
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

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 2vw;
  width: 70%;
  height: auto; 
  margin: 1vw auto;
  font-size: 2vw;
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
  width: auto; 
  height: auto;  
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
  margin-top: 1vw;
  }
</style>

<style>
body {
  overflow: hidden; 
}
</style>