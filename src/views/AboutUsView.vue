<template>
  <div style="background-color: aqua">
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div>
      <div class="hidden-sm-and-down pcAnsicht">
        <div style="position: absolute;" class="hintergrund">
          <div style="background-color: rgba(0,0,0,0.58); height: 100%" class="pt-10">
            <h1 class="text-white d-flex justify-center ">
              Die Geschichte dahinter
            </h1>
            <div class="d-flex justify-center mt-5">
              <p class="text-shades-white text" align="center" style="height: 60%; width: 70%">
                Im Rahmen unseres Studiums sollten wir an einem internetbasierten Projekt arbeiten. Da wir beide
                Filmfanatiker sind, überlegten wir, wie man Filmerlebnis verbessern könnte und stießen dabei auf die
                Idee
                für
                MyWatchlist. Sie kennen bestimmt auch, dass man beim Browsen durch das Internet oder beim Austauschen
                mit
                Freunden
                und Familie von einem Film hört, der Ihr Interesse weckt und Sie sagen sich „Ja, den schaue
                ich mir später unbedingt mal an!“. Dann erledigen Sie noch ein paar Sachen, denken nicht mehr großartig
                darüber
                nach und am nächsten Tag ist der Film schon wieder in Vergessenheit geraten. Dabei entgeht Ihnen
                möglicherweise Ihr
                nächster Lieblingsfilm. Da kommt unsere Idee ins Spiel. MyWatchlist wurde dafür entwickelt, schnell und
                flexibel Filme, die man noch sehen möchte oder schon gesehen hat, abzuspeichern und zu organisieren,
                sodass
                man nie wieder Angst davor haben muss einen Film zu vergessen!

              </p>
            </div>
            <h1 class="text-white d-flex justify-center mt-10">
              Wer wir sind
            </h1>
            <v-row class="text-white d-flex justify-center mt-3">
              <v-col sm="1"></v-col>
              <v-col sm="5">
                <div class="d-flex justify-center">
                  <p class="text" align="center">Leandro Graf
                  </p>
                </div>
              </v-col>
              <v-col sm="5">
                <div class="justify-center d-flex">
                  <p class="text">
                    Rodrigo Galarza
                  </p>
                </div>
              </v-col>
              <v-col sm="1"></v-col>

              <v-col sm="1"></v-col>
              <v-col class="d-flex justify-center" sm="5">
                <v-img class="bild" src="../assets/Leandro.png">
                </v-img>
              </v-col>
              <v-col class="d-flex justify-center" sm="5">
                <v-img class="bild" src="../assets/Rodrigo.png"></v-img>
              </v-col>
              <v-col sm="1"></v-col>

              <v-col sm="1"></v-col>
              <v-col sm="5">
                <div class="d-flex justify-center">
                  <p class="text" align="center">Bei der QuinScape GmbH verantwortet Thomas Biskup als einer von drei
                    Geschäftsführern
                    das
                    Projekt- und
                    Consulting-Geschäft rund um das Thema Enterprise Portals & Solutions (Java EE). Zudem befasst er
                    sich
                    mit
                    Recruiting, Entwicklung der Unternehmenskultur, Personalentwicklung und strategischem Business
                    Development.
                    Privat faszinieren Thomas Themen der digitalen Disruption, die Singularität sowie Roguelike Games.

                  </p>
                </div>
              </v-col>
              <v-col sm="5">
                <div class="d-flex justify-center">
                  <p class="text text-center">
                    Neben der Geschäftsführung bei QuinScape – mit Schwerpunkten in den Bereichen Wissensmanagement, Big
                    Data
                    und
                    Internet of Things – ist der zweifache Familienvater Lecturer an der TU Wien und Visiting Professor
                    an
                    der
                    University for Business and Technology (UBT) in Pristina, Kosovo. Viele Jahre war Norbert Jesse
                    aktiv
                    als
                    Vice-President der Federation of International Robot-Soccer Association.
                  </p>
                </div>
              </v-col>
              <v-col sm="1"></v-col>
            </v-row>
            <br><br><br><br><br>
          </div>
        </div>
      </div>

      <div class="hidden-sm-and-up mobileAnsicht">
        <div class="hintergrund">
          <div style="background-color: rgba(0,0,0,0.58); height: 100%" class="pt-10">
            <h1 class="text-white d-flex justify-center ">
              Die Geschichte dahinter
            </h1>
            <div class="d-flex justify-center mt-5">
              <p class="text-shades-white text text-center">
                Im Rahmen unseres Studiums sollten wir an einem internetbasierten Projekt arbeiten. Da wir beide
                Filmfanatiker sind, überlegten wir, wie man Filmerlebnis verbessern könnte und stießen dabei auf die
                Idee
                für
                MyWatchlist. Sie kennen bestimmt auch, dass man beim Browsen durch das Internet oder beim Austauschen
                mit
                Freunden
                und Familie von einem Film hört, der Ihr Interesse weckt und Sie sagen sich „Ja, den schaue
                ich mir später unbedingt mal an!“. Dann erledigen Sie noch ein paar Sachen, denken nicht mehr großartig
                darüber
                nach und am nächsten Tag ist der Film schon wieder in Vergessenheit geraten. Dabei entgeht Ihnen
                möglicherweise Ihr
                nächster Lieblingsfilm. Da kommt unsere Idee ins Spiel. MyWatchlist wurde dafür entwickelt, schnell und
                flexibel Filme, die man noch sehen möchte oder schon gesehen hat, abzuspeichern und zu organisieren,
                sodass
                man nie wieder Angst davor haben muss einen Film zu vergessen!

              </p>
            </div>
            <h1 class="text-white d-flex justify-center mt-10">
              Wer wir sind
            </h1>

            <div class="aboutUsLeandro mt-5">
              <h3 class=" text-white text-center">
                Leandro Graf
              </h3>
              <div class="d-flex justify-center">
                <v-img class="bild" src="../assets/Leandro.png">
                </v-img>
              </div>
              <div class="d-flex justify-center">
                <p class="text align-center text-center text-white mt-5">
                  Bei der QuinScape GmbH verantwortet Thomas Biskup
                  als
                  einer von drei
                  Geschäftsführern
                  das
                  Projekt- und
                  Consulting-Geschäft rund um das Thema Enterprise Portals & Solutions (Java EE). Zudem befasst er sich
                  mit
                  Recruiting, Entwicklung der Unternehmenskultur, Personalentwicklung und strategischem Business
                  Development.
                  Privat faszinieren Thomas Themen der digitalen Disruption, die Singularität sowie Roguelike Games.
                </p>
              </div>

            </div>
            <div class="aboutUsRodrigo mt-5">
              <h3 class=" text-white text-center">
                Rodrigo Galarza
              </h3>
              <div class="d-flex justify-center">
                <v-img class="bild" src="../assets/Rodrigo.png">
                </v-img>
              </div>
              <div class="justify-center d-flex">
                <p class="text align-center text-center text-white mt-5">
                  Bei der QuinScape GmbH verantwortet Thomas Biskup
                  als
                  einer von drei
                  Geschäftsführern
                  das
                  Projekt- und
                  Consulting-Geschäft rund um das Thema Enterprise Portals & Solutions (Java EE). Zudem befasst er sich
                  mit
                  Recruiting, Entwicklung der Unternehmenskultur, Personalentwicklung und strategischem Business
                  Development.
                  Privat faszinieren Thomas Themen der digitalen Disruption, die Singularität sowie Roguelike Games.
                  <br><br>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <br><br><br><br>
      </div>
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
.hintergrund {
  background-image: url('https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: repeat-y;
}

.text {
  font-size: 20px;
  height: 60%;
  width: 70%
}

.bild {
  height: 300px;
  width: 300px;
}

</style>