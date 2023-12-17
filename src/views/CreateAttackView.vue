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
    </div>
    <div>
      <button @click="saveAttack" class="save-button">Save Attack</button>
      <div v-if="showError" class="error-message">Formato de posición incorrecto</div>
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
      showError: false,
    };
  },
  methods: {
    saveAttack() {
      // Validar el formato de la posición
      if (!this.validatePosition()) {
        // Mostrar mensaje de error y no continuar con la operación
        this.showError = true;
        //alert('Error: Invalid position format. Please enter positions as "(number, number)".');
        return;
      }
      this.showError = false;
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          attack_ID: this.name,
          positions: this.position,
          img: 'src\assets\images\espada.jpg',
        }),
      })
        .then(response => {
          if (response.status === 201) {
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
    },
    validatePosition() {
      // Validar que la posición siga el formato deseado (número, número)
      const positionRegex = /^\(\d+,\d+\)$/;
      return positionRegex.test(this.position);
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
.error-message {
  color: red;
  font-size: 1.5vw;
  margin-top: 1vw;
}
</style>
