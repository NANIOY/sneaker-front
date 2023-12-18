<template>
  <div class="login-panel__block gradient-background">

    <h1 class="login-panel__block__title header header__large">Log in</h1>

    <form class="login-panel__block__form text" @submit.prevent="login">

      <label class="login-panel__block__label text__large label" for="username">Username</label>
      <input class="login-panel__block__input input__text input" id="username" type="text" v-model="username" placeholder="Username" />

      <label class="login-panel__block__label text__large label" for="username">Password</label>
      <input class="login-panel__block__input input__text input" id="password" type="password" v-model="password" placeholder="Password" />

      <p class="login-panel__error" v-if="displayError">Invalid username or password.</p>

      <Button class="login-panel__block__button" @click="login">Log in</Button>

    </form>

  </div>
</template>

<script>
import Button from '../components/Buttons/AuthButton.vue';

export default {
  components: {
    Button
  },
  props: {
    displayError: Boolean
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
    },
    showError(message) {
      this.errorMessage = message; // Method to set the error message
    }
  }
};
</script>

<style>

.header {
  margin-top: 0;
  margin-bottom: 20px;
}

.login-panel__block {
  width: fit-content;
  height: fit-content;
  padding: 40px 80px;
  margin-left: auto;
  margin-right: 0;
}

.login-panel__error {
  color: red;
  margin-bottom: -20px;
}

.login-panel__block, .login-panel__block__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-panel__block__button {
  margin-top: 40px; 
}

.login-panel__block__label {
  margin-top: 20px;
  margin-bottom: 8px;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .header {
    font-size: 52px;
  }
  
}

</style>
