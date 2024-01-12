<template>
  <!--Componente que muestra la lista filtrada de available attacks-->
  <section class="element-grid">
    <!-- Itera sobre la lista de elementos -->
    <article v-for="element in elements" :key="element.id" @click="redirectToAttackDetail(element)">
      <!-- Contenedor de cada elemento -->
      <div class="element-item">
        {{ element.id }}
      </div>
    </article>
  </section>
</template>

<script>

// Importa el componente y define las propiedades y métodos
export default {
  props: {
    // Propiedad que recibe la matriz de elementos
    elements: Array,
  },
  methods: {
    // Método que se llama al hacer clic en un elemento
    redirectToAttackDetail(element) {
      // Guarda el elemento en el almacenamiento local
      localStorage.setItem('attackItem', JSON.stringify(element));
      // Redirige a la página de detalles del ataque utilizando Vue Router
      this.$router.push(`/attacks/${element.id}`);
    },
  },
};
</script>

<style scoped>
/*Clase que define toda la pantalla*/
.element-grid {
  display: grid; /* Utiliza un diseño de cuadrícula */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Columnas con ancho variable entre 150px y 1fr */
  gap: 5vw; /* Espacio entre las celdas de la cuadrícula del 5% del ancho de la ventana */
  background-size: cover; /* Hace que la imagen de fondo cubra completamente el contenedor */
  background-position: center; /* Centra la imagen de fondo */
  background-repeat: no-repeat; /* Evita la repetición de la imagen de fondo */
  background-attachment: fixed; /* Hace que la imagen de fondo permanezca fija mientras se desplaza el contenido */
  max-height: 70vh; /* Altura máxima del contenedor al 70% del alto de la ventana */
  overflow-y: auto; /* Agrega una barra de desplazamiento vertical si el contenido excede la altura máxima */
  margin-bottom: 1vw; /* Margen en la parte inferior del contenedor */
}
 
.element-item {
  background-color: black;
  color: white;
  padding: 1vw;
  text-align: center;
  cursor: pointer;/* Cambia el cursor a una mano al pasar sobre el elemento, indicando que es interactivo */
  font-size: 1.5vw;
  overflow: hidden;
}

.element-item:hover {
  background-color: rgb(218, 127, 16);/* Cambia el color de fondo al pasar el ratón por encima */
}
</style>
