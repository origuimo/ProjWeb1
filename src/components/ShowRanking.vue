<template>
    <div class="show">
      <h1>{{ title }}</h1>
    </div>
  </template>


<script>
export default {
  data() {
    return {
      title: 'Show Ranking',
    };
  },
};
</script>

<style>
.show {
  position: relative; 
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/fondomed.jpg');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
</style>