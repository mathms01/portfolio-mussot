<template>
  <v-navigation-drawer
      floating
      permanent
    >
    <v-list
    density="compact"
    nav
    >
        <v-list-item to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/portfolio-mussot/cv">
          <v-list-item-title>CV</v-list-item-title>
        </v-list-item>

        <v-list-item to="/portfolio-mussot/portfolio">
          <v-list-item-title>Portfolio</v-list-item-title>
        </v-list-item>

        <v-list-item to="/portfolio-mussot/freelance">
          <v-list-item-title>Freelance</v-list-item-title>
        </v-list-item>

        <v-list-item to="/portfolio-mussot/qualifications">
          <v-list-item-title>Qualifications</v-list-item-title>
        </v-list-item>

        <v-list-item to="/portfolio-mussot/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    
  }
}
</script>

<style>

</style>