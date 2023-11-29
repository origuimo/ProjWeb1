<template>
  <div class="element-grid">
    <div v-for="element in elements" :key="element.id" @click="redirectToAttackDetail(element.id)">
      <div class="element-item">
        {{ element.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elements: Array,
  },
  methods: {
    redirectToAttackDetail(id) {
      this.$router.push(`/attacks/${id}`);
    },
  },
};
</script>

<style scoped>
.element-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 5vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  max-height: 70vh;
  overflow-y: auto;
  margin-bottom: 1vw;
}
 
.element-item {
  background-color: black;
  color: white;
  padding: 1vw;
  text-align: center;
  cursor: pointer;
  font-size: 1.5vw;
  overflow: hidden;
}

.element-item:hover {
  background-color: black;
}
</style>
