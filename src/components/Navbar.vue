<template>
  <div class="navbar">
    <NavButton label="Orders" iconSrc="../../assets/icons/orders-active.webp" :active="isOrdersActive" />
    <NavButton label="Profile" iconSrc="../assets/icons/profile.webp" :active="isProfileActive" />
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
};
</script>

<style scoped>
</style>
