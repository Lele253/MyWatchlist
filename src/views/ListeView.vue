<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div class="d-flex justify-center">
      <v-card class="karte mx-2 " v-for="i in $store.state.filme" :key="i">

        <v-img class="bild"
               :src="i.titelbild">
          <div style="width: 160px" class="justify-center d-flex mt-2">
            <span class="text-white bildtitel">Star Wars</span>
          </div>
        </v-img>
        <v-card-text>

        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "ListeView",
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.karte {
  height: 250px;
  width: 160px;
}

.bild {
  height: 100px;
  width: 160px;
}

.bildtitel {

  text-shadow: 3px 3px 10px black;
}
</style>