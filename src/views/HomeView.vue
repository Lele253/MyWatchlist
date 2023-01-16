<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
  </div>
  <div>
    <v-row>
      <v-col class="d-flex justify-center mt-16">
        <v-card class="mainKarten">
          <v-card-title class="text-center">
            Vorschlag
          </v-card-title>
          <v-card-text>
            {{ $store.state.filme }}
          </v-card-text>

        </v-card>
      </v-col>
      <v-col class="d-flex justify-center mt-16">
        <v-card class="mainKarten">
          <v-card-title class="text-center">
            test
          </v-card-title>
          <v-card-text>

          </v-card-text>

        </v-card>
      </v-col>
      <v-col class="d-flex justify-center mt-16">
        <v-card class="mainKarten">
          <v-card-title class="text-center">
            test
          </v-card-title>
          <v-card-text>

          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent";
import {mapGetters} from "vuex";
import FooterComponent from "@/components/FooterComponent";

export default defineComponent({
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      test: 'hallo',
      daten: [],
      name: 'Welcome to MyWatchlist',
      nichtGesehen: []
    }
  },
  methods: {
    async getNichtGesehen() {
      await this.getFilm()
      this.nichtGesehen = []
      console.log('i')
      for (const i of this.$store.state.filme) {
        if (!i.watched) {
          this.nichtGesehen.push(i)
        }
      }
      this.$store.state.filme = this.nichtGesehen
    },
    async getFilm() {
      console.log('getFilm')
      const respons = await axios.get('http://localhost:8080/auth/film/sortiert/' + this.user.nutzerId);
      this.$store.state.filme = respons.data
      console.log(this.$store.state.filme)

    },
  },
  beforeUpdate() {
    this.getFilm()
  },
  updated() {
    this.getNichtGesehen()
  },
  created() {
    this.$store.state.routername = this.name
    this.getNichtGesehen()
  },
  components: {
    FooterComponent,
    HeaderComponent
  },
  mounted() {
    this.getNichtGesehen()
    this.getFilm()
  },

});
</script>

<style scoped>
.mainKarten {
  height: 600px;
  width: 400px;
}
</style>
