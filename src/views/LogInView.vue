<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div class="d-flex justify-center">
      <v-form @submit.prevent="login">
        <v-card class="karte" style="margin-top: 10vh">
          <v-card-title class="d-flex justify-center mt-2">
            Anmelden
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="email" required type="email" label="E-Mail Adresse" class="mt-8" variant="solo">
            </v-text-field>
            <v-text-field v-model="password" type="password" label="Passwort" variant="solo">
            </v-text-field>
            <v-card-actions class="d-flex justify-center">
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
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import axios from "axios";
import {mapGetters} from "vuex";
import FooterComponent from "@/components/FooterComponent";

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      email: '',
      password: '',
      name: "Einloggen",
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    async login() {
      const response = await axios.post('http://localhost:8080/auth/login',
          {
            email: this.email,
            password: this.password
          });
      localStorage.setItem('token', response.data)
      await this.$store.dispatch('user', response.data.user)
      await this.$router.push('/')
      location.reload()
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
}
</style>