<template>
  <div class="login-page">
    <logo-component></logo-component>
    <login-panel @login="handleLogin"></login-panel>
  </div>
</template>

<script>
import LoginPanel from '../components/LoginPanel.vue';
import LogoComponent from '../components/LogoComponent.vue';
import Button from '../components/Button.vue';

export default {
  components: {
    LoginPanel,
    LogoComponent
  },
  methods: {
    handleLogin(credentials) {
      fetch('http://example.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Login Successful:', data);
        // Handle login success, e.g., storing the auth token and redirecting
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
/* Your CSS styles */
</style>