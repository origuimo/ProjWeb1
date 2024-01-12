<template>
    <!-- vista con todos los ataques que se pueden comprar -->
  <section class="availableattacksview">
    <h1 class="title">{{ title }}</h1>
    <!-- form usado para filtrar los ataques-->
    <form class="filters" @submit.prevent="applyFilters">
      <fieldset class="custom-fieldset">
        <legend>Filter and Sort</legend>

        <label for="filterBy">Filter by:</label>
        <select v-model="filterBy" id="filterBy">
          <option value="id">ID</option>
          <option value="price">Price</option>
          <option value="level">Level</option>
        </select>

        <label for="sortBy">Sort by:</label>
        <select v-model="sortBy" id="sortBy">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </fieldset>
    </form>
    <!-- componente con lista de los ataques filtrados -->
    <article class="element-list-container">
      <AvailableAttacksList :elements="filteredElements" />
    </article>
  </section>
</template>

<script>
import AvailableAttacksList from '@/components/AvailableAttacksList.vue';

export default {
  components: {
    AvailableAttacksList,
  },
  data() {
    return {
      title: 'Available Attacks',
      elementArray: [],
      selectedElement: null,
      filterBy: 'id',
      sortBy: 'asc',
    };
  },
  computed: {
    filteredElements() {
      const elements = [...this.elementArray];
      if (this.filterBy === 'id') {
        // Ordenar alfabéticamente por ID
        elements.sort((a, b) => (this.sortBy === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)));
      } else {
        // Ordenar por precio o nivel
        elements.sort((a, b) => (this.sortBy === 'asc' ? a[this.filterBy] - b[this.filterBy] : b[this.filterBy] - a[this.filterBy]));
      }
      return elements.map(element => ({ ...element }));
    },
  },
  methods: {
    onElementSelected(element) {
      this.selectedElement = element;
    },
    //llamada a la API para cargar los ataques 
    fetchData() {
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer' : localStorage.getItem('token'), //pillar el token 
        },
      })
      .then(res => {
          console.table(res);
          //todo bien
          if (res.status === 200) {
            return res.json();
            //error
          } else if (res.status === 400) {
            return res.json();
          } else {
            throw new Error(`Unexpected response status: ${res.status}`);
          }
        })
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            const expectedKeys = ["attack_ID", "positions", "power", "price", "level_needed", "on_sale"];
            //Guardar los elementos de la array
            if (Object.keys(data[0]).sort().toString() === expectedKeys.sort().toString()) {
              this.elementArray = data.map(item => ({
                id: item.attack_ID,
                positions: item.positions,
                power: item.power,
                price: item.price,
                level: item.level_needed,
                onSale: item.on_sale,
              }));
            } else {
              console.error('Invalid data format received from the API. Keys do not match expected format.');
            }
          } else {
            //No hay ataques disponibles
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
.availableattacksview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  height: 100%;
  background-image: url('@/assets/images/available.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: fixed;
  padding: 0;
  min-height: 100vh;
}

.title {
  font-size: 5vw;
  margin: 2vw;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, orangered, yellow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.filters {
  margin-bottom: 0.5vw;
  font-size: 2vw;
}
.custom-fieldset {
  border: 2px solid black; /* Cambia el color del borde a negro */
  padding: 10px; /* Añade un espacio interno para separar el contenido del borde */
  border-radius: 8px; /* Añade bordes redondeados si es necesario */
}
.element-list-container {
  width: 60%;
  margin: 0.5vw;
  overflow-y: auto;
  scrollbar-width: thin;
}
</style>
