<template>
  <div class="pcAnsicht hidden-xs">
    <HeaderComponent></HeaderComponent>

    <div class="mainDiv d-flex justify-center">
      <v-card-text>
        <b> Angaben gemäß § 5 TMG</b> <br>
        Rodrigo Galarza <br>
        Leandro Graf <br>
        <br>
        <b>Adresse</b> <br>
        Otto-Hahn-Straße 19 <br>
        44227 Dortmund <br>
        <br>
        <b>Kontakt</b> <br>
        <a class="mailbanner" href="mailto:i.quiroz-galarza@itc-studenten.de?subject=ITC WS 22/23 MyWatchlist: ">i.quiroz-galarza@itc-studenten.de</a><br>
        <a class="mailbanner" href="mailto:leandro.graf@itc-studenten.de?subject=ITC WS 22/23 MyWatchlist: ">leandro.graf@itc-studenten.de</a><br>
        <br>
        <b>Datenschutzrechtliche Bilder</b>
        <br>
        <a target="_blank" href="https://wallpapercave.com/w/wp5556216">www.wallpapercave.com/movies/wallpaper</a>
        <br>
        <a target="_blank" href="https://wallpapercave.com/wp/wp2019621.png">www.wallpapercave.com</a>
        <br>
        <a target="_blank" href="https://www.flaticon.com/de/kostenloses-icon/film_3658959">www.flaticon.com</a>
        <br>
        <a target="_blank"
           href="https://www.turn-on.de/article/dvds-blu-rays-verwalten-ohne-excel-so-gehts-per-app-online-345250?from=https%3A%2F%2Flens.google.com%2F">www.turn-on.de</a>
        <br>
        <br>
        <b>Informationen über die Unternehmensregistrierung </b>
        <br>
        Die EU-Kommission hat eine Internetplattform zur Online-Beilegung <br>
        von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur <br>
        außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus <br>
        Online-Kaufverträgen erwachsen. Sie können die OS-Plattform unter dem folgenden Link erreichen: <br>
        <a target="_blank"
           href="http://ec.euopa.eu/consumers/odr">http://ec.euopa.eu/consumers/odr</a>
        „Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)".
      </v-card-text>
    </div>

  </div>

  <div class="mainDiv mobileAnsicht hidden-sm-and-up">
    <HeaderComponent></HeaderComponent>

    <div class="d-flex justify-center">
      <v-card-text>
        <b> Angaben gemäß § 5 TMG</b> <br>
        Rodrigo Galarza <br>
        Leandro Graf <br>
        <br>
        <b>Adresse</b> <br>
        Otto-Hahn-Straße 19 <br>
        44227 Dortmund <br>
        <br>
        <b>Kontakt</b> <br>
        <a class="mailbanner" href="mailto:i.quiroz-galarza@itc-studenten.de?subject=ITC WS 22/23 MyWatchlist: ">i.quiroz-galarza@itc-studenten.de</a><br>
        <a class="mailbanner" href="mailto:leandro.graf@itc-studenten.de?subject=ITC WS 22/23 MyWatchlist: ">leandro.graf@itc-studenten.de</a><br>
        <br>
        <b>Informationen über die Unternehmensregistrierung </b>
        <br>
        <b>Datenschutzrechtliche Bilder</b>
        <br>
        <a target="_blank" href="https://wallpapercave.com/w/wp5556216">www.wallpapercave.com/movies/wallpaper</a>
        <br>
        <a target="_blank" href="https://wallpapercave.com/wp/wp2019621.png">www.wallpapercave.com</a>
        <br>
        <a target="_blank" href="https://www.flaticon.com/de/kostenloses-icon/film_3658959">www.flaticon.com</a>
        <br>
        <a target="_blank"
           href="https://www.turn-on.de/article/dvds-blu-rays-verwalten-ohne-excel-so-gehts-per-app-online-345250?from=https%3A%2F%2Flens.google.com%2F">www.turn-on.de</a>
        <br>
        <br>
        <b>Informationen über die Unternehmensregistrierung </b>
        <br>
        Die EU-Kommission hat eine Internetplattform zur Online-Beilegung
        von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur <br>
        außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus <br>
        Online-Kaufverträgen erwachsen. Sie können die OS-Plattform unter dem folgenden Link erreichen: <br>
        <a target="_blank"
           href="http://ec.euopa.eu/consumers/odr">http://ec.euopa.eu/consumers/odr</a>
        „Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)".
      </v-card-text>
    </div>

  </div>

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  data() {
    return {
      name: "Impressum"
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
a:link {
  color: black;
  background-color: transparent;
  text-decoration: underline;
}

a:visited {
  color: black;
  background-color: transparent;
  text-decoration: underline;
}

.mainDiv {
  min-height: 80vh;
  background-color: #e8e8e8;
}

.mailbanner {
  color: black;
}
</style>