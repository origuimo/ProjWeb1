<template>
    <div class="delete">
      <h2>Are you sure you want to delete all the information related to this player?</h2>
      <div class="options2">
        <button @click="navigateToOption1">Yes</button>
        <button @click="navigateToOption2">No</button>
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
    background-image: url('@/assets/images/fono2.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .options2 {
    display: flex;
    margin-top: 5%;
    flex-direction: row;
  }
  
  .buttondel {
    width: 150px;  
    height: 80px;
    padding: 20px;
    font-size: 1.5em;
    font-weight: bold;
    position: relative;
    background-image: url('@/assets/images/pacman5.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
  }
  </style>
  