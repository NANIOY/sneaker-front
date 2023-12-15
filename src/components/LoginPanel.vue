<template>
  <div class="login-panel">
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      
      <Button @click="login">Log in</Button>
    </form>
  </div>
</template>

<script>
import Button from '../components/AuthButton.vue';

export default {
  components: {
    Button
  },
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
</style>
