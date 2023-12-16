<template>
    <button class="details-button surface__dark" @click="showDetails">
      <span class="button button__small text__color--white">Details</span>
    </button>
  </template>
  
  <script>
  export default {
    name: 'DetailsButton',
    methods: {
      showDetails() {
        this.$emit('show-details');
      },
    },
  };
  </script>
  
  <style scoped>
  .details-button {
    width: 100%;
    height: 28px;
    border: none;
    cursor: pointer;
  }
  </style>
  