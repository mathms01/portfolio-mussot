<template>
  <v-app>
    <v-app-bar>
      <h2 class="title">MATHIEU MUSSOT</h2>

      <v-spacer></v-spacer>

      <v-btn
        icon="mdi-menu"
        @click.stop="showNav = !showNav"
      ></v-btn>
    </v-app-bar>

    <v-main>
      <NavigationBar v-if="showNav" />
      <router-view/>
    </v-main>
    <v-footer absolute app>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    Footer
  },
  data(){
    return {
      showNav: false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;

}

.title{
  margin-left: 30px;
  font-family: Pacifico, Avenir, Arial, sans-serif;
  color: violet;
  text-shadow: 0 0 3px #ff00ea, 0 0 5px #460039;
}
</style>
