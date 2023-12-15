<template>
  <button @click="toggleSortOrder">
    Sort Order: {{ sortOrder }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      sortOrder: 'desc'
    };
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
      this.$emit('sort-changed', this.sortOrder);
    }
  }
};
</script>

<style>
/* Your CSS styles for SortingButton */
</style>