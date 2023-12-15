<template>
  <div class="navbar">
    <NavButton label="Orders" :active="isOrdersActive" @toggleActive="toggleActive" />
    <NavButton label="Profile" :active="isProfileActive" @toggleActive="toggleActive" />
  </div>
</template>

<script>
import NavButton from '../components/Buttons/NavButton.vue';

export default {
  components: {
    NavButton,
  },
  data() {
    return {
      isOrdersActive: true,
      isProfileActive: false,
    };
  },
  methods: {
    toggleActive(clickedLabel) {
      if (clickedLabel === 'Orders') {
        this.isOrdersActive = true;
        this.isProfileActive = false;
      } else if (clickedLabel === 'Profile') {
        this.isOrdersActive = false;
        this.isProfileActive = true;
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles for the navbar */
</style>
