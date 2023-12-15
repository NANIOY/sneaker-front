<template>
  <div class="navbar surface__dark">
    <div class="navbar__content">
      <div class="navbar__logo">
        <LogoComponent />
      </div>
      <div class="navbar__buttons">
        <NavButton label="Orders" :active="isOrdersActive" @toggleActive="toggleActive" />
        <NavButton label="Profile" :active="isProfileActive" @toggleActive="toggleActive" />
      </div>
    </div>
  </div>
</template>

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

<style scoped>
.navbar {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 72px;
  padding: 0 1rem;
}

.navbar__content {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100vw;
}

.navbar__logo {
  position: absolute;
  left: 156px;

}

.navbar__buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-grow: 1;
}
</style>
