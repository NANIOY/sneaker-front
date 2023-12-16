<template>
  <div class="shoe-popup gradient-background">
    <div class="popup-content text__color--white">
      <h2 class="header">{{ shoeType }} Details</h2>
      <div class="user">
        <!-- user--contact class -->
        <div class="user--contact text__large">
          <p class="text">{{ userName }}</p>
          <div class="dot text__color--white"></div>
          <p class="text">{{ userEmail }}</p>
        </div>
        <!-- user--extra class -->
        <div class="user--extra text__small">
          <p class="text">{{ userAddress }}</p>
          <div class="dot text__color--white"></div>
          <p class="text">{{ userId }}</p>
        </div>
      </div>
      <!-- Add the new fields -->
      <p class="text">Shoe Size: {{ shoeSize }}</p>
      <p class="text">Sole Color: {{ shoeColorSole }}</p>
      <p class="text">Laces Color: {{ shoeColorLaces }}</p>
      <p class="text">Panel Down Color: {{ shoeColorPanelDown }}</p>
      <p class="text">Panel Up Color: {{ shoeColorPanelUp }}</p>
      <p class="text">Material Panel Down: {{ shoeMaterialPanelDown }}</p>
      <p class="text">Material Panel Up: {{ shoeMaterialPanelUp }}</p>
      <p class="text">Jewel: {{ jewel }}</p>
      <p class="text">Initials: {{ initials }}</p>
      <!-- End of new fields -->
      <button @click="closeDetails" class="close-button">Close</button>
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style scoped>
/* Add your styles here */
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

.header {
  margin-bottom: 12px;
}

.text {
  margin: 5px 0;
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


.close-button {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.close-button:hover {
  background-color: #0056b3;
}
</style>
