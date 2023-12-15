<template>
  <div class="login-panel">
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$emit('login', {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style>
/* Your CSS styles for the login panel */
</style>