<template>
  <div class="shoe-object">
    <div class="shoe-object__block">
      <div class="shoe-object__details">
        <h1 class="header header__small">{{ shoeType }}</h1>
        <div class="shoe-object__user">
          <p class="text text__normal text__color--black">{{ userName }}</p>
          <p class="text text__normal text__color--black">{{ userEmail }}</p>
        </div>
        <p class="text text--userid text__small text__color--black">{{ userId }}</p>
      </div>
      <div class="shoe-status surface__dark">
        <span class="text text__small text__color--white">{{ status }}</span>
      </div>
    </div>
    <DetailsButton @show-details="showDetails" />
    <shoe-popup v-if="isDetailsVisible" @close-details="hideDetails" />
  </div>
</template>

<script>
import DetailsButton from '../components/Buttons/DetailsButtons.vue';
import ShoePopup from '../components/ShoePopup.vue';

export default {
  components: {
    DetailsButton,
    ShoePopup,
  },
  props: ['shoeType', 'userName', 'userEmail', 'userId', 'status'],
  data() {
    return {
      isDetailsVisible: false,
    };
  },
  methods: {
    showDetails() {
      this.isDetailsVisible = true;
    },
    hideDetails() {
      this.isDetailsVisible = false;
    },
  },
};
</script>

<style scoped>
.shoe-object {
  width: 376px;
  height: 240px;
}

.shoe-object__block {
  width: 100%;
  height: 212px;
  box-shadow: 0 0 0 1px inset;
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: relative;
}

.shoe-object__details {
  padding: 0 0 12px 12px;
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