<template>
  <div class="shoe-object__block" :style="{ borderColor: color }">
    <div class="shoe-details">
      <h1 class="header header__small">{{ shoeType }}</h1>
      <p class="text text__normal text__color--black">{{ userEmail }}</p>
      <p class="text text__small text__color--black">{{ userId }}</p>
    </div>
    <div class="shoe-status" :style="{ backgroundColor: color }">
      <span>{{ status }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['shoeType', 'userName', 'userEmail', 'userId', 'status', 'color'],
};
</script>

<style scoped>
.shoe-object__block {
  width: 384px;
  height: 120px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 12px;
}

.shoe-details {
  flex-grow: 2;
}

h1 {
  color: var(--black);
}

.text {
  margin-bottom: 8px;
}

.shoe-status {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
