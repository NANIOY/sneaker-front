<template>
  <Navbar />
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="shoe in shoes" :key="shoe._id">
        <ShoeObject
          :shoe-type="shoe.shoeType"
          :user-name="shoe.userName"
          :user-email="shoe.userEmail"
          :user-id="shoe._id"
          :status="shoe.status"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShoeObject from '../components/ShoeObject.vue';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    ShoeObject,
    Navbar,
  },
  data() {
    return {
      loading: true,
      shoes: [],
    };
  },
  created() {
    this.fetchShoes();
  },
  methods: {
    fetchShoes() {
      fetch('https://sneaker-back.onrender.com/api/v1/shoes')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Fetched data:', data);
          this.shoes = data.data.shoeOrders;
          this.loading = false;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          this.loading = false;
        });
    },
  },
};
</script>
