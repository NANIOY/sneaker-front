<template>
  <div class="shoe-object__block" :style="{ borderColor: color }">
    <div class="shoe-details">
      <h3>{{ shoeType }}</h3>
      <p>{{ userName }}</p>
      <p>{{ userEmail }}</p>
      <p>{{ userId }}</p>
    </div>
    <div class="shoe-status" :style="{ backgroundColor: color }">
      <span>{{ status }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['shoeType', 'userName', 'userEmail', 'userId', 'status', 'color']
};
</script>

<style>
/* Your CSS styles for ShoeObject */
.shoe-object__block {
  width: 384px;
  height: 240px;
  border: 1px solid;
}


</style>