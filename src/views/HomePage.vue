<script setup>
import Navbar from '../components/Navbar.vue';
import SortingButton from '../components/SortingButton.vue';
import ShoeObject from '../components/ShoeObject.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();

const loading = ref(true);
const shoes = ref([]);
const sortOrder = ref('desc');

const fetchShoes = async () => {
  try {
    const response = await fetch(`https://sneaker-back.onrender.com/api/v1/shoes?sortorder=${sortOrder.value}`);
    const result = await response.json();

    if (response.ok) {
      shoes.value = result.data.shoeOrders;
      loading.value = false;
    } else {
      console.error(result.message);
      route.push('/');
    }
  } catch (error) {
    console.error('Error fetching shoes:', error);
  }
};

const sortChanged = (newSortOrder) => {
  sortOrder.value = newSortOrder;
  fetchShoes();
};

const sortedShoes = computed(() => {
  const sorted = [...shoes.value];
  return sorted.sort((a, b) => {
    if (sortOrder.value === 'asc') {
      return a._id.localeCompare(b._id);
    } else {
      return b._id.localeCompare(a._id);
    }
  });
});

onMounted(() => {
  fetchShoes();

  const socket = new WebSocket('wss://sneaker-back.onrender.com/primus');

  // listen for new data
  socket.onmessage = function (event) {
    const order = JSON.parse(event.data);
    if (order.type === 'new_order') {
      shoes.push(order.data);
    }
  };
});
</script>

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
