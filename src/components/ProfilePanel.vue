<template>
  <div class="profile-container__block gradient-background">
    <h1 class=" header header__large">Profile</h1>
    <form class="text" @submit.prevent="submitProfile">
      <div class="input-group">
        <label class="text__large label" for="username">Username</label>
        <input class="profile-panel__block__input input__text input" id="username" type="text" v-model="user.username" placeholder="Username"/>
        <span><img class="profile-panel__block__input__icon" src="../assets/icons/pencil.webp" alt="icon of a pencil"></span>
      </div>
      <div class="input-group">
        <label class="text__large label" for="email">Email</label>
        <input class="profile-panel__block__input input__text input" id="email" type="email" v-model="user.email" placeholder="Email"/>
        <span><img class="profile-panel__block__input__icon" src="../assets/icons/pencil.webp" alt="icon of a pencil"></span>
      </div>
      <div class="input-group">
        <label class="text__large label" for="new-password">New Password</label>
        <input class="profile-panel__block__input input__text input" id="new-password" type="password" v-model="passwords.newPassword" placeholder="New password"/>
        <span><img class="profile-panel__block__input__icon" src="../assets/icons/pencil.webp" alt="icon of a pencil"></span>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
}

.profile-panel__block__input {
  border-width: 0px 0px 1px 0px !important;
  padding-right: 28px;
  padding-left: 4px;
  border-color: var(--white); 
  outline: none; 
}

.profile-panel__block__input:focus {
  border-color: var(--white); 
}

.profile-panel__block__input__icon {
  width: 16px;
  height: 16px;
  margin-left: -16px;
}
</style>