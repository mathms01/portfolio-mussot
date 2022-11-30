<template>
  <div class="navigation">
      <v-app-bar-nav-icon @click.stop="showNav = !showNav"></v-app-bar-nav-icon>
      <v-card
      class="mx-auto"
      max-width="150"
      v-if="showNav">
        <v-list
        density="compact"
        >
            <v-list-item to="/home">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
  
            <v-list-item to="/cv">
              <v-list-item-title>CV</v-list-item-title>
            </v-list-item>
  
            <v-list-item to="/portfolio">
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item>
  
            <v-list-item to="/freelance">
              <v-list-item-title>Freelance</v-list-item-title>
            </v-list-item>

            <v-list-item to="/qualifications">
              <v-list-item-title>Qualifications</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-card>
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