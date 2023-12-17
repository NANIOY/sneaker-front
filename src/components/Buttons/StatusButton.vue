<template>
  <div class="status-button button button__large">
    <div @click="toggleDropdown" :disabled="isRequesting" :class="{ active: isDropdownOpen }" class="normal-button body">
      {{ selectedStatus }}
    </div>
    <div v-if="isDropdownOpen" @click="handleStatusChange" class="surface__dark">
      <div v-for="status in statusOptions" :key="status" class="dropdown-item button__normal">
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
      selectedStatus: this.initialStatus, // initialize with the current status
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
    initialStatus: String, // pass the current status as a prop
  },
};
</script>

<style scoped>
.status-button {
  position: relative;
  margin-top: 36px;
  user-select: none;
  /* background-color: var(--white); */
}

.normal-button {
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 4px;
}

div {
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 4px;
}

.dropdown-item {
  cursor: pointer;
  margin: 16px;
}
</style>