<template>
  <div>
    <v-footer class="footer" app bottom fixed
              padless
    >
      <v-row
          justify="center"
          no-gutters
      >
        <v-btn
            color="white"
            text rounded
            class="my-2 "
            @click="this.$router.push('/')">
          HOME
        </v-btn>
        <v-btn
            color="white"
            text rounded
            class="my-2 mt-2 ma-2"
            @click="this.$router.push('/aboutUs')">
          ABOUT US
        </v-btn>
        <v-btn
            color="white"
            text rounded
            class="my-2 "
            @click="this.$router.push('/impressum')">
          IMPRESSUM
        </v-btn>
        <v-col
            class="primary lighten-2 py-4 text-center white--text"
            cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>MyWatchlist</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>


<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: aqua;
}
</style>