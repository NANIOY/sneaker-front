<script>
import LogoComponent from '../components/LogoComponent.vue';
import NavButton from '../components/Buttons/NavButton.vue';

export default {
  components: {
    LogoComponent,
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

<template>
  <div class="navbar surface__dark">
    <LogoComponent />
    <div class="nav-buttons">
      <NavButton label="Orders" :active="isOrdersActive" @toggleActive="toggleActive" />
      <NavButton label="Profile" :active="isProfileActive" @toggleActive="toggleActive" />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 72px;
}

.nav-buttons {
  display: flex;
  gap: 16px;
}
</style>
