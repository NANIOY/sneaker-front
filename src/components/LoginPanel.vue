<template>
  <div class="login-panel__block gradient-background">
    <h1 class="login-panel__block__title header header__1">Log in</h1>
    <form class="login-panel__block__form" @submit.prevent="login">
      <input class="login-panel__block__input" type="text" v-model="username" placeholder="Username" />
      <input class="login-panel__block__input" type="password" v-model="password" placeholder="Password" />
      <Button class="login-panel__block__button" @click="login">Log in</Button>
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

.login-panel__block {
  width: fit-content;
  height: fit-content;
  padding: 40px 80px;
}

.login-panel__block, .login-panel__block__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-panel__block__button {
  margin-top: 40px;
  
}
</style>
