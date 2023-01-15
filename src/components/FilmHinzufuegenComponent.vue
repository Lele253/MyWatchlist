<template>
  <div>
    <div style="cursor: pointer; box-shadow: 2px 2px 5px black" v-if="dropdown==false"
         class="barzu d-flex"
         @click="dropdown=true">
      <h2 class="ml-3">Film Hinzufügen</h2>
      <Icon style="font-size: 25px; margin-top: 7px" class="ml-1" icon="ic:outline-keyboard-arrow-down"/>
    </div>

    <div v-if="dropdown==true" class="barauf" style="box-shadow: 2px 2px 5px black">
      <div class="d-flex">
        <h2 style="cursor: pointer; max-height: 40px" @click="dropdown=false" class="ml-3">Schließen</h2>
        <Icon @click="dropdown=false" style="font-size: 25px; margin-top: 7px; cursor: pointer; max-height: 40px"
              class="ml-1"
              icon="ic:baseline-close"/>
      </div>
      <div class="d-flex justify-center">
        <v-img src="../assets/filmhintergrund.jpg">
          <div class="d-flex">
            <v-form @submit.prevent="filmerstellen">
              <v-row style="width: 1000px" class="justify-start mt-2 ml-16">
                <v-col class="eingabefelder" cols="5">
                  <v-text-field v-model="titel" class="textfelder" variant="solo" label="Name"></v-text-field>
                </v-col>
                <v-col class="eingabefelder" cols="5">
                  <v-text-field v-model="titelbild" class="textfelder" variant="solo"
                                label="Titelbild (url)"></v-text-field>
                </v-col>
                <v-col class="eingabefelder" cols="5">
                  <v-text-field v-model="erscheinungsjahr" class="textfelder" variant="solo"
                                label="Erscheinungsjahr"></v-text-field>
                </v-col>
                <v-col class="eingabefelder" cols="5">
                  <v-text-field v-model="bewertung" class=" textfelder" variant="solo" label="Bewertung"
                                type="number"></v-text-field>
                </v-col>
              </v-row>
              <v-row class="justify-start ml-16">
                <v-col cols="10">
                  <v-textarea v-model="kommentar" variant="solo" label="Kommentar"></v-textarea>
                </v-col>
              </v-row>
              <v-btn style="color: black; background-color: white; height: 30px"
                     type="submit">
                Speichern
              </v-btn>
            </v-form>
            <v-card style="height: 280px; width: 180px" class="mt-12 mr-16">
              <v-img class="bild"
                     :src="titelbild">
              </v-img>
              <v-card-text>
                <span class="bildtitel justify-center d-flex mt-n3">{{ titel }}</span>
                <v-row class="zeile mt-1">
                  <v-col><p class="karteninhalt">Erschienen:</p></v-col>
                  <v-col><p class="karteninhalt">{{ erscheinungsjahr }}</p></v-col>
                </v-row>
                <v-row class="zeile">
                  <v-col><p class="karteninhalt">Hinzugefügt:</p></v-col>
                  <v-col><p class="karteninhalt"> {{ datum }} </p></v-col>
                </v-row>
                <v-row class="zeile">
                  <v-col><p class="karteninhalt">Bewertung:</p></v-col>
                  <v-col><p class="karteninhalt">{{ bewertung }}</p></v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-row>
                  <v-col class="d-flex justify-center">
                    <Icon v-bind="props" @click="dialog=true" class="button" icon="ic:baseline-comment"/>
                  </v-col>
                  <v-col class="d-flex justify-center">
                    <Icon class="button" style="color: red" icon="ph:x-bold"/>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </div>
          <v-card-actions class="d-flex justify-start ml-16">
          </v-card-actions>
        </v-img>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue';
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "FilmHinzufuegenComponent",
  data() {
    return {
      dropdown: false,
      titel: '',
      titelbild: '',
      erscheinungsjahr: '',
      bewertung: '',
      kommentar: '',
      status: '',
    }
  },
  components: {
    Icon,
  },
  computed: {
    datum: function () {
      let heute = new Date();
      return heute.getDate() + '.' + (heute.getMonth() + 1) + '.' + heute.getFullYear()
    },
    ...mapGetters(['user'])
  },
  methods: {
    async filmerstellen() {
      const respons = await axios.post('http://localhost:8080/auth/film/' + this.user.nutzerId, {
        titel: this.titel,
        titelbild: this.titelbild,
        erscheinungsjahr: this.erscheinungsjahr,
        bewertung: this.bewertung,
        hinzugefuegt: this.datum,
        kommentar: this.kommentar,
        watched: 'false'
      });
      console.log(respons)
      this.titel = '';
      this.titelbild = '';
      this.erscheinungsjahr = '';
      this.bewertung = '';
      this.kommentar = '';
      this.getFilm()
    },
    async getFilm() {
      const respons = await axios.get('http://localhost:8080/auth/film/sortiert/' + this.user.nutzerId);
      this.$store.state.filme = respons.data
      console.log(this.$store.state.filme)
    }
  }
}
</script>

<style scoped>
.barzu {
  height: 40px;
  background-color: #3db9b9;
}

.barauf {

  background-color: #3db9b9;
}

.bild {
  height: 115px;
  width: 180px;
}

.neuerFilmKarte {
  height: 330px;
  width: 631px;
}

.eingabefelder {
  height: 90px;
}

.bildtitel {

  text-shadow: 1px 1px 5px black;
}

.textfelder {
}

</style>