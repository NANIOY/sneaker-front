<template>
  <div class="status-button button button__large">
    <div @click="toggleDropdown" :disabled="isRequesting" :class="{ active: isDropdownOpen }" class="normal-button body">
      <img src="../../assets/icons/drop-down.webp" alt="drop down icon">
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
      statusOptions: ['Order Placed', 'In Production', 'Shipped', 'Delivered', 'Cancelled'], // Added 'Cancelled' option
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
      this.isDropdownOpen = false;

      // set isRequesting to true to disable the button
      this.isRequesting = true;

      try {
        const authToken = localStorage.getItem('authToken'); // retrieve the authentication token from localStorage

        if (!authToken) {
          console.error('Authentication token not found.');
          return; // if the token is not found, do not proceed with the request
        }

        console.log('Retrieved Token:', authToken);

        // check if the selected option is 'Cancelled'
        if (selectedOption === 'Cancelled') {
          // Ask for confirmation
          const userConfirmed = confirm('Are you sure you want to cancel this order?');

          // only proceed with the DELETE request if the user confirmed
          if (userConfirmed) {
            const response = await fetch(`https://sneaker-back.onrender.com/api/v1/shoes/${this.userId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `${authToken}`, // include the authentication token in the headers
              },
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Server response:', data);
          }
        } else {
          this.selectedStatus = selectedOption;

          // for other status options, make a PATCH request to update the status in the database
          
          const response = await fetch(`https://sneaker-back.onrender.com/api/v1/shoes/${this.userId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${authToken}`, // include the authentication token in the headers
            },
            body: JSON.stringify({ status: selectedOption }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('Server response:', data);
        }
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
  margin-top: 12px;
  user-select: none;
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


@media screen and (max-width: 600px) {
  .status-button {
    margin-top: 6px;
  }

  .dropdown-item {
    margin: 8px;
  }
}
</style>