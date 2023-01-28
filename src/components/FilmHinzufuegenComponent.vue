<template>
  <div>
    <div class="barzu d-flex" style="cursor: pointer; box-shadow: 2px 2px 5px black" v-if="dropdown==false"

         @click="dropdown=true">
      <h2 class="ml-3">Film Hinzufügen</h2>
      <Icon style="font-size: 25px; margin-top: 7px" class="ml-1" icon="ic:outline-keyboard-arrow-down"/>
    </div>

    <div v-if="dropdown==true" class="baraufMobile hidden-md-and-up mobile" style="box-shadow: 2px 2px 5px black">
      <div class="d-flex">
        <h2 style="cursor: pointer; max-height: 40px" @click="dropdown=false" class="ml-3">Schließen</h2>
        <Icon @click="dropdown=false" style="font-size: 25px; margin-top: 7px; cursor: pointer; max-height: 40px"
              class="ml-1"
              icon="ic:baseline-close"/>
      </div>
      <div class="d-flex justify-center imgdiv mt-2">
        <v-img src="https://assets.turbologo.com/blog/de/2019/12/18151022/20th-century-fox-logo-flat.png">
          <v-form @submit.prevent="filmerstellen">
            <v-row class="justify-start mt-3 ml-16">
              <v-col class="eingabefelderMobile" cols="10">
                <v-text-field v-model="titel" class="textfelder" variant="solo" label="Name"></v-text-field>
              </v-col>
              <v-col class="eingabefelderMobile" cols="10">
                <v-text-field v-model="titelbild" class="textfelder" variant="solo"
                              label="Titelbild (Bildadresse URL)"></v-text-field>
              </v-col>
              <v-col class="eingabefelderMobile" cols="10">
                <v-text-field v-model="erscheinungsjahr" class="textfelder" variant="solo"
                              label="Erscheinungsjahr"></v-text-field>
              </v-col>
              <v-col class="eingabefelderMobile" cols="10">
                <v-text-field v-model="bewertung" class=" textfelder" variant="solo" label="Bewertung"
                              type="number"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="justify-start ml-16">
              <v-col cols="10">
                <v-textarea
                    v-model="kommentar" variant="solo" label="Kommentar">

                </v-textarea>
              </v-col>
            </v-row>
            <div class="d-flex justify-center">
              <v-btn style="color: black; background-color: white; height: 30px"
                     type="submit">
                Speichern
              </v-btn>
            </div>
          </v-form>
        </v-img>
      </div>
    </div>


    <div v-if="dropdown==true" class="barauf hidden-sm-and-down pcAnsicht" style="box-shadow: 2px 2px 5px black">
      <div class="d-flex">
        <h2 style="cursor: pointer; max-height: 40px" @click="dropdown=false" class="ml-3">Schließen</h2>
        <Icon @click="dropdown=false"
              style="color: red;font-size: 25px; margin-top: 7px; cursor: pointer; max-height: 40px"
              class="ml-1"
              icon="ic:baseline-close"/>
      </div>
      <div class="d-flex justify-center imgdiv">
        <v-img class="hintergrundPC"
               src="https://assets.turbologo.com/blog/de/2019/12/18151022/20th-century-fox-logo-flat.png">
          <div class="d-flex">
            <v-row>
              <v-col cols="7" style="max-width: 940px">
                <v-form v-model="valid" @submit.prevent="filmerstellen">
                  <v-row class="justify-start mt-16 ml-16">
                    <v-col class="eingabefelder" cols="6">
                      <v-card style="background-color: rgba(255,255,255,0.51)">
                        <v-text-field counter :maxlength="max28" type="text" :rules="nameRules" required
                                      v-model="titel" class="textfelder"
                                      variant="solo"
                                      label="Name"></v-text-field>
                      </v-card>
                    </v-col>
                    <v-col class="eingabefelder" cols="6">
                      <v-card style="background-color: rgba(255,255,255,0.51)">
                        <v-text-field :maxlength="max300" counter v-model="titelbild" :rules="urlRule" no-resize
                                      class="textfelder"
                                      variant="solo"
                                      label="Titelbild (Bildadresse URL)"></v-text-field>
                      </v-card>
                    </v-col>
                    <v-col class="eingabefelder" cols="6">
                      <v-text-field
                          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                          maxlength="4" type="number" v-model="erscheinungsjahr" class="textfelder"
                          variant="solo"
                          label="Erscheinungsjahr"></v-text-field>
                    </v-col>
                    <v-col class="eingabefelder" cols="6">
                      <v-text-field
                          oninput="javascript: if (this.bewertung> this.max10) this.bewertung = 10;"
                          v-model="bewertung" class=" textfelder" variant="solo"
                          label="Bewertung"
                          type="number"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="justify-start ml-16" style="max-width: 940px">
                    <v-col cols="12">
                      <v-card style="background-color: rgba(255,255,255,0.51)">
                        <v-textarea :maxlength="max600" no-resize counter :rules="commentRules" v-model="kommentar"
                                    variant="solo"
                                    label="Kommentar"></v-textarea>
                      </v-card>
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: black; background-color: white; height: 30px"
                             type="submit">
                        Speichern
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
              <v-col cols="5" class="hidden-sm">
                <div class="d-flex justify-center">
                  <v-card :class="`karte ${watched}`"
                          style="height: 500px; width: 350px;"
                          class="mt-12">
                    <v-img class="bild"
                           :src="titelbild">
                    </v-img>
                    <v-card-text class="mt-n5">
                      <span class="bildtitel justify-center d-flex">{{ titel }}</span>
                      <v-row class="zeile  mt-5">
                        <v-col><h4 class="karteninhalt">Erschienen:</h4></v-col>
                        <v-col><h4 class="karteninhalt">{{ erscheinungsjahr }}</h4></v-col>
                      </v-row>
                      <v-row class="zeile mt-3">
                        <v-col><h4 class="karteninhalt">Datum:</h4></v-col>
                        <v-col class="ml-n3"><h4 class="karteninhalt"> {{ datum }} </h4></v-col>
                      </v-row>
                      <v-row class="zeile mt-3">
                        <v-col><h4 class="karteninhalt">Bewertung:</h4></v-col>
                        <v-col><h4 class="karteninhalt">{{ bewertung }}</h4></v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-row class="mt-5">
                        <v-col class="d-flex justify-center">
                          <Icon v-bind="props" @click="dialog=true" class="button mt-2" icon="ic:baseline-comment"/>
                        </v-col>
                        <v-col v-if="!watched" class="d-flex justify-center">
                          <Icon @click="watched=true" class="button mt-2" icon="mdi:eye-outline"/>
                        </v-col>
                        <v-col v-if="watched" class="d-flex justify-center">
                          <Icon @click="watched=false" class="button mt-2" icon="mdi:eye-off-outline"/>
                        </v-col>
                        <v-col cols="3">
                          <a target="_blank" :href="'https://www.netflix.com/search?q='+titel">
                            <Icon class="button mt-2" icon="logos:netflix-icon"/>
                          </a>
                        </v-col>
                        <v-col class="d-flex justify-center">
                          <Icon @click="clearForm" class="button mt-2" style="color: red" icon="ph:x-bold"/>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </div>
              </v-col>
            </v-row>
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
      watched: false,
      titel: '',
      titelbild: '',
      erscheinungsjahr: '',
      bewertung: '',
      kommentar: '',
      status: '',
      valid: false,
      max28: 28,
      max600: 600,
      max4: 4,
      max300: 300,
      max10: 10,
      nameRules: [v => !!v || 'Name ist nicht ausgefüllt', v => v.length <= 28 || 'Es dürfen maximal 28 Zeichen benutzt werden',],
      urlRule: [v => !!v || 'URL ist nicht ausgefüllt', v => v.length <= 300 || 'Es dürfen maximal 300 Zeichen benutzt werden',],
      commentRules: [v => !!v || 'Kommentar ist nicht ausgefüllt', v => v.length <= 600 || 'Es dürfen maximal 600 Zeichen benutzt werden',],


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
      const respons = await axios.post('http://leandro-graf.de:8080/auth/film/' + this.user.nutzerId, {
        titel: this.titel,
        titelbild: this.titelbild,
        erscheinungsjahr: this.erscheinungsjahr,
        bewertung: this.bewertung,
        hinzugefuegt: this.datum,
        kommentar: this.kommentar,
        watched: this.watched
      });
      console.log(respons)
      this.titel = '';
      this.titelbild = '';
      this.erscheinungsjahr = '';
      this.bewertung = '';
      this.kommentar = '';
      this.getFilm()
      this.dropdown = false
    },
    async getFilm() {
      const respons = await axios.get('http://leandro-graf.de:8080/auth/film/sortiert/' + this.user.nutzerId);
      this.$store.state.filme = respons.data
      console.log(this.$store.state.filme)
    },
    clearForm() {
      this.titel = '';
      this.titelbild = '';
      this.erscheinungsjahr = '';
      this.bewertung = '';
      this.kommentar = '';
      this.watched = false;
    }
  }
}
</script>

<style scoped>
.barzu {
  height: 40px;
  background-color: #3db9b9;
}

.karte.true {
  background-color: rgba(0, 128, 0, 0.38);
  height: 500px;
  width: 350px;
  border: solid 7px green;
  margin-bottom: 20px;
}

.karte.false {
  background-color: rgba(255, 165, 0, 0.47);
  height: 500px;
  width: 350px;
  border: solid 7px orange;
  margin-bottom: 25px;
}

.karteninhalt {
  font-size: 8px;
  max-height: 14px;
  text-shadow: 2px 2px 5px white;
}

.zeile {
  max-height: 35px;
}

.barauf {
  background-color: #3db9b9;
}

.baraufMobile {
  height: 570px;
  background-color: #3db9b9;
}

.karteninhalt {
  font-size: 20px;
}

.bildtitel {
  font-size: 25px;
  text-shadow: 3px 3px 10px white;
}

.bild {
  height: 190px;
  width: 350px;
}

.neuerFilmKarte {
  height: 330px;
  width: 631px;
}

.eingabefelder {
  height: 90px;
  max-width: 470px !important;
}

.eingabefelderMobile {
  height: 70px;
}

.bildtitel {
  margin-top: 10px;
  text-shadow: 1px 1px 5px black;
}

.button {
  font-size: 50px;
  cursor: pointer;
}

.hintergrundPC {
  max-height: 700px;
  min-height: 500px;

}

.imgdiv {
  height: 93%;
  background-color: black;


}
</style>