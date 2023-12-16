<template>
  <div class="profile-container">
    <h1>Profile</h1>
    <form @submit.prevent="submitProfile">
      <div class="input-group">
        <label for="username">Username</label>
        <input id="username" type="text" v-model="user.username" />
        <span class="checkmark"></span>
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="user.email" />
        <span class="checkmark"></span>
      </div>
      <div class="input-group">
        <label for="new-password">New Password</label>
        <input id="new-password" type="password" v-model="passwords.newPassword" />
        <span class="checkmark"></span>
      </div>
      <button type="submit">Update Profile</button>
    </form>
  </div>
</template>

<script>
export default {
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
.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-group .checkmark {
  /* Style for checkmark or any indicator for the input */
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* Add more styles as per your design requirements */
</style>