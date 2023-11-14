<!-- MyComponent.vue -->

<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello from MyComponent!',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles go here */
  </style>
  