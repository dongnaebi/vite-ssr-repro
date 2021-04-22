<template>
  <div>
  <h1>Home</h1>
  <p>
    <img src="../assets/logo.png" alt="logo" />
  </p>
  <button @click="state.count++">count is: {{ state.count }}</button>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup () {
      const state = reactive({ count: 0 })
      return { state }
    }
  }
</script>

<style scoped>
  h1,
  a {
    color: green;
  }
</style>
