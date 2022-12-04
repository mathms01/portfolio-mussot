<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      >Toggle Theme</v-btn>
    </v-app-bar>

    <v-main>
      <NavigationBar/>
      <router-view/>
    </v-main>
    <v-footer>
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
}
</script>

<style>
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


</style>
