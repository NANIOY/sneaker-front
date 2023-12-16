<template>
  <div class="login-page__block">
    <logo-component class="login-page__logo"></logo-component>
    <login-panel class="login-page__panel" @login="handleLogin"></login-panel>
  </div>
</template>

<script>
import LoginPanel from '../components/LoginPanel.vue';
import LogoComponent from '../components/LogoComponent.vue';
import router from '../router'; // Import router

export default {
  components: {
    LoginPanel,
    LogoComponent
  },
  methods: {
    handleLogin(credentials) {
      fetch('https://sneaker-back.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json(); 
      })
      .then(data => {
          console.log('Login Successful:', data);
          // Store the authentication state
          localStorage.setItem('isLoggedIn', 'true');
          // Redirect to HomePage
          router.push('/home');
        })
      .catch(error => {
        console.error('Login Error:', error);
        // Handle login error, e.g., displaying a message to the user
      });
    }
  }
};
</script>

<style>
.login-page__block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 0;
  height: 100vh;
  background-image: url('../assets/images/bg_login.webp');

}

.login-page__logo {
 margin-left: 156px;
}

</style>