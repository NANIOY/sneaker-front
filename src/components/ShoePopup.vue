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

      <StatusButton @status-changed="handleStatusChange" :userId="userId" :initialStatus="status" />
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
    handleStatusChange(selectedOption) {
      console.log('Selected status in ShoePopup:', selectedOption);
    },
  },
};
</script>

<style scoped>
.shoe-popup {
  width: 80%;
  max-width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.popup-content {
  text-align: left;
  padding: 2% 5%;
}

.header__medium {
  margin: 2% 0 2% 0;
  font-size: 36px;
}

.text {
  margin: 1.6% 0;
}

.user {
  display: flex;
  flex-direction: column;
}

.user--contact,
.user--extra {
  display: flex;
  align-items: center;
  margin-top: -0.5%;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: var(--white);
  border-radius: 50%;
  margin: 0 2%;
}

.header__small {
  margin-top: 3.5%;
}

.details-section {
  margin-top: 3%;
}

.line {
  height: 1px;
  background-color: var(--white);
  margin-top: -3%;
}

.close-button {
  position: absolute;
  top: 0.5%;
  right: 0.5%;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 1.6%;
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

@media screen and (max-width: 600px) {
  .header__medium {
    font-size: 28px;
  }
  .header__small {
    font-size: 20px;
  }
  .text__large {
    font-size: 16px;
  }
  .text .text__normal--details {
    font-size: 14px;
  }
  .shoe-popup {
    width: 90%;
  }
  .user--contact,
.user--extra {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.dot {
  display: none;
}
}
</style>
