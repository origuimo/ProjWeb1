<template>
      <!-- Componnete que muestra la lista de ataques sin vender del usuario y subraya el apretado -->
    <section  class="element-list">
      <!-- Lista no ordenada que muestra elementos -->
      <ul class="element-list-container">
          <!-- Itera sobre los elementos filtrados y si se apreta alguno lo subraya -->
        <li v-for="(element, index) in filteredElementArray" :key="index" @click="selectElement(element)" :class="{ 'selected': element === selectedElement }">
          {{ element.id }}
        </li>
      </ul>
    </section >
  </template>
  
  <script>
// Exporta el componente
export default {
  // Datos del componente
  data() {
    return {
      elementArray: [], // Lista de ataques
      selectedElement: null,// Elemento seleccionado
    };
  },
  computed: {
    // Filtra los elementos que tienen on_sale en false
    filteredElementArray() {
      return this.elementArray.filter(element => !element.onSale);
    },
  },
  // Métodos del componente
  methods: {
    // Método para seleccionar un elemento
    selectElement(element) {
      console.log('selecionado', element)
      this.selectedElement = element;
      this.$emit('elementSelected', element);
    },
    // Método para obtener datos de la API
    fetchData() {
      fetch(`https://balandrau.salle.url.edu/i3/players/attacks`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': localStorage.getItem('token'),
        },
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Unexpected response status: ${res.status}`);
          }
        })
        .then(data => {
          console.log('Received data from API:', data);
          if (Array.isArray(data) && data.length > 0) {
            const expectedKeys = ["attack_ID", "positions", "power", "equipped", "on_sale"];
            if (Object.keys(data[0]).sort().toString() === expectedKeys.sort().toString()) {
              // Mapea los datos de la API a un formato esperado
              this.elementArray = data.map(item => ({
                id: item.attack_ID,
                positions: item.positions,
                power: item.power,
                equipped: item.equipped, 
                onSale: item.on_sale,
              }));
            } else {
              console.error('Invalid data format received from the API. Keys do not match expected format.');
            }
          } else {
            console.warn('No available attacks.');
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
  // Método que se ejecuta cuando el componente es creado
  created() {
    this.fetchData(); // Obtiene datos cuando se crea el componente
  },
};
</script>

  
  <style scoped>
  .element-list {
    height: 100%;
  }
  
  .element-list-container {
    list-style: none;
    padding: 0;
    max-height: 20vh;
    overflow-y: auto;
  }
  .element-list-container li {
  cursor: pointer;/* Cambia el cursor a una mano al pasar sobre el elemento, indicando que es interactivo */
  padding: 1vw;
}

.element-list-container li.selected {
  text-decoration: underline;/* Subraya el texto del elemento seleccionado */
  text-decoration-color: white; /* Cambia el color del subrayado a blanco */
}
  </style>
  