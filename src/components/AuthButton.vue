<template>
    <div class="button__active button button__normal" @click="handleClick">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        console.log('Button Clicked!');
      },
    },
  };
  </script>
  
  <style scoped>
  div {
    cursor: pointer;
    max-width: 400px;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 400px) {
    .custom-button {
      max-width: 100%;
    }
  }
  </style>
  