<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div class="d-flex justify-center mt-5">
      <h1>Über Uns </h1> <br>
     
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "AboutUsView",
  components: {
    HeaderComponent,
    FooterComponent
  }

}
</script>

<style scoped>

</style>