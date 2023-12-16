<template>
  <div class="profile-page__block">
    <navbar-component></navbar-component>
    <logo-component></logo-component>
    <login-panel></login-panel>
    <profile-panel @update-profile="handleUpdateProfile"></profile-panel>
  </div>
</template>

<script>
import NavbarComponent from '../components/Navbar.vue';
import ProfilePanel from '../components/ProfilePanel.vue';

export default {
  components: {
    NavbarComponent,
    ProfilePanel
  },
  methods: {
    async handleUpdateProfile(updatedData) {
    // Destructure the data for ease of use
    const { username, email, passwords } = updatedData;
    
    try {
      // Check if the password needs updating
      if (passwords.currentPassword && passwords.newPassword) {
        // Update the password
        const passwordResponse = await fetch('https://sneaker-back.onrender.com/api/v1/users/password', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // Include your auth headers/credentials if necessary
          },
          body: JSON.stringify({
            currentPassword: passwords.currentPassword,
            newPassword: passwords.newPassword
          })
        });
        
        // Check for successful response
        if (!passwordResponse.ok) {
          throw new Error(`Password update failed: ${passwordResponse.statusText}`);
        }

        // Optionally, handle the response data from password update
        const passwordUpdateResult = await passwordResponse.json();
        console.log('Password update successful', passwordUpdateResult);
      }

      // Update user details
      const detailsResponse = await fetch('https://sneaker-back.onrender.com/api/v1/users/info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include your auth headers/credentials if necessary
        },
        body: JSON.stringify({ username, email })
      });

      // Check for successful response
      if (!detailsResponse.ok) {
        throw new Error(`User details update failed: ${detailsResponse.statusText}`);
      }

      // Optionally, handle the response data from user details update
      const userDetailsUpdateResult = await detailsResponse.json();
      console.log('User details update successful', userDetailsUpdateResult);

      // Inform the user of success
      alert('Profile updated successfully!');

    } catch (error) {
      console.error('There was an error updating the profile:', error);
      alert('Failed to update profile: ' + error.message);
    }
  }
}
};
</script>

<style scoped>
.profile-page__block {
  height: 100vh;
  overflow: hidden;
  background-image: url('../assets/images/bg_profile.webp');

}
</style>