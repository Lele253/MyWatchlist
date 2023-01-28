<template>
  <v-app class="app">
    <v-main class="pb-0" style="background-color: aqua">
      <router-view/>
    </v-main>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>


import axios from "axios";
import FooterComponent from "@/components/FooterComponent";

export default {
  async beforeCreate() {
    const respons = await axios.get('http://leandro-graf.de:8080/auth/user');
    await this.$store.dispatch('user', respons.data)
  },
  components: {
    FooterComponent,
  },
  name: 'App',


  data: () => ({}),
  methods: {
    async getFilm() {
      const respons = await axios.get('http://leandro-graf.de:8080/auth/film/sortiert/' + this.user.nutzerId);
      this.$store.state.filme = respons.data
      console.log(this.$store.state.filme)
    },
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
