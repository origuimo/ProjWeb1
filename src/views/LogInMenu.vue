<template>
    <div class="menu-container">
      <div class="titol">
      <h1>{{ title }}</h1>
    </div>
      <div class="options">
        <button @click="navigateToOption1">Create Character</button>
        <button @click="navigateToOption2">Log In</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Menu Log in ',
      };
    },
    methods: {
      navigateToOption1() {
        this.$router.push('/createchar');
      },
      navigateToOption2() {
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style>
  .menu-container {
    flex-direction: column;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background-image: url('@/assets/images/portada2.jpg'); 
    background-size: cover;
    background-position: center;
  }
  .titol{
    align-items: center;
  }
  
  h1 {
    font-size: 2.5em;
    margin-left: 30%;
    align-self: flex-start;
  }
  
  .options {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5%; 
  }
  
  .options1{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5%; 
  }
  
  button {
    width: 40%; 
    height: 8vh;  
    padding: 10px; 
    font-size: 1.2em; 
    font-size: 1.5em;
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