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
    ShoeObject,
  },
  data() {
    return {
      loading: true,
      shoes: [],
      sortOrder: 'desc',
      websocket: null,
    };
  },
  computed: {
    sortedShoes() {
      const sorted = [...this.shoes];
      return sorted.sort((a, b) => (this.sortOrder === 'asc' ? a._id.localeCompare(b._id) : b._id.localeCompare(a._id)));
    },
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
          if (data && data.data && data.data.shoeOrders) {
            this.shoes = data.data.shoeOrders;
            this.loading = false;
          } else {
            console.error('Invalid data structure received from server:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching shoes:', error);
          this.loading = false;
        });
    },
    sortChanged(newSortOrder) {
      this.sortOrder = newSortOrder;
      this.fetchShoes();
    },
    initializeWebSocket() {
      this.websocket = new WebSocket('wss://sneaker-back.onrender.com/primus');

      this.websocket.addEventListener('open', () => {
        console.log('Connected to WebSocket');
      });

      this.websocket.addEventListener('message', (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleWebSocketMessage(data);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      });

      this.websocket.addEventListener('close', (event) => {
        console.log('WebSocket closed:', event);
      });

      this.websocket.addEventListener('error', (event) => {
        console.error('WebSocket error:', event);
      });
    },

    handleWebSocketMessage(data) {
      if (data && data.status === 'success' && data.message === 'Shoe order created successfully' && data.data && data.data.shoeOrder) {
        const newShoeOrder = data.data.shoeOrder;

        // Log the new shoe order details
        console.log('New Shoe Order Created:', newShoeOrder);

        // Add the new shoe order to the component's data
        this.shoes.unshift(newShoeOrder);
      } else {
        console.log('Unhandled WebSocket message:', data);
      }
    },
  },
  created() {
    this.initializeWebSocket();
    this.fetchShoes();
  },
  beforeDestroy() {
    if (this.websocket) {
      this.websocket.close();
    }
  },
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
