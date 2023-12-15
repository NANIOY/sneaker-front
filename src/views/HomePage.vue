<template>
  <div>
    <Navbar />
    <SortingButton @sort-changed="sortChanged" />
    <div class="shoes-container">
      <ShoeObject
        v-for="shoe in shoes"
        :key="shoe.userId"
        :shoe-type="shoe.shoeType"
        :user-name="shoe.userName"
        :user-email="shoe.userEmail"
        :user-id="shoe.userId"
        :status="shoe.status"
        :color="shoe.shoeType === 'Type1' ? '#FFEE54' : '#9D70FF'"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import SortingButton from '../components/SortingButton.vue';
import ShoeObject from '../components/ShoeObject.vue';

export default {
  components: {
    Navbar,
    SortingButton,
    ShoeObject
  },
  data() {
    return {
      shoes: [],
      sortOrder: 'desc' // default sort order
    };
  },
  methods: {
    fetchShoes() {
      fetch(`https://sneaker-back.onrender.com/api/v1/shoes?sortorder=${this.sortOrder}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          this.shoes = data;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    },
    sortChanged(newSortOrder) {
      this.sortOrder = newSortOrder;
      this.fetchShoes();
    }
  },
  created() {
    this.fetchShoes();
  }
};
</script>

<style>
/* Your CSS styles */
</style>