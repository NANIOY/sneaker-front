<template>
  <div class="profile-container__block gradient-background">
    <h1 class="login-panel__block__title header header__large">Profile</h1>
    <form class="text" @submit.prevent="submitProfile">
      <div class="input-group">
        <label class="login-panel__block__label text__large label" for="username">Username</label>
        <input class="login-panel__block__input input__text input" id="username" type="text" v-model="user.username" placeholder="Username"/>
      </div>
      <div class="input-group">
        <label class="login-panel__block__label text__large label" for="email">Email</label>
        <input class="login-panel__block__input input__text input" id="email" type="email" v-model="user.email" placeholder="Email"/>
      </div>
      <div class="input-group">
        <label class="login-panel__block__label text__large label" for="new-password">New Password</label>
        <input class="login-panel__block__input input__text input" id="new-password" type="password" v-model="passwords.newPassword" placeholder="New password"/>
      </div>
      <Button class="login-panel__block__button" @click="submitProfile">Update Profile</Button>
    </form>
  </div>
</template>

<script>
import Button from '../components/Buttons/AuthButton.vue';

export default {
  components: {
    Button
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
      },
      passwords: {
        currentPassword: '',
        newPassword: ''
      }
    };
  },
  methods: {
    submitProfile() {
      // Construct the profile update payload
      const profileUpdatePayload = {
        username: this.user.username,
        email: this.user.email,
        passwords: this.passwords
      };
      
      // Emit an event with the profile update payload
      this.$emit('update-profile', profileUpdatePayload);
    }
  }
};
</script>

<style scoped>
.profile-container__block {
  width: fit-content;
  height: fit-content;
  padding: 40px 80px;
  margin: auto;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}


/* Add more styles as per your design requirements */
</style>