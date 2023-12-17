<template>
  <div class="profile-page__block">
    <navbar-component></navbar-component>
    <profile-panel @update-profile="handleUpdateProfile"></profile-panel>
  </div>
</template>

<script>
import NavbarComponent from '../components/Navbar.vue';
import ProfilePanel from '../components/ProfilePanel.vue';
import router from '../router'; // Import router

export default {
  components: {
    NavbarComponent,
    ProfilePanel
  },
  methods: {
    async handleUpdateProfile(updatedData) {
      // Destructure the data for ease of use
      const { username, email, passwords } = updatedData;
      const authToken = localStorage.getItem('authToken');

      console.log('Authentication Token:', authToken);

      try {
        const authToken = localStorage.getItem('authToken'); // Retrieve the authentication token
        console.log('Authentication Token:', authToken); // Log the authentication token

        // Check if the password needs updating
        if (passwords.currentPassword && passwords.newPassword) {
          // Update the password
          const passwordResponse = await fetch('https://sneaker-back.onrender.com/api/v1/users/password', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': ` ${authToken}`, // Include the authentication token
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
        console.log('Updating user details. AuthToken:', authToken);
        const detailsResponse = await fetch('https://sneaker-back.onrender.com/api/v1/users/info', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ` ${authToken}`, // Include the authentication token
          },
          body: JSON.stringify({ username, email })
        });

        // Log details of the PUT request
        console.log('PUT Request Details:', {
          method: 'PUT',
          url: 'https://sneaker-back.onrender.com/api/v1/users/info',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ` ${authToken}`,
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

        // Optionally, redirect the user to the login page if the authentication token is invalid or expired
        if (error.message.includes('401')) {
          localStorage.removeItem('authToken');
          router.push('/login');
        }
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
  background-color: var(--black);
}
</style>
