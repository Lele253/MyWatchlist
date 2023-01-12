<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div class="d-flex justify-center">
      <v-form @submit.prevent="login">
        <v-card class="karte mt-5 ">
          <v-card-title class="d-flex justify-center mt-2">
            Einloggen
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="email" type="email" label="E-Mail Adresse" class="mt-8" variant="solo">
            </v-text-field>
            <v-text-field v-model="password" type="password" label="Passwort" variant="solo">
            </v-text-field>
            <v-card-actions class="d-flex justify-center">
              <v-btn type="submit" class=" bg-grey-lighten-3">
                Log in
              </v-btn>
            </v-card-actions>
          </v-card-text>
          <v-banner-text class="d-flex justify-center" style="cursor: pointer" @click="$router.push('/registrieren')">
            <u> Sie haben noch kein Account? <br/>
              Dann registrieren Sie sich jetzt! </u>
          </v-banner-text>
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
  name: "LogInView",
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      email: '',
      password: ''
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

}
</script>

<style scoped>
.karte {
  height: 500px;
  width: 360px;
}
</style>