<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="wallpaper">
      <div style="background-color: rgba(0,0,0,0.11)">
        <div style="height: 83vh" class="hidden-xs">
          <div class="d-flex justify-center">
            <v-form @submit.prevent="regist">
              <v-card class="karte" style="margin-top: 10vh">
                <v-card-title class="d-flex justify-center mt-2">
                  Registrieren
                </v-card-title>
                <v-card-text>
                  <v-text-field v-model="username" label="Benutzername" class="mt-8" variant="solo">
                  </v-text-field>
                  <v-text-field v-model="password" label="Passwort" variant="solo">
                  </v-text-field>
                  <v-text-field v-model="email" required type="email" label="Email Adresse" variant="solo">
                  </v-text-field>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn type="submit" class="bg-grey-lighten-3">
                      Registrieren
                    </v-btn>
                  </v-card-actions>
                  <div class=" justify-center mt-2">
                    <p class="text-center">
                      Sie haben bereits einen Account?
                    </p>
                    <p class="text-center">
                      <router-link to="/login">Dann melden Sie sich jetzt an!</router-link>
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-form>
          </div>
        </div>

        <div style="height: 77vh" class="hidden-sm-and-up">
          <div class="d-flex justify-center">
            <v-form @submit.prevent="regist">
              <v-card class="karteMobile mt-8">
                <v-card-title class="d-flex justify-center mt-2">
                  Registrieren
                </v-card-title>
                <v-card-text class="mt-n5">
                  <v-text-field v-model="username" label="Benutzername" class="mt-8" variant="solo">
                  </v-text-field>
                  <v-text-field v-model="password" label="Passwort" variant="solo">
                  </v-text-field>
                  <v-text-field v-model="email" required type="email" label="Email Adresse" variant="solo">
                  </v-text-field>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn type="submit" class="bg-grey-lighten-3">
                      Registrieren
                    </v-btn>
                  </v-card-actions>
                  <div class=" justify-center mt-2">
                    <p class="text-center">
                      Sie haben bereits einen Account?
                    </p>
                    <p class="text-center">
                      <router-link to="/login">Dann melden Sie sich jetzt an!</router-link>
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "RegistrierenView",
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async regist() {
      const respons = await axios.post('http://leandro-graf.de:8080/auth/regist', {
        email: this.email,
        password: this.password,
        username: this.username
      });
      console.log(respons)
      this.$router.push('/login')
    }
  },
  components: {
    HeaderComponent,
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.$store.state.routername = 'MyWatchlist'
  }
}
</script>

<style scoped>
.karte {
  height: 500px;
  width: 360px;
  background-color: rgba(255, 255, 255, 0.75);
}

.karteMobile {
  height: 430px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.75);
}

.wallpaper {
  background-image: url('../assets/registWallpaper.png');
  background-size: cover;
}
</style>