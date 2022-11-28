<template>
  <div id="nav" class="navigation">
      <v-app-bar-nav-icon @click.stop="showNav = !showNav"></v-app-bar-nav-icon>
      <div v-if="showNav">
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title><router-link to="/home">Home</router-link></v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title><router-link to="/cv">CV</router-link></v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title><router-link to="/portfolio">Portfolio</router-link></v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title><router-link to="/freelance">Freelance</router-link></v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title><router-link to="/qualifications">Qualifications</router-link></v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    
  },
  data(){
    return {
      showNav: false
    }
  }
}
</script>

<style>
  .navigation {
    width: 100vw;
    min-height: 100vh;
    padding: 16px;
    position: fixed;
    right: 40%;
  }

</style>