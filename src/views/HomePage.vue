<template>
  <div>
    <Navbar />
    <SortingButton :sortOrder="sortOrder" @sort-changed="sortChanged" />
    <div v-if="loading">Loading...</div>
    <div v-else class="shoes-container">
      <div class="shoe-object" v-for="shoe in sortedShoes" :key="shoe._id">
        <ShoeObject :shoe-type="shoe.shoeType" :user-name="shoe.userName" :user-email="shoe.userEmail" :user-id="shoe._id"
          :status="shoe.status" />
      </div>
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
      loading: true,
      shoes: [],
      sortOrder: 'desc'
    };
  },
  computed: {
    sortedShoes() {
      const sorted = [...this.shoes];
      return sorted.sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a._id.localeCompare(b._id);
        } else {
          return b._id.localeCompare(a._id);
        }
      });
    }
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
          this.shoes = data.data.shoeOrders;
          this.loading = false;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          this.loading = false;
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

<style scoped>
.shoes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 76px 156px;
}

.shoe-object {
  margin-bottom: 12px;
}
</style>