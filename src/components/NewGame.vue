<template>
  <div class="newgame">
    <h1>{{ title }}</h1>
    <div class="options">
      <div class="textos">
        <div>Nombre de files i columnes:
        <input type="text" v-model="firstNumber" placeholder="First Number" />
        </div>
        <div>HP del jugador:
        <input type="text" v-model="secondNumber" placeholder="Second Number" />
        </div>
      </div>
    </div>
    <div><button @click="saveNumbers">Save Numbers</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'New Game',
      firstNumber: 0,
      secondNumber: 0,
    };
  },
  methods: {
    saveNumbers() {
      // Implementa la lógica para guardar los números
      console.log('Primer número:', this.firstNumber);
      console.log('Segundo número:', this.secondNumber);
    },
  },
};
</script>

<style>
.newgame {
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url('@/assets/images/fono2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  grid-template-rows: min-content 1fr; /* Cambia 'auto' por 'min-content' para ajustar el tamaño según el contenido */
  justify-items: center; /* Centra el contenido horizontalmente */
}

h1 {
  font-size: 3.5em;
  margin: 40px;
  font-family: 'Press Start 2P', cursive; /* Asegúrate de haber importado la fuente en tu proyecto */
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
}

input {
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


.textos div {
  margin-right: 50px; /* Ajusta el margen entre los elementos según sea necesario */
}







</style>
