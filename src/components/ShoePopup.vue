<template>
  <div class="shoe-popup gradient-background">
    <div class="popup-content text__color--white">
      <h2 class="header">{{ shoeType }} Details</h2>
      <p class="text">User: {{ userName }}</p>
      <p class="text">Email: {{ userEmail }}</p>
      <p class="text">User ID: {{ userId }}</p>
      <p class="text">Status: {{ status }}</p>
      <p class="text">Shoe Size: {{ shoeSize }}</p>
      <p class="text">Shoe Color (Sole): {{ shoeColorSole }}</p>
      <p class="text">Shoe Color (Laces): {{ shoeColorLaces }}</p>
      <p class="text">Shoe Color (Panel Down): {{ shoeColorPanelDown }}</p>
      <p class="text">Shoe Color (Panel Up): {{ shoeColorPanelUp }}</p>
      <p class="text">Shoe Material (Panel Down): {{ shoeMaterialPanelDown }}</p>
      <p class="text">Shoe Material (Panel Up): {{ shoeMaterialPanelUp }}</p>
      <p class="text">Jewel: {{ jewel }}</p>
      <p class="text">Initials: {{ initials }}</p>
      <p class="text">User Address: {{ userAddress }}</p>
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.popup-content {
  text-align: left;
}

.header {
  margin-bottom: 12px;
}

.text {
  margin: 5px 0;
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
