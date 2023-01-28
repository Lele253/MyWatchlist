<template>
  <div class="header">
    <v-row class="pr-0 mr-0">
      <v-col class="col d-flex align-center " sm="4" md="2">
        <Icon @click="drawer=!drawer" class="icon ml-2" icon="icon-park:hamburger-button"/>
      </v-col>
      <v-navigation-drawer style="background-color: aqua" absolute temporary v-model="drawer">


        <v-list>
          <v-list-item style="background-color: #00bbff" class="d-flex justify-center">
            <p style="font-size: 20px" v-if="user">
              {{ user.username }}
            </p>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="d-flex align-center" style="height: 80px" v-for="i in list" :key="i" link
                       @click="$router.push(i.path)">
            <v-row>
              <v-col cols="1">
                <Icon style="font-size: 30px" :icon="i.icon"/>
              </v-col>
              <v-col cols="9">
                <p class="ml-2" style="font-size: 20px">
                  {{ i.name }}
                </p></v-col>
            </v-row>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>


      </v-navigation-drawer>
      <v-col class="d-flex justify-center align-center" sm="4" md="8">
        <h1 class="hidden-xs pc" style="cursor: pointer" @click="$router.push('/')">
          {{ $store.state.routername }}
        </h1>
        <h1 class="hidden-sm-and-up mobile" style="cursor: pointer; font-size: 27px" @click="$router.push('/')">
          {{ $store.state.routername }}
        </h1>
      </v-col>
      <v-col class="d-flex align-center justify-end" sm="4" md="2">
        <Icon style="cursor: pointer" @click="$router.push('/login')" v-if="!user" class="mr-2 icon"
              icon="mdi:person-circle"/>
        <Icon style="cursor: pointer" @click="logout" v-if="user" class="mr-2 icon" icon="mdi:emergency-exit"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue';
import {mapGetters} from "vuex";

export default {

  name: "HeaderComponent",

  components: {
    Icon,
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push("/login")
    }
  },
  data() {
    return {
      list: [
        {name1: 'Welcome to MyWatchlist', icon: 'ic:baseline-home', name: 'Home', path: '/'},
        {name1: 'Filme', name: 'Filme', icon: 'mdi:movie-open', path: '/liste'},
        {name1: 'Über Uns', name: 'Über Uns', icon: 'material-symbols:emoji-people', path: '/aboutUs'},
        {name1: 'Impressum', name: 'Impressum', icon: 'material-symbols:text-snippet', path: '/impressum'},
      ],
      drawer: false
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
}
</script>

<style scoped>
.col {
  height: 120px;
}

.icon {
  font-size: 40px;
  margin-left: 10px;
}

.header {
  background-color: aqua;
  height: 120px;
}
</style>