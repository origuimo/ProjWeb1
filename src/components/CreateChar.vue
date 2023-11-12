<template>
    <div class="createchar">
      <h1>{{ title }}</h1>
    </div>
  </template>


<script>
export default {
  data() {
    return {
      title: 'Create Character',
    };
  },
};
</script>

<style>
.createchar {
  position: relative; 
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/fono2.jpg');
  background-size: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
</style>