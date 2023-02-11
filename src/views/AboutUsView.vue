<template>
  <div style="background-color: aqua">
    <HeaderComponent></HeaderComponent>
    <div style="height: 100%">
      <div>
        <div class="hidden-xs pcAnsicht">
          <div class="hintergrund">
            <div style="background-color: rgba(0,0,0,0.78); height: 100%" class="pt-6">
              <h1 class="text-white d-flex justify-center ">
                Die Geschichte dahinter
              </h1>
              <div class="d-flex justify-center mt-5">
                <p class="text-shades-white text text-center" style="height: 60%; width: 70%">
                  Im Rahmen unseres Studiums sollten wir an einem internetbasierten Projekt arbeiten. Da wir beide
                  Filmfanatiker sind, überlegten wir, wie man Filmerlebnis verbessern könnte und stießen dabei auf die
                  Idee
                  für
                  MyWatchlist. Sie kennen bestimmt auch, dass man beim Browsen durch das Internet oder beim Austauschen
                  mit
                  Freunden
                  und Familie von einem Film hört, der Ihr Interesse weckt und Sie sagen sich „Ja, den schaue
                  ich mir später unbedingt mal an!“. Dann erledigen Sie noch ein paar Sachen, denken nicht mehr
                  großartig
                  darüber
                  nach und am nächsten Tag ist der Film schon wieder in Vergessenheit geraten. Dabei entgeht Ihnen
                  möglicherweise Ihr
                  nächster Lieblingsfilm. Da kommt unsere Idee ins Spiel. MyWatchlist wurde dafür entwickelt, schnell
                  und
                  flexibel Filme, die man noch sehen möchte oder schon gesehen hat, abzuspeichern und zu organisieren,
                  sodass
                  man nie wieder Angst davor haben muss einen Film zu vergessen!

                </p>
              </div>
              <h1 class="text-white d-flex justify-center mt-10">
                Wer wir sind
              </h1>
              <v-row class="text-white d-flex justify-center">
                <v-col sm="1"></v-col>
                <v-col sm="5">
                  <div class="d-flex justify-center">
                    <p class="text text-center">
                      Leandro Graf
                    </p>
                  </div>
                </v-col>
                <v-col sm="5">
                  <div class="justify-center d-flex">
                    <p class="text text-center">
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
                    <p class="text text-center">
                      Ich bin 19 Jahre alt und studiere im ersten Semester am ITC. Als Hauptentwickler von MyWatchlist,
                      bin ich darauf fokussiert, Menschen durch die Verwendung von Technologie näher an Filme heran zu
                      bringen. Ich glaube daran, dass die Verfügbarkeit von Filmen und die Möglichkeiten sie zu
                      entdecken durch moderne Technologie verbessert werden kann. Meine Motivation ist es, diese
                      Möglichkeiten zu nutzen um den Zugang zu Filmen für alle einfacher und angenehmer zu gestalten.
                      <br> <br> <br>
                    </p>
                  </div>
                </v-col>
                <v-col sm="5">
                  <div class="d-flex justify-center">
                    <p class="text text-center">
                      Ich Studiere im ersten Semester am ITC in Dortmund. Als Co-Entwickler von der Webanwendung
                      MyWatchlist, ist es mir eine Herzensangelegenheit, Web-Erlebnisse so einfach wie möglich zu
                      gestalten. Ich glaube an die Macht von simplen und intuitiven Interaktionen und möchte dazu
                      beitragen, dass die Nutzung von Technologie für alle zugänglicher wird.
                    </p>
                  </div>
                </v-col>
                <v-col sm="1"></v-col>
              </v-row>
            </div>
          </div>
        </div>

        <div class="hidden-sm-and-up mobileAnsicht">
          <div class="hintergrund">
            <div style="background-color: rgba(0,0,0,0.78); height: 100%" class="pt-10">
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
                  ich mir später unbedingt mal an!“. Dann erledigen Sie noch ein paar Sachen, denken nicht mehr
                  großartig
                  darüber
                  nach und am nächsten Tag ist der Film schon wieder in Vergessenheit geraten. Dabei entgeht Ihnen
                  möglicherweise Ihr
                  nächster Lieblingsfilm. Da kommt unsere Idee ins Spiel. MyWatchlist wurde dafür entwickelt, schnell
                  und
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
                    Ich bin 19 Jahre alt und studiere im ersten Semester am ITC. Als Hauptentwickler von MyWatchlist,
                    bin ich darauf fokussiert, Menschen durch die Verwendung von Technologie näher an Filme heran zu
                    bringen. Ich glaube daran, dass die Verfügbarkeit von Filmen und die Möglichkeiten sie zu entdecken
                    durch moderne Technologie verbessert werden kann. Meine Motivation ist es, diese Möglichkeiten zu
                    nutzen um den Zugang zu Filmen für alle einfacher und angenehmer zu gestalten.
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
                    Ich studiere im ersten Semester am ITC in Dortmund. Als Co-Entwickler von der Webanwendung
                    MyWatchlist, ist es mir eine Herzensangelegenheit, Web-Erlebnisse so einfach wie möglich zu
                    gestalten. Ich glaube an die Macht von simplen und intuitiven Interaktionen und möchte dazu
                    beitragen, dass die Nutzung von Technologie für alle zugänglicher wird.
                    <br><br>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  data() {
    return {
      name: "Über uns",
    }
  },
  components: {
    HeaderComponent,
  },
  created() {
    this.$store.state.routername = this.name
  }

}
</script>

<style scoped>
.hintergrund {
  /*background-image: url('https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg');*/
  background-image: url('https://wallpapercave.com/wp/wp7046960.jpg');
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