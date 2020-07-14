<template>
  <div>
    <login></login>
  </div>
</template>

<script>
  import indexPage from './view/indexPage.vue'
  import Login from './view/login.vue'
  export default {
    name: 'app',
    components: { Login }
  }
</script>

<style lang="stylus" scoped></style>