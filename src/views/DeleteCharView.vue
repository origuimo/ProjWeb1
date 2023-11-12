<template>
    <div class="delete">
      <h2>Are you sure you want to delete all the information related to this player?</h2>
      <div class="options2">
        <button class=" button3" @click="navigateToOption1">Yes</button>
        <button   class=" button3" @click="navigateToOption2">No</button>
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
      navigateToOption1() {
        this.$router.push('/menu');
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
  
 

  </style>
  