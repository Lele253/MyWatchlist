<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
    <div class="d-flex justify-center">
      <v-form @submit.prevent="regist">
        <v-card class="karte mt-5 ">
          <v-card-title class="d-flex justify-center mt-2">
            Registrieren
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="username" label="Benutzername" class="mt-8" variant="solo">
            </v-text-field>
            <v-text-field v-model="password" label="Passwort" variant="solo">
            </v-text-field>
            <v-text-field v-model="email" label="Email Adresse" variant="solo">
            </v-text-field>
            <v-card-actions class="d-flex justify-center">
              <v-btn type="submit" class="bg-grey-lighten-3">
                Registrieren
              </v-btn>
            </v-card-actions>
          </v-card-text>
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
      const respons = await axios.post('http://localhost:8080/auth/Regist', {
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
    FooterComponent
  },
  computed: {
    ...mapGetters(['user'])
  },

}
</script>

<style scoped>
.karte {
  height: 500px;
  width: 360px;
}
</style>