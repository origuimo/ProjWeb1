<template>
  <!-- Vista pantalla que da la opcion de eliminar al jugador  -->
    <div class="delete">
      <h2>Are you sure you want to delete all the information related to this player?</h2>
      <div class="options2">
        <button class=" buttondel" @click="deletePlayer">Yes</button>
        <div style="margin-left: 10px;"></div> 
        <button   class=" buttondel" @click="navigateToOption2">No</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Delete',
      };
    },
    methods: {
      deletePlayer() {
      //Llamada DELETE a la API
      fetch(`https://balandrau.salle.url.edu/i3/players`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
      })
        .then(response => {
          if (response.ok) {
            this.$router.push('/menulogin');
          } else {
            console.error('Error deleting player:', response.status);
          }
        })
        .catch(error => {
          console.error('Error deleting player:', error);
        });

      },
      navigateToOption2() {
        this.$router.push('/infochar');
      },
    },
  };
  </script>
  
  <style>
  .delete {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background-image: url('@/assets/images/forest.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .options2 {
    display: flex;
    margin-top: 5%;
    flex-direction: row;
  }

  .buttondel {
  background-image: url('@/assets/images/button.jpg');
  flex: 1; 
  margin: 10px; 
  }
  
 

  </style>
  