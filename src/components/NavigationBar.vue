<template>
  <div>
      <v-btn
        icon="mdi-menu"
        @click.stop="showNav = !showNav"
      ></v-btn>
      <v-navigation-drawer
          v-model="showNav"
          temporary
        >
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
      </v-navigation-drawer>
  </div>
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

</style>