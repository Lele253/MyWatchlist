<template>
  <div class="hintergrund">
    <HeaderComponent></HeaderComponent>
    <FilmHinzufuegenComponent v-if="user"></FilmHinzufuegenComponent>
    <FooterComponent></FooterComponent>
    <div v-if="!user" class="d-flex justify-center nichtAngemeldet">
      <v-card style="background-color: rgba(255,255,255,0.43); margin-top: 10vh; height: 500px; width: 300px">
        <v-card-title style="font-size: 25px" class="text-center">
          Nicht angemeldet
        </v-card-title>
        <v-card-text class="text-center cardText">
          <v-img src="../assets/error.png"></v-img>
          <br>
          Sie haben leider keinen Zugriff auf Ihre Filme, solange Sie nicht angemeldet sind.
        </v-card-text>
        <div>
          <div class="d-flex justify-center">
            <v-card-actions class="d-flex justify-center">
              <router-link style="font-size: 20px" to="/login">
                Melden Sie sich hier an
              </router-link>
            </v-card-actions>
          </div>
          <v-card-text class="nichtRegistriert text-center">
            Sie haben noch keinen Account?
          </v-card-text>
          <div class="text-center nichtRegistriert mt-n5">
            <router-link to="/registrieren">
              Dann registrieren Sie sich jetzt!
            </router-link>
          </div>
        </div>
      </v-card>
    </div>
    <div>
      <v-row v-if="user" class="mt-2">
        <v-col sm="3" md="2" class="ml-3">
          <v-btn style="width: 130px" @click="getFilm">
            Alle
          </v-btn>
        </v-col>
        <v-col sm="3" md="2" class="ml-n6">
          <v-btn style="width: 130px" @click="getGesehen">
            Gesehen
          </v-btn>
        </v-col>
        <v-col sm="3" class="ml-n6" md="2">
          <v-btn style="width: 130px" @click="getNichtGesehen">
            Nicht gesehen
          </v-btn>
        </v-col>
      </v-row>
      <div v-if="user" class="d-flex justify-center mt-5">
        <v-row>
          <v-col class="d-flex justify-center" v-for="i in $store.state.filme" :key="i">
            <v-card :class="`karte ${i.watched}`">
              <v-img cover class="bild"
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
                  <v-col><p class="karteninhalt">{{ i.hinzugefuegt }}</p></v-col>
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
                            <v-text-field v-model="i.titel" variant="solo"
                                          label="Titel"></v-text-field>
                            <v-text-field v-model="i.titelbild" variant="solo"
                                          label="Titelbild"></v-text-field>
                            <v-text-field v-model="i.erscheinungsjahr" variant="solo"
                                          label="Erscheinungsjahr"></v-text-field>
                            <v-text-field v-model="i.bewertung" variant="solo" label="Bewertung"
                                          type="number"></v-text-field>
                            <v-textarea v-model="i.kommentar" variant="solo" label="Kommentar"></v-textarea>
                          </v-card-text>
                          <v-card-actions v-if="bearbeiten==true" class="justify-end">
                            <Icon style="color: green; font-size: 40px" class="button mt-n5 mr-3"
                                  @click="titel=i.titel;titelbild=i.titelbild; erscheinungsjahr= i.erscheinungsjahr; bewertung= i.bewertung; kommentar= i.kommentar;watched=i.watched;speichern(i.filmId)"
                                  icon="dashicons:saved"/>
                          </v-card-actions>


                        </v-card>

                      </template>
                    </v-dialog>


                  </v-col>
                  <v-col class="d-flex justify-center">
                    <Icon
                        @click="titel=i.titel;titelbild=i.titelbild; erscheinungsjahr= i.erscheinungsjahr; bewertung= i.bewertung; kommentar= i.kommentar;watched=true;speichern(i.filmId)"
                        v-if="i.watched==false" class="button" icon="mdi:eye-outline"/>
                    <Icon
                        @click="titel=i.titel;titelbild=i.titelbild; erscheinungsjahr= i.erscheinungsjahr; bewertung= i.bewertung; kommentar= i.kommentar;watched=false;speichern(i.filmId)"
                        v-if="i.watched==true" class="button" icon="mdi:eye-off-outline"/>
                  </v-col>
                  <v-col class="d-flex justify-center">
                    <Icon @click="löschen(i.filmId)" class="button" style="color: red" icon="ph:x-bold"/>
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
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import {Icon} from '@iconify/vue';
import FilmHinzufuegenComponent from "@/components/FilmHinzufuegenComponent";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      dialog: false,
      bearbeiten: false,
      name: "Filme",
      titel: '',
      titelbild: '',
      erscheinungsjahr: '',
      bewertung: '',
      kommentar: '',
      watched: '',
      gesehen: [],
      nichtGesehen: [],
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    Icon,
    FilmHinzufuegenComponent
  },
  methods: {
    async getGesehen() {
      await this.getFilm()
      this.gesehen = []
      for (const i of this.$store.state.filme) {
        if (i.watched) {
          this.gesehen.push(i)
        }
      }
      this.$store.state.filme = this.gesehen
    },
    async getNichtGesehen() {
      await this.getFilm()
      this.nichtGesehen = []
      for (const i of this.$store.state.filme) {
        if (!i.watched) {
          this.nichtGesehen.push(i)
        }
      }
      this.$store.state.filme = this.nichtGesehen
    },
    async löschen(id) {
      await axios.delete('http://localhost:8080/auth/' + id)
      await new Promise(resolve => setTimeout(resolve, 100));
      this.getFilm()
    },
    async speichern(id) {
      await axios.put('http://localhost:8080/auth/film/' + id, {
        titel: this.titel,
        titelbild: this.titelbild,
        erscheinungsjahr: this.erscheinungsjahr,
        bewertung: this.bewertung,
        kommentar: this.kommentar,
        watched: this.watched
      })
      console.log(id)
      this.bearbeiten = false
      this.getFilm()
    },
    weiterleitung() {
      if (this.user == null) {
        this.$router.push("/login")
      } else {
        this.getFilm()
      }

    },
    async getFilm() {
      const respons = await axios.get('http://localhost:8080/auth/film/sortiert/' + this.user.nutzerId);
      this.$store.state.filme = respons.data
      console.log(this.$store.state.filme)
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.$store.state.routername = this.name
  },
  mounted() {
    console.log('test')
    this.getFilm()
  }
}
</script>

<style scoped>
.hintergrund {
  /*background-image: url('https://www.turn-on.de/media/cache/article_images/media/cms/2018/01/filmrolle.jpg?356188');*/
  width: 100%;
  height: 100%;
  background-size: cover;
}

.nichtRegistriert {
  font-size: 15px
}

.cardText {
  font-size: 20px;
}

.karte.true {
  height: 280px;
  width: 180px;
  border: solid 2px green;
}

.karte.false {
  height: 280px;
  width: 180px;
  border: solid 2px red;
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
  font-size: 30px;
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