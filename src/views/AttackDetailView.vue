<template>
  <div class="attackdetailview">
    <h1 class="attack-title">{{ attack.id }} Details</h1>
    <div class="info">
        <p class="info-text">Attack ID: {{ attack.id }}</p>
        <p class="info-text">Positions: {{ attack.positions }}</p>
        <p class="info-text">Power: {{ attack.power }}</p>
        <p class="info-text">Price: {{ attack.price }}</p>
        <p class="info-text">Level: {{ attack.level }}</p>
    </div>
    <button @click="buyAttack" class="buy-button">Buy Attack</button>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import Swal from 'sweetalert2';

export default {
  computed: {
    ...mapState(['attackInfo']),
    userCoins() {
      return this.$store.getters.getCoins; // Accede al getter para obtener el valor de coins
    },
    userLevel() {
      return this.$store.getters.getLevel; // Accede al getter para obtener el valor de level
    },
    getUserID() {
      return this.$store.getters.getID; // Accede al getter para obtener el valor de id
    },
  },
  data() {
    return {
      attack: null
    };
  },
  created() {
    // Obtén el ataque almacenado en localStorage
    const storedAttack = localStorage.getItem('attackItem');
    // Parsea la cadena JSON y asigna el ataque a la propiedad local
    this.attack = storedAttack ? JSON.parse(storedAttack) : null;
  },
  methods: {
    buyAttack() {
      //no tienes el dinero para comprarlo o el nivel
      if(this.attack.price > this.userCoins() && this.attack.level > this.userLevel()) {
          //mostar mensaje de error al comprar 
          Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'You are weak and poor :(',
        });
      }
      else if(this.attack.price > this.userCoins() ) {
          //mostar mensaje de error al comprar 
          Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'You are too poor!',
        });
      }
      else if( this.attack.level > this.userLevel()) {
          //mostar mensaje de error al comprar 
          Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'You are too weak!',
        });
      }
      else {
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks/' + this.getUserID()+ '/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          attack_ID: this.name,
          positions: this.position,
          img: '   ',
        }),
      })
        .then(response => {
          if (response.status === 201) {
            //tienes que guardarlo en tu lista de ataques
            this.$router.push('/menuStore');
          } else if (response.status === 400) {
            return response.json();
          } else {
            throw new Error(`Unexpected response status: ${response.status}`);
          }
        })
        .catch(error => {
          console.error('Error saving attack:', error);
        });
      this.$router.push('/menuStore');
      }
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
  text-align: center;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 1vw;
  width: 60vw;
  height: 40vh;
  margin: 2vw auto;
  box-sizing: border-box;
  font-size: 1vw;
  overflow: auto;
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
</style>
