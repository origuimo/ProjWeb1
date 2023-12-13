<template>
  <div class="availableattacksview">
    <h1 class="title">{{ title }}</h1>
    <div class="filters">
      <label>Filter by:</label>
      <select v-model="filterBy" @change="applyFilters" class="filters-value">
        <option value="id">ID</option>
        <option value="power">Power</option>
        <option value="price">Price</option>
        <option value="level">Level</option>
      </select>

      <label>Sort by:</label>
      <select v-model="sortBy" @change="applyFilters" class="filters-order">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
    <div class="element-list-container">
      <AvailableAttacksList :elements="filteredElements" />
    </div>
  </div>
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
      return elements
        .sort((a, b) => (this.sortBy === 'asc' ? a[this.filterBy] - b[this.filterBy] : b[this.filterBy] - a[this.filterBy]))
        .map(element => ({ ...element }));
    },
  },
  methods: {
    onElementSelected(element) {
      this.selectedElement = element;
    },
    fetchData() {
      fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer' : this.bearer, //pillar el token 
        },
      })
        .then(res => {console.table(res); return res.json()})
        .then(data => {

          if (Array.isArray(data) && data.length > 0 && Object.keys(data[0]).sort().toString() === ["attack_ID", "positions", "power", "price", "level_needed", "on_sale"].sort().toString()) {
            
            this.elementArray = data.map(item => ({
            id: item.attack_ID,
            name: item.positions,
            power: item.power,
            price: item.price,
            level: item.level_needed,
            onSale: item.on_sale,
            }));
          } else {
            console.error('Invalid data format received from the API');
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

.filters-value,
.filters-order {
  font-size: 1vw;
}

.element-list-container {
  width: 60%;
  margin: 0.5vw;
  overflow-y: auto;
  scrollbar-width: thin;
}
</style>
