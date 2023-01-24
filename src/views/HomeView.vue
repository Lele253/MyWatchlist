<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div style="height: 100%" class="hidden-sm-and-down welcomeSite hintergrund pcAnsicht">
      <div class="d-flex justify-center">
        <div class="justify-center d-flex" style="background-color: rgba(0,0,0,0.46);height: 100%; width: 100%">
          <div>
            <div class="container pt-5">
              <h1 class="text-center mt-3">
                <v-img style="height: 90px" src="../assets/icon2.jpg"></v-img>
              </h1>
              <h3 class="text-center mt-8 mx-4 container1untertitel">
                MyWatchlist ist die Perfekte Webanwendung zur Planung und Organisierung deiner Filme
              </h3>
              <p class="text-center mt-10 container1text mx-10">
                MyWatchlist ist die ultimative Lösung für alle Filmliebhaber, die ihre Filmliste organisieren und
                verwalten möchten. Mit unserer Website können Benutzer einfach ihre Filmliste erstellen, Filme
                hinzufügen,
                die sie sehen möchten, und die Filme, die sie bereits gesehen haben, markieren.
              </p>
            </div>
            <div class="container">
              <h1 class="text-center überschrift"> Erstelle deine eigene Karte</h1>
              <v-row class="justify-center">
                <v-col cols="5">
                  <v-img class="bilder"
                         src="../assets/listeFilme.jpg"></v-img>
                  <p class="text">
                    Was haben Sie bereits gesehen? Erstellen Sie eine personalisierte Liste all Ihrer bereits gesehenen
                    Filme.
                  </p>
                </v-col>
                <v-col cols="5">
                  <v-img class="bilder" src="../assets/calenderIcon.png"
                  ></v-img>
                  <p class="text">
                    Möchten Sie Up-to-date bleiben? Nutzen Sie Ihre Liste, um zu verfolgen, welche Filme Sie
                    bereits gesehen haben und welche Sie sich noch ansehen möchten."
                  </p>
                </v-col>
              </v-row>
            </div>
            <div class="container pt-5">
              <h1 class="text-center überschrift">
                Entdecke mehr über MyWatchlist
              </h1>
              <div class="mt-8">
                <v-row class="d-flex justify-center">
                  <v-col>
                    <v-img class="bilder" src="../assets/film-clapper.png">
                    </v-img>
                  </v-col>
                  <v-col>
                    <v-row class="mt-11 justify-center">
                      <v-btn @click="this.$router.push('/login')" class="button">
                        Anmelden
                      </v-btn>
                    </v-row>
                    <v-row class="mt-11 justify-center">
                      <v-btn @click="this.$router.push('/registrieren')" class="button">
                        Registrieren
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterComponent></FooterComponent>
      </div>
    </div>


    <div class="mobile hidden-sm-and-up welcomeSite hintergrund"
         style="height: 100%">
      <div class="justify-center d-flex">
        <div class="justify-center d-flex" style="background-color: rgba(0,0,0,0.46);height: 100%; width: 100%">
          <div>
            <div class="containerMobile ">
              <v-img style="height: 90px" src="../assets/icon2.jpg" class="überschrift"></v-img>
              <h3 class="text-center mt-4 mx-4 container1untertitel">
                MyWatchlist ist die Perfekte Webanwendung zur Planung und Organisierung deiner Filme
              </h3>
              <p class="text-center mt-10 container1text mx-5">
                MyWatchlist ist die ultimative Lösung für alle Filmliebhaber, die ihre Filmliste organisieren und
                verwalten möchten. Mit unserer Website können Benutzer einfach ihre Filmliste erstellen, Filme
                hinzufügen,
                die sie sehen möchten, und die Filme, die sie bereits gesehen haben, markieren.
              </p>
            </div>
            <div class="containerMobile">
              <h1 class="text-center überschrift"> Create Your Card</h1>
              <v-img class="bilder mt-12 ml-9"
                     src="../assets/listeFilme.jpg"></v-img>
              <p class="text mx-8 mt-10">
                Was haben Sie bereits gesehen? Erstellen Sie eine personalisierte Liste all Ihrer bereits gesehenen
                Filme.
              </p>
            </div>
            <div class="containerMobile">
              <h1 class="text-center überschrift"> Stay up to date</h1>
              <v-img class="bilder mt-12 mr-10"
                     src="../assets/calenderIcon.png"></v-img>
              <p class="text mx-8 mt-3">
                Brauchen Sie Hilfe beim Up-to-date bleiben? Nutzen Sie Ihre Liste, um zu verfolgen, welche Filme Sie
                bereits gesehen haben und welche Sie noch planen zu sehen."
              </p>
            </div>
            <div class="containerMobile">
              <h1 class="text-center überschrift">Entdecke MyWatchlist</h1>
              <v-img class="bilder"
                     src="../assets/film-clapper.png"></v-img>
              <div class="d-flex justify-center mt-5">
                <v-btn class="button"
                       @click="this.$router.push('/login')">
                  Anmelden
                </v-btn>
              </div>
              <div class="d-flex justify-center mt-5">
                <v-btn class="button"
                       @click="this.$router.push('/registrieren')"
                >
                  Registrieren
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import HeaderComponent from "@/components/HeaderComponent";
import {mapGetters} from "vuex";
import FooterComponent from "@/components/FooterComponent";

export default defineComponent({
  computed: {
    ...mapGetters(['user']),
  },
  data() {
    return {
      daten: [],
      name: 'Welcome',
      nichtGesehen: [],
      test: []
    }
  },
  methods: {},
  components: {
    FooterComponent,
    HeaderComponent
  },
  mounted() {
  },
  created() {
    this.$store.state.routername = this.name
  }
});
</script>

<style scoped>
.bilder {
  height: 200px;
}

.container {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 400px;
  width: 70vh;
  background-color: rgba(255, 255, 255, 0.73);
}

.text {
  text-align: center;
}

.button {
  height: 50px;
  width: 250px;
  background-color: aqua;
  border-radius: 30px;
}

.hintergrund {
  background-image: url('https://championstream.de/wp-content/uploads/2022/06/WOW-Filme.jpg');
  background-repeat: repeat;
}

.containerMobile {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 500px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.73);
}

.überschrift {
  padding-top: 20px;
}
</style>
