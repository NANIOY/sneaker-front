<template>
    <button class="details-button">
      <span class="button-text">Details</span>
    </button>
  </template>
  
  <script>
  export default {
    name: 'DetailsButton',
  };
  </script>
  
  <style scoped>
  .details-button {
    width: 100%;
    height: 28px;
    background-color: var(--black);
    color: var(--white);
    border: none;
    cursor: pointer;
  }
  
  .button-text {
    font-size: 14px;
  }
  </style>
  