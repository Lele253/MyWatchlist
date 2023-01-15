<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div class="d-flex justify-center mt-10">
      <v-img style="height: 300px; width: 300px" src="../assets/ueberUns.png"></v-img>

    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  data() {
    return {
      name: "Über uns",
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  created() {
    this.$store.state.routername = this.name
  }

}
</script>

<style scoped>

</style>