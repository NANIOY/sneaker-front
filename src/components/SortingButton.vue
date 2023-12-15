<template>
  <div class="button button__normal text__color--black" @click="toggleSortOrder">
    <span> Sort Order: {{ sortOrder }}</span>
  </div>
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
div {
  cursor: pointer;
  user-select: none;
}
</style>
