<template>
  <div class="button button__normal text__color--black" @click="toggleSortOrder">
    <img class="icon" src="../../assets/icons/sort.webp" alt="Sort Icon" />
    <span>{{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}</span>
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
  display: flex;
  align-items: center;
}

span {
  width: 88px;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
</style>
