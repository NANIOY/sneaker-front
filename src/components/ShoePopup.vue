<template>
  <div class="shoe-popup">
    <div class="popup-content">
      <h2 class="header">{{ shoeType }} Details</h2>
      <p class="text">User: {{ userName }}</p>
      <p class="text">Email: {{ userEmail }}</p>
      <p class="text">User ID: {{ userId }}</p>
      <p class="text">Status: {{ status }}</p>
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
  },
  methods: {
    closeDetails() {
      this.$emit('close-details');
    },
  },
};
</script>

<style scoped>
.shoe-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.popup-content {
  text-align: left;
}

.header {
  color: var(--black);
  margin-bottom: 10px;
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
