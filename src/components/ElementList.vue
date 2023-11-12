<template>
    <div class="element-list">
      <ul class="element-list-container">
        <li v-for="(element, index) in elements" :key="index" @click="selectElement(element)" :class="{ 'selected': element === selectedElement }">
          {{ element.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      elements: {
        type: Array,
        required: true,
      },
      selectedElement: Object,
    },
    methods: {
      selectElement(element) {
        this.$emit('elementSelected', element);
      },
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
    padding: 10px;
  }
  
  .element-list-container li.selected {
    text-decoration: underline;
  }
  </style>
  