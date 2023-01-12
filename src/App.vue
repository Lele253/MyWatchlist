<template>
  <v-app class="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


import axios from "axios";

export default {
  async created() {
    const respons = await axios.get('http://localhost:8080/auth/user');
    await this.$store.dispatch('user', respons.data)
  },
  name: 'App',


  data: () => ({}),
}
</script>
<style scoped>
.app {
  background-color: #eaeaea;
}
</style>
