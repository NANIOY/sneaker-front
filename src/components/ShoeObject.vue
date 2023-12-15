<template>
  <div class="shoe-object__block">
    <div class="shoe-details">
      <h1 class="header header__small">{{ shoeType }}</h1>
      <div class="shoe-object__user">
        <p class="text text__normal text__color--black">{{ userName }}</p>
        <p class="text text__normal text__color--black">{{ userEmail }}</p>
      </div>
      <p class="text text--userid text__small text__color--black">{{ userId }}</p>
    </div>
    <div class="shoe-status surface__dark">
      <span class="text text__normal text__color--white">{{ status }}</span>
    </div>
  </div>
</template>

<script>
import DetailsButton from '../components/Buttons/DetailsButtons.vue';

export default {
  components: {
    DetailsButton,
  },
  props: ['shoeType', 'userName', 'userEmail', 'userId', 'status'],
};
</script>

<style scoped>
.shoe-object__block {
  width: 384px;
  height: 212px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 12px;
  position: relative;
}

.shoe-details {
  flex-grow: 2;
}

h1 {
  color: var(--black);
  margin-bottom: 8px;
}

.shoe-object__user p {
  margin: 2px 0;
}

.shoe-status {
  width: auto;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px;
  border-radius: 64px;
}

.text--userid {
  margin-bottom: 8px;
}
</style>
