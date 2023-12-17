<template>
  <div>
    <Navbar />
    <SortingButton :sortOrder="sortOrder" @sort-changed="sortChanged" />
    <div v-if="loading">Loading...</div>
    <div v-else class="shoes-container">
      <div class="shoe-object" v-for="shoe in sortedShoes" :key="shoe._id">
        <ShoeObject :shoe-type="shoe.shoeType" :isPopupOpen="isPopupOpen"
  @popup-toggled="togglePopup" :user-name="shoe.userName" :user-email="shoe.userEmail" :user-id="shoe._id"
          :status="shoe.status" :shoe-size="shoe.shoeSize" :shoe-color-sole="shoe.shoeColorSole"
          :shoe-color-laces="shoe.shoeColorLaces" :shoe-color-panel-down="shoe.shoeColorPanelDown"
          :shoe-color-panel-up="shoe.shoeColorPanelUp" :shoe-material-panel-down="shoe.shoeMaterialPanelDown"
          :shoe-material-panel-up="shoe.shoeMaterialPanelUp" :jewel="shoe.jewel" :initials="shoe.initials"
          :user-address="shoe.userAddress" />
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
      isPopupOpen: false,
    };
  },
  computed: {
    sortedShoes() {
      const sorted = [...this.shoes];
      return sorted.sort((a, b) => (this.sortOrder === 'asc' ? a._id.localeCompare(b._id) : b._id.localeCompare(a._id)));
    },
  },
  methods: {
    // fetches shoes from the server
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
            // update shoes data and set loading to false
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

    togglePopup(isOpen) {
    this.isPopupOpen = isOpen;
  },

    // handle sort change event from SortingButton
    sortChanged(newSortOrder) {
      this.sortOrder = newSortOrder;
      this.fetchShoes();
    },

    // initialize WebSocket connection
    initializeWebSocket() {
      this.websocket = new WebSocket('wss://sneaker-back.onrender.com/primus');

      // event listeners for WebSocket events
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

    // handle WebSocket message
    handleWebSocketMessage(data) {
      if (data && data.status === 'success' && data.message === 'Shoe order created successfully' && data.data && data.data.shoeOrder) {
        const newShoeOrder = data.data.shoeOrder;

        // log the new shoe order
        console.log('New Shoe Order Created:', newShoeOrder);

        // add the new shoe order to the beginning of the shoes array
        this.shoes.unshift(newShoeOrder);
      } else {
        console.log('Unhandled WebSocket message:', data);
      }
    },
  },

  // fetch shoes and initialize WebSocket connection on component creation
  created() {
    this.initializeWebSocket();
    this.fetchShoes();
  },

  // close WebSocket connection before component is destroyed
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
  justify-content: center;
  margin: 2% 8%;
  gap: 2.2%;
}

.shoe-object {
  margin-bottom: 2%;
}
</style>
