<template>
  <div class="navbar surface__dark">
    <div class="navbar__content">
      <div class="navbar__logo">
        <LogoComponent />
      </div>
      <div class="navbar__buttons">
        <NavButton label="Orders" :active="isOrdersActive" @toggleActive="toggleActive('Orders')"/>
        <NavButton label="Profile" :active="isProfileActive" @toggleActive="toggleActive('Profile')"  />
      </div>
      <button class="navbar__buttons__logout button text__color--white" @click="logout">
          <span><img class="navbar__buttons__logout-icon" src="../assets/icons/logout.webp" alt=""></span>
          Log Out
        </button>
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
       // Initial states will be set based on the current route
      isOrdersActive: this.$route.path === '/home',
      isProfileActive: this.$route.path === '/profile',
    };
  },
  watch: {
    // Watch for changes in the route
    '$route' (to) {
      this.isOrdersActive = to.path === '/home';
      this.isProfileActive = to.path === '/profile';
    }
  },
  methods: {
    logout() {
    localStorage.removeItem('isLoggedIn'); // Clear the login status
    this.$router.push('/'); // Navigate to the login page
    },
    toggleActive(clickedLabel) {
      if (clickedLabel === 'Orders') {
        this.isOrdersActive = true;
        this.isProfileActive = false;
        this.$router.push('/home'); // Navigate to HomePage
      } else if (clickedLabel === 'Profile') {
        this.isOrdersActive = false;
        this.isProfileActive = true;
        this.$router.push('/profile'); // Navigate to ProfilePage
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
  user-select: none;
}

.navbar__buttons__logout {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 2.5%;
  right: 3%;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar__buttons__logout-icon {
  width: 20px;
  height: 20px;
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

@media screen and (max-width: 1000px) {
  .navbar__logo {
    left: 40px;
  }
}

@media screen and (max-width: 770px) {
  .navbar__logo {
    display: none;
  }
}
</style>
