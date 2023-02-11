<template>
  <div>
    <h1> Please wait. Loading...</h1>
  </div>
</template>

<script>
export default {
  name: "SmartHomeView",
  beforeCreate() {
    window.document.location.href = 'http://www.leandro-graf.de:8581/'
  },
  methods: {},
}
</script>

<style scoped>
</style>