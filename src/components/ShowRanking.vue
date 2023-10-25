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
  position: relative; /* Añade la posición relativa para ajustar el texto en la parte inferior */
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/fono2.jpg');
  background-size: 100%; /* Ajusta este valor según tus necesidades */
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
</style>