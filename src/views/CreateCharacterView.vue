<template>
  <div class="createchar">
    <h1 class="createchartitle">{{ title }}</h1>
    <div class="content">
      <section id="infochar">
        <form>
          <label for="NAME">NAME</label>
          <input type="text" id="name" name="name" required v-model="name">

          <label for="PASSWORD">PASSWORD</label>
          <input type="password" id="password" name="password" required v-model="password">

          <label for="PASSWORD2">REPEAT PASSWORD</label>
          <input type="password" id="password2" name="password2" required v-model="passwordRepeat">
        </form>

        <h4>CHARACTER</h4>

        <div class="characters">
          <img src="src/assets/images/dracula.png" class="charsize"  @click="selectImage('src/assets/images/dracula.png')" :class="{ selected: selectedImage === 'src/assets/images/dracula.png' }" />
          <img src="@/assets/images/dragon.png" class="charsize"   @click="selectImage('src/assets/images/dragon.png')" :class="{ selected: selectedImage === 'src/assets/images/dragon.png' }" />
          <img src="@/assets/images/fantasma.png" class="charsize"  @click="selectImage('src/assets/images/fantasma.png')" :class="{ selected: selectedImage === 'src/assets/images/fantasma.png' }" />
          <img src="@/assets/images/hada.png" class="charsize"  @click="selectImage('src/assets/images/hada.png')" :class="{ selected: selectedImage === 'src/assets/images/hada.png' }" />
          <img src="@/assets/images/orco.png" class="charsize"  @click="selectImage('src/assets/images/orco.png')" :class="{ selected: selectedImage === 'src/assets/images/orco.png' }" />
          <img src="@/assets/images/vikingo.png" class="charsize"   @click="selectImage('src/assets/images/vikingo.png')" :class="{ selected: selectedImage === 'src/assets/images/vikingo.png' }" />
        </div>
      </section>

      <section id="preview">
        <img :src="selectedImage" v-if="selectedImage" class="charfinalsize" />
        <p v-if="name">Name: {{ name }}</p>
        <button class="button3" @click="createNewChar">CREATE</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Create Character',
      name: '',
      password: '',
      passwordRepeat:'',
      selectedImage: '',
    };
  },
  methods: {
    selectImage(imagePath) {
      this.selectedImage = imagePath;
    },
    createNewChar() {
      if (!this.selectedImage) {
        console.error('No has seleccionat cap imatge!');
        return;
      }
      if (this.password.length > 21) {
        console.error('La contrasenya no es valida');
        return;
      }
      if (this.name.length > 21) {
        console.error('El nom no es valid');
        return;
      }

      if (this.password !== this.passwordRepeat) {
        console.error('Les contrasenyes no coincideixen');
        return;
      }
      
      const imagePath = this.selectedImage.replace(/^@\/assets\//, '/');

    

      fetch('https://balandrau.salle.url.edu/i3/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player_ID: this.name,
          password: this.password,
          img: imagePath,
        }),
      })
      .then(response => {
        if (response.status === 201) {
          this.$router.push('/menulogin');
        } else if (response.status === 400) {
          return response.json();
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('Error creant el personatge:', error);

        if (error.response) {
          console.log('Response status:', error.response.status);
          console.log('Response data:', error.response.data);
        } else {
          console.log('No hay información de respuesta disponible');
  }
});
    },
  },
};
</script>

<style scoped>
.createchar {
  position: relative;
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-image: url('@/assets/images/fondomed.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

.button3 {
  background-image: url('@/assets/images/button.jpg');
  width: 100%; 
  margin: 10px 0;
}



.charsize.selected {
  border: 2px solid orange; 
}

.content {
  display: flex;
  gap: 20px; 
  max-width: 900px; 
  margin: 0 auto; 
}

#infochar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

#infochar form {
  margin-top: 20px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
}

#preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.charsize {
  width: 10%; 
  max-width: 70px; 
  height: auto;
}

.charfinalsize {
  width: 50%; 
  max-width: 350px; 
  height: auto;
}

.createchartitle {
  text-align: center;
  font-size: 4vw; 
  margin: 2vw; 
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 100%;
}

#infochar form label {
  color:black; 
  font-weight: bold;
}

#infochar h4 {
  color: black; 
  font-weight: bold;
}
</style>

