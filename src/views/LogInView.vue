<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="wallpaper">
      <div class="ansichtPC hidden-xs" style="background-color: rgba(0,0,0,0.11)">
        <div class="d-flex justify-center">
          <div style="height: 83vh">
            <v-form @submit.prevent="login">
              <v-card class="karte" style="margin-top: 10vh">
                <v-card-title class="d-flex justify-center mt-2">
                  Anmelden
                </v-card-title>
                <v-card-text>
                  <v-text-field v-model="email" required type="email" label="E-Mail Adresse" class="mt-8"
                                variant="solo">
                  </v-text-field>
                  <v-text-field v-model="password" type="password" label="Passwort" variant="solo">
                  </v-text-field>
                  <v-card-actions class="d-flex justify-center">
                    <template class="AnmeldedatenFalsch">
                      <v-dialog
                          v-model="dialog"
                          max-width="290">
                        <v-card>
                          <v-card-title class="text-h5">
                            Warnung
                          </v-card-title>
                          <v-card-text>
                            Email-Adresse oder Passwort falsch.
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false">
                              Okay
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </template>

                    <v-btn type="submit" class=" bg-grey-lighten-3">
                      Einloggen
                    </v-btn>
                  </v-card-actions>
                </v-card-text>
                <div class=" justify-center">
                  <p class="text-center">
                    Sie haben noch kein Account?
                  </p>
                  <p class="text-center">
                    <router-link to="/registrieren">Dann registrieren Sie sich jetzt!</router-link>
                  </p>
                </div>
              </v-card>
            </v-form>
          </div>
        </div>
      </div>


      <div class="ansichtMobile hidden-sm-and-up" style="background-color: rgba(0,0,0,0.11); height: 77vh">
        <div class="d-flex justify-center">
          <div>
            <v-form @submit.prevent="login">
              <v-card class="karteMobile mt-10">
                <v-card-title class="d-flex justify-center mt-2">
                  Anmelden
                </v-card-title>
                <v-card-text>
                  <v-text-field v-model="email" required type="email" label="E-Mail Adresse" class="mt-8"
                                variant="solo">
                  </v-text-field>
                  <v-text-field v-model="password" type="password" label="Passwort" variant="solo">
                  </v-text-field>
                  <v-card-actions class="d-flex justify-center">
                    <template class="AnmeldedatenFalsch">
                      <v-dialog
                          v-model="dialog"
                          max-width="290">
                        <v-card>
                          <v-card-title class="text-h5">
                            Warnung
                          </v-card-title>
                          <v-card-text>
                            Email-Adresse oder Passwort falsch.
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false">
                              Okay
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </template>
                    <v-btn type="submit" class=" bg-grey-lighten-3">
                      Einloggen
                    </v-btn>
                  </v-card-actions>
                </v-card-text>
                <div class=" justify-center">
                  <p class="text-center">
                    Sie haben noch kein Account?
                  </p>
                  <p class="text-center">
                    <router-link to="/registrieren">Dann registrieren Sie sich jetzt!</router-link>
                  </p>

                </div>
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
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      dialog: false,
      email: '',
      password: '',
      name: "Einloggen",
      error: "",
    }
  },
  components: {
    HeaderComponent,
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://leandro-graf.de:8080/auth/login',
            {
              email: this.email,
              password: this.password
            });
        localStorage.setItem('token', response.data)
        await this.$store.dispatch('user', response.data.user)
        await this.$router.push('/')
        location.reload()
      } catch (error) {
        this.error = error
        console.log(error);
        this.dialog = true;
      }
    }
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
  height: 400px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.75);
}

.wallpaper {
  background-image: url('../assets/registWallpaper.png');
  background-size: cover;
}
</style>