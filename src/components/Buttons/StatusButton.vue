<template>
  <div class="status-button">
    <button @click="toggleDropdown">{{ selectedStatus }}</button>
    <div v-if="isDropdownOpen" @click="handleStatusChange">
      <div v-for="status in statusOptions" :key="status" class="dropdown-item">
        {{ status }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedStatus: 'Select Status',
      statusOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleStatusChange(event) {
      const selectedOption = event.target.textContent;
      this.selectedStatus = selectedOption;
      this.isDropdownOpen = false;

      // Emit an event to notify the parent component about the status change
      this.$emit('status-changed', selectedOption);
    },
  },
};
</script>

<style scoped>
.status-button {
  position: relative;
  display: inline-block;
}

button {
  cursor: pointer;
}

.dropdown-item {
  cursor: pointer;
}
</style>