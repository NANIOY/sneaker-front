<template>
    <div @click="handleClick" :class="{ active: active }">
      <img :src="iconSrc" alt="Icon" class="icon" />
      <span class="button button__large">{{ label }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      iconSrc: String,
      active: Boolean,
    },
    methods: {
      handleClick() {
        console.log(`${this.label} Button Clicked!`);
      },
    },
  };
  </script>
  
  <style scoped>
  div {
    cursor: pointer;
    max-width: 144px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--green);
  }
  
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  
  /* Media query for responsiveness */
  @media (max-width: 144px) {
    div {
      max-width: 100%;
    }
  }
  </style>
  