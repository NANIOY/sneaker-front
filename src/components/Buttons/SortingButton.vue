<template>
    <button @click="toggleSortOrder">
      Sort Order: {{ sortOrder }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      sortOrder: String
    },
    methods: {
      toggleSortOrder() {
        this.$emit('sort-changed', this.sortOrder === 'asc' ? 'desc' : 'asc');
      }
    }
  };
  </script>
  
  <style scoped>
  /* button {
  } */
  </style>
  