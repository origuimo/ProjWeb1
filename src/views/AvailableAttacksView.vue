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
import '@/API/StoreAPI.js';

export default {
  components: {
    AvailableAttacksList,
  },
  data() {
    return {
      title: 'Available Attacks',
      
      /*elementArray: [
      { id: 1, name: 'Attack 1', power: 1, price: 10, level: 1 },
        { id: 2, name: 'Atack 2', power: 2, price: 20, level: 2 },
        { id: 3, name: 'Atack 3', power: 3, price: 30, level: 3 },
        { id: 4, name: 'Atack 4', power: 4, price: 40, level: 4 },
        { id: 5, name: 'Atack 5', power: 5, price: 50, level: 5 },
        { id: 6, name: 'Atack 6', power: 6, price: 60, level: 6 },
        { id: 7, name: 'Atack 7', power: 7, price: 70, level: 7 },
        { id: 8, name: 'Atack 8', power: 8, price: 80, level: 8 },
        { id: 9, name: 'Atack 9', power: 9, price: 90, level: 9 },
        { id: 10, name: 'Atack 10', power: 10, price: 100, level: 10 },
        { id: 11, name: 'Atack 11', power: 11, price: 110, level: 11 },
        { id: 12, name: 'Atack 12', power: 12, price: 120, level: 12 },
      ],*/
      

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
