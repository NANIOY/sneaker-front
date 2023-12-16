<template>
  <div class="shoe-popup gradient-background">
    <div class="popup-content text__color--white">
      <button @click="closeDetails" class="close-button"></button>

      <h1 class="header header__medium">{{ shoeType }}</h1>
      <div class="user">
        <div class="user--contact text__large">
          <p class="text">{{ userName }}</p>
          <div class="dot text__color--white"></div>
          <p class="text">{{ userEmail }}</p>
        </div>
        <div class="user--extra text__small">
          <p class="text">{{ userAddress }}</p>
          <div class="dot text__color--white"></div>
          <p class="text">{{ userId }}</p>
        </div>
      </div>

      <h2 class="header header__small">Details</h2>
      <div class="line"></div>

      <div class="details-section text__normal">
        <p class="text"><span class="text__normal--details">Shoe Size:</span> {{ shoeSize }}</p>
        <p class="text"><span class="text__normal--details">Sole Color:</span> {{ shoeColorSole }}</p>
        <p class="text"><span class="text__normal--details">Laces Color:</span> {{ shoeColorLaces }}</p>
        <p class="text"><span class="text__normal--details">Panel Down Color:</span> {{ shoeColorPanelDown }}</p>
        <p class="text"><span class="text__normal--details">Panel Up Color:</span> {{ shoeColorPanelUp }}</p>
        <p class="text"><span class="text__normal--details">Material Panel Down:</span> {{ shoeMaterialPanelDown }}</p>
        <p class="text"><span class="text__normal--details">Material Panel Up:</span> {{ shoeMaterialPanelUp }}</p>
        <p class="text"><span class="text__normal--details">Jewel:</span> {{ jewel }}</p>
        <p class="text"><span class="text__normal--details">Initials:</span> {{ initials }}</p>
      </div>

      <StatusButton @status-changed="handleStatusChange" :userId="userId" />
    </div>
  </div>
</template>

<script>
import StatusButton from '../components/Buttons/StatusButton.vue';
export default {
  components: {
    StatusButton,
  },
  props: {
    shoeType: String,
    userName: String,
    userEmail: String,
    userId: String,
    status: String,
    shoeSize: String,
    shoeColorSole: String,
    shoeColorLaces: String,
    shoeColorPanelDown: String,
    shoeColorPanelUp: String,
    shoeMaterialPanelDown: String,
    shoeMaterialPanelUp: String,
    jewel: String,
    initials: String,
    userAddress: String,
  },
  methods: {
    closeDetails() {
      this.$emit('close-details');
    },
    async handleStatusChange(event) {
      // Ensure event.target is defined
      if (event && event.target) {
        const selectedOption = event.target.textContent;
        this.selectedStatus = selectedOption;
        this.isDropdownOpen = false;

        // Emit an event to notify the parent component about the status change
        this.$emit('status-changed', selectedOption);

        // Make a PATCH request to update the status in the database
        try {
          const BASE_URL = 'https://sneaker-back.onrender.com/api/v1';

          const response = await fetch(`${BASE_URL}/shoes/${this.userId}`, {
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
          // Handle error as needed
        }
      } else {
        console.error('Event or event.target is undefined');
        // Handle the case where event or event.target is undefined
      }
    },
  },
};
</script>

<style scoped>
.shoe-popup {
  width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.popup-content {
  text-align: left;
  padding: 36px 48px;
}

.header__medium {
  margin-bottom: 12px;
  font-size: 36px;
}

.text {
  margin: 8px 0;
}

.user {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.user--contact,
.user--extra {
  display: flex;
  align-items: center;
}

.dot {
  width: 4px;
  height: 4px;
  background-color: var(--white);
  border-radius: 50%;
  margin: 0 8px;
}

.header__small {
  margin-top: 24px;
}

.line {
  height: 1px;
  background-color: var(--white);
  margin-top: -16px;
}

.details-section {
  margin-top: 12px;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 16px;
}

.close-button::before,
.close-button::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 24px;
  background-color: var(--white);
}

.close-button::before {
  transform: rotate(45deg);
}

.close-button::after {
  transform: rotate(-45deg);
}

.close-button:hover::before,
.close-button:hover::after {
  background-color: #ccc;
}
</style>
