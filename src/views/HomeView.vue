<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent";
import {mapGetters} from "vuex";
import FooterComponent from "@/components/FooterComponent";

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      test: 'hallo',
      daten: []
    }
  },
  methods: {
    async test1() {
      const response = await axios.get('http://ratetherank.com:8080/auth/clip')
      this.daten = response.data
      console.log(this.daten)

    }
  },
  components: {
    FooterComponent,
    HeaderComponent
  },

  computed: {
    ...mapGetters(['user'])
  },

});
</script>

<style scoped>

</style>
