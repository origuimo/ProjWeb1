<template>
  <!-- Vista de creacion del ataque -->
  <section class="createattackview">
    <h1>{{ title }}</h1>
    <label class="options">
      <label class="textos">
        <div>Attack name:
          <input type="text" v-model="name" placeholder="Enter name" required/>
        </div>
        <div>Position:
          <input type="text" v-model="position" placeholder="(numero,numero)" required/>
        </div>
      </label>
    </label>
    <label>
      <button @click="saveAttack" class="save-button">Save Attack</button>
    </label>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      title: 'Create Attack',
      name: '',
      position: '',
      showError: false,
    };
  },
  methods: {
    // Comprobar formato posicion
    validatePosition() {
      const positionRegex = /^\([0-9],[0-9]\)$/;
      return positionRegex.test(this.position);
    },
    // Validar que el nombre no sobrepase los 21 characters 
    validateNameMax() {
      const nameLength = this.name.length;
      return nameLength < 21;
    },
    // Validar que se haya introducido un nombre
    validateNameMin() {
      const nameLength = this.name.length;
      return nameLength > 0;
    },

    saveAttack() {
      let errorMessage = '';

      if (!this.validateNameMin()) {
        errorMessage += 'Attack must have a name!\n';
      }

      if (!this.validatePosition()) {
        errorMessage += 'Incorrect position format!\n';
      }

      if (!this.validateNameMax()) {
        errorMessage += 'Attack name must not surpass 21 characters!\n';
      }

      if (errorMessage !== '') {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorMessage.trim(),
        });
      }
      else {
      this.showError = false;
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Bearer': '0dd3d79c-df5f-4944-b53c-3b3e12afab4d'
          'Bearer': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          attack_ID: this.name,
          positions: this.position,
          img: 'src/assets/images/espada.jpg',
        }),
      })
        .then(response => {
          if (response.status === 201) {
            this.$router.push('/menuStore');
          } else {
            throw new Error(`Unexpected response status: ${response.status}`);
          }
        })
        .catch(error => {
          console.error('Error saving attack:', error);
        });
      }
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

.save-button {
  width: 10vh; 
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
