<template>
  <div class="header">
    <v-row>
      <v-col class="col d-flex align-center " cols="4">
        <Icon @click="drawer=!drawer" class="icon ml-2" icon="icon-park:hamburger-button"/>
      </v-col>
      <v-navigation-drawer absolute temporary v-model="drawer">

      </v-navigation-drawer>
      <v-col class="d-flex justify-center align-center" cols="4">
        <h1 style="cursor: pointer" @click="$router.push('/')">
          MyWatchlist
        </h1>
      </v-col>
      <v-col class="d-flex align-center justify-end" cols="4">
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
    }
  },
  data() {
    return {

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