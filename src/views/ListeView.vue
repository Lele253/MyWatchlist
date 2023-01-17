<template>
  <div class="ansichtPc hidden-sm-and-down">
    <div class="hintergrund ">
      <HeaderComponent></HeaderComponent>
      <div style="background-color: rgba(0,0,0,0.44); min-height: 83vh; height: 100%">
        <div style="height: 80%">
          <FilmHinzufuegenComponent v-if="user"></FilmHinzufuegenComponent>
          <div v-if="!user" class="d-flex justify-center nichtAngemeldet">
            <v-card style="background-color: rgba(255,255,255,0.62); margin-top: 10vh; height: 500px; width: 300px">
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
            <v-row v-if="user" class="mt-2" style="width: 100%">
              <v-col sm="3" md="2">
                <v-btn style="width: 120px" @click="getFilm">
                  Alle
                </v-btn>
              </v-col>
              <v-col sm="3" md="2" class="ml-n6">
                <v-btn style="width: 120px" @click="getGesehen">
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
              <v-row style="width: 100%" class="pr-0 mr-0">
                <v-col class="d-flex justify-center" v-for="i in $store.state.filme" :key="i">
                  <v-card :class="`karte ${i.watched}`">
                    <v-img cover class="bild"
                           :src="i.titelbild">
                    </v-img>
                    <v-card-text>
                      <span class="bildtitel justify-center d-flex ">{{ i.titel }}</span>
                      <v-row class="zeile mt-5">
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
                      <v-row class="mt-8">
                        <v-col cols="3">
                          <v-dialog
                              transition="dialog-bottom-transition"
                          >
                            <template v-slot:activator="{ props }">
                              <Icon v-bind="props" @click="dialog=true" class="button mt-2" icon="ic:baseline-comment"/>
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
                                     style="background-color: aqua; height: 60px">
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
                        <v-col cols="3">
                          <Icon
                              @click="titel=i.titel;titelbild=i.titelbild; erscheinungsjahr= i.erscheinungsjahr; bewertung= i.bewertung; kommentar= i.kommentar;watched=true;speichern(i.filmId)"
                              v-if="i.watched==false" class="button mt-2" icon="mdi:eye-outline"/>
                          <Icon
                              @click="titel=i.titel;titelbild=i.titelbild; erscheinungsjahr= i.erscheinungsjahr; bewertung= i.bewertung; kommentar= i.kommentar;watched=false;speichern(i.filmId)"
                              v-if="i.watched==true" class="button mt-2" icon="mdi:eye-off-outline"/>
                        </v-col>
                        <v-col cols="3">
                          <a target="_blank" :href="'http://netflix.com/search?q='+i.titel">
                            <Icon class="button mt-2" icon="logos:netflix-icon"/>
                          </a>
                        </v-col>
                        <v-col cols="3">
                          <Icon @click="löschen(i.filmId)" class="button mt-2" style="color: red" icon="ph:x-bold"/>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>

  </div>

  <div class="ansichtMobile hidden-sm-and-up" style="height: 80%">
    <div class="hintergrundMobile ">
      <HeaderComponent></HeaderComponent>
      <div style="background-color: rgba(0,0,0,0.44); min-height: 77vh; height: 100%">
        <div style="height: 100%">
          <FilmHinzufuegenComponent v-if="user"></FilmHinzufuegenComponent>
          <div class="nichtAngemeldet d-flex justify-center"
               v-if="!user">
            <v-card style="background-color: rgba(255,255,255,0.62); margin-top: 10vh; height: 500px; width: 300px">
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
          <div class="mb-5">
            <v-row v-if="user" class="mt-2" style="width: 100%">
              <v-col sm="3" md="2">
                <v-btn style="width: 120px" @click="getFilm">
                  Alle
                </v-btn>
              </v-col>
              <v-col sm="3" md="2" class="ml-n6">
                <v-btn style="width: 120px" @click="getGesehen">
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
              <v-row style="width: 100%" class="pr-0 mr-0">
                <v-col class="d-flex justify-center" v-for="i in $store.state.filme" :key="i">
                  <v-card :class="`karte ${i.watched}`">
                    <v-img cover class="bild"
                           :src="i.titelbild">
                    </v-img>
                    <v-card-text>
                      <span class="bildtitel justify-center d-flex ">{{ i.titel }}</span>
                      <v-row class="zeile mt-5">
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
                      <v-row class="mt-8">
                        <v-col cols="3">
                          <v-dialog
                              transition="dialog-bottom-transition"
                          >
                            <template v-slot:activator="{ props }">
                              <Icon v-bind="props" @click="dialog=true" class="button mt-2" icon="ic:baseline-comment"/>
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
                                     style="background-color: aqua; height: 60px">
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
                        <v-col cols="3">
                          <Icon
                              @click="titel=i.titel;titelbild=i.titelbild; erscheinungsjahr= i.erscheinungsjahr; bewertung= i.bewertung; kommentar= i.kommentar;watched=true;speichern(i.filmId)"
                              v-if="i.watched==false" class="button mt-2" icon="mdi:eye-outline"/>
                          <Icon
                              @click="titel=i.titel;titelbild=i.titelbild; erscheinungsjahr= i.erscheinungsjahr; bewertung= i.bewertung; kommentar= i.kommentar;watched=false;speichern(i.filmId)"
                              v-if="i.watched==true" class="button mt-2" icon="mdi:eye-off-outline"/>
                        </v-col>
                        <v-col cols="3">
                          <a target="_blank" :href="'http://netflix.com/search?q='+i.titel">
                            <Icon class="button mt-2" icon="logos:netflix-icon"/>
                          </a>
                        </v-col>
                        <v-col cols="3">
                          <Icon @click="löschen(i.filmId)" class="button mt-2" style="color: red" icon="ph:x-bold"/>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-n5">
      <FooterComponent></FooterComponent>
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
    },
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.getFilm()
  },
  created() {
    this.$store.state.routername = this.name
  },
  updated() {
    this.getFilm()
  }
}
</script>

<style scoped>
.hintergrund {
  background-image: url('https://www.turn-on.de/media/cache/article_images/media/cms/2018/01/filmrolle.jpg?356188');
  width: 100%;
  min-height: 93vh;
  background-size: cover;
  background-repeat: repeat;
}

.hintergrundMobile {
  background-image: url('https://www.turn-on.de/media/cache/article_images/media/cms/2018/01/filmrolle.jpg?356188');
  width: 100%;
  min-height: 93vh;
  background-repeat: repeat;
}

.nichtRegistriert {
  font-size: 15px
}

.cardText {
  font-size: 20px;
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

.bild {
  height: 190px;
  width: 350px;
}

.karteninhalt {
  font-size: 20px;
}

.bildtitel {
  font-size: 25px;
  text-shadow: 1px 1px 5px black;
}

.zeile {
  max-height: 35px;
}

.button {
  font-size: 50px;
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