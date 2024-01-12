<template>
    <div class="createchar">
      <h1 class="Logintitle">{{title }}</h1>
      <div class="content">
        <section id="infochar">
          <form onsubmit="return false;">
            <label for="NAME">NAME</label>
            <input type="text" id="name" name="name" required v-model="name">
            <label for="PASSWORD">PASSWORD</label>
            <input type="password" id="password" name="password" required v-model="password">
            <button class= button3 @click="logIn">LOG IN</button>
          </form>
        </section>

      </div>
    </div>
  </template>
<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      title: 'Log in',
      name: '',
      password: '',
    };
  },
  methods: {
    logIn() {
      this.fetchData();
    },
    fetchData() {
      const requestData = {
        player_ID: this.name,
        password: this.password,
      };

      fetch('https://balandrau.salle.url.edu/i3/players/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then(res => {
          if (res.status === 200) {
            return res.json(); // Parse the response JSON when status is 200
          } else if (res.status === 400) {
            return res.json();
          } else if(res.status == 404){
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Usuario o Contraseña incorrectos',
            });
          }else{
            throw new Error(`Failed with status: ${res.status}`);
          }
        })
        .then(data => {
          //VIC: ESTO LO QUITAS CUANDO ARREGLES LO DEL TOKEN :)
          localStorage.setItem('token', data.token);
          localStorage.setItem('playerId', data.player_ID);
          this.$store.commit('InfoJugador', data);
          this.$router.push('/menu');
     
                
       
        })
        .catch(error => {
          console.error('Error fetching data:', error.message);
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
.button3{
  background-image: url('@/assets/images/button.jpg');
  
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; 
  max-width: 900px; 
  margin: 0 auto; 
}

#infochar {
  text-align: left;
}

#infochar form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;

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
.charfinal {
  text-align: right;
  margin-top: 30px;
}

.loginitle {
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

