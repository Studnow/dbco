<template>
  <div class="container">
    <p>Aside component <em>{{p}}</em></p>
    <img src="./iamp-logo.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      p: null
    }
  },
  created () {
      this.p = 'hello'
  }
};
</script>

<style>
</style>