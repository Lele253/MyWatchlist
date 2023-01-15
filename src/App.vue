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
  methods: {
    async getFilm() {
      const respons = await axios.get('http://localhost:8080/auth/film/sortiert/' + this.user.nutzerId);
      this.$store.state.filme = respons.data
      console.log(this.$store.state.filme)
    }
  },
  mounted() {
    this.getFilm()
  }
}
</script>
<style scoped>
.app {
  background-color: #eaeaea;
}
</style>
