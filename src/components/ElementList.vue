<template>
    <section  class="element-list">
      <ul class="element-list-container">
        <li v-for="(element, index) in filteredElementArray" :key="index" @click="selectElement(element)" :class="{ 'selected': element === selectedElement }">
          {{ element.id }}
        </li>
      </ul>
    </section >
  </template>
  
  <script>

export default {
  data() {
    return {
      elementArray: [],
      selectedElement: null,
    };
  },
  computed: {
    // Filtra los elementos que tienen on_sale en false
    filteredElementArray() {
      return this.elementArray.filter(element => !element.onSale);
    },
  },
  methods: {
    selectElement(element) {
      console.log('selecionado', element)
      this.selectedElement = element;
      this.$emit('elementSelected', element);
    },
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
              this.elementArray = data.map(item => ({
                id: item.attack_ID,
                positions: item.positions,
                power: item.power,
                equipped: item.equipped, // Corregido el nombre de la propiedad
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
  created() {
    this.fetchData(); // Fetch data when the component is created
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
  cursor: pointer;
  padding: 1vw;
}

.element-list-container li.selected {
  text-decoration: underline;
  text-decoration-color: white; /* Cambia el color del subrayado a blanco */
}
  </style>
  