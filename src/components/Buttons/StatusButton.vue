<template>
  <div class="status-button">
    <button @click="toggleDropdown" :disabled="isRequesting">{{ selectedStatus }}</button>
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
      statusOptions: ['Order Placed', 'In Production', 'Shipped', 'Delivered', 'Cancelled'],
      isRequesting: false, // flag to track ongoing requests
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    async handleStatusChange(event) {
      if (this.isRequesting) {
        return; // do nothing if a request is ongoing
      }

      const selectedOption = event.target.textContent;
      this.selectedStatus = selectedOption;
      this.isDropdownOpen = false;

      // set isRequesting to true to disable the button
      this.isRequesting = true;

      try {
        // make a PATCH request to update the status in the database
        const response = await fetch(`https://sneaker-back.onrender.com/api/v1/shoes/${this.userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: selectedOption }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Server response:', data);
      } catch (error) {
        console.error('Error updating status:', error);
      } finally {
        // reset isRequesting to enable the button
        this.isRequesting = false;
      }
    },
  },
  props: {
    userId: String,
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
