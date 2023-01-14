<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FilmHinzufuegenComponent></FilmHinzufuegenComponent>
    <FooterComponent></FooterComponent>
    <div class="d-flex justify-center mt-5">
      <v-row>
        <v-col class="d-flex justify-center" v-for="(i, index) in $store.state.filme" :key="i">
          <v-card class="karte">
            <v-img class="bild"
                   :src="i.titelbild">
            </v-img>
            <v-card-text>
              <span class="bildtitel justify-center d-flex mt-n3">{{ i.titel }}</span>
              <v-row class="zeile mt-1">
                <v-col><p class="karteninhalt">Erschienen:</p></v-col>
                <v-col><p class="karteninhalt">{{ i.erscheinungsjahr }}</p></v-col>
              </v-row>
              <v-row class="zeile">
                <v-col><p class="karteninhalt">Hinzugefügt:</p></v-col>
                <v-col><p class="karteninhalt">{{ i.hinzugefügtAm }}</p></v-col>
              </v-row>
              <v-row class="zeile">
                <v-col><p class="karteninhalt">Bewertung:</p></v-col>
                <v-col><p class="karteninhalt">{{ i.bewertung }}</p></v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col class="d-flex justify-center">
                  <v-dialog
                      transition="dialog-bottom-transition"
                  >
                    <template v-slot:activator="{ props }">
                      <Icon v-bind="props" @click="dialog=true" class="button" icon="ic:baseline-comment"/>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card style="left: 38%" class="dialogkarte justify-center hidden-sm-and-down">


                        <div v-if="bearbeiten==false"
                             style="background-color: aqua; height: 60px"
                        >
                          <h2 class="ml-3 mt-3">Kommentar</h2>
                        </div>
                        <v-card-text v-if="bearbeiten==false">
                          <div>
                            <p class="kommentar"> {{ i.kommentar }}</p>
                          </div>
                        </v-card-text>
                        <v-card-actions v-if="bearbeiten==false" class="justify-end">
                          <Icon class="button mr-7" @click="bearbeiten=true"
                                icon="material-symbols:edit-square-outline"/>
                          <Icon style="color: red" class="button mt-1" @click="isActive.value = false"
                                icon="ri:close-circle-line"/>
                        </v-card-actions>


                        <div v-if="bearbeiten==true"
                             style="background-color: aqua; height: 60px"
                        >
                          <h2 class="ml-3 mt-3">Kommentar</h2>
                        </div>
                        <v-card-text v-if="bearbeiten==true">
                          <v-text-field v-model="i.erscheinungsjahr" variant="solo"
                                        label="Erscheinungsjahr"></v-text-field>
                          <v-text-field v-model="i.bewertung" variant="solo" label="Bewertung"
                                        type="number"></v-text-field>
                          <v-textarea v-model="i.kommentar" variant="solo" label="Kommentar"></v-textarea>
                        </v-card-text>
                        <v-card-actions v-if="bearbeiten==true" class="justify-end">
                          <Icon class="button mr-7" @click="speichern(index)"
                                icon="dashicons:saved"/>
                          <Icon style="color: red" class="button mt-1" @click="isActive.value = false"
                                icon="ri:close-circle-line"/>
                        </v-card-actions>


                      </v-card>

                    </template>
                  </v-dialog>


                </v-col>
                <v-col class="d-flex justify-center">
                  <Icon class="button" style="color: red" icon="ph:x-bold"/>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          <div>

          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import {Icon} from '@iconify/vue';
import FilmHinzufuegenComponent from "@/components/FilmHinzufuegenComponent";

export default {
  data() {
    return {
      dialog: false,
      bearbeiten: false,
    }
  },
  name: "ListeView",
  components: {
    HeaderComponent,
    FooterComponent,
    Icon,
    FilmHinzufuegenComponent
  },
  methods: {
    speichern(index) {
      console.log(index)
    }
  }
}
</script>

<style>
.karte {
  height: 280px;
  width: 180px;
}

.bild {
  height: 115px;
  width: 180px;
}

.karteninhalt {
  font-size: 10px;
}

.bildtitel {

  text-shadow: 1px 1px 5px black;
}

.zeile {
  max-height: 20px;
}

.button {
  font-size: 25px;
  cursor: pointer;
}

.kommentar {
  font-size: 17px;
}

.dialogkarte {
  height: 600px;
  width: 360px;
}

</style>