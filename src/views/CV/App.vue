<template>
<h1>Mon CV</h1>
  <v-container fluid>
    <v-sheet>
      <v-img
      :aspect-ratio="1"
      :src=sourceCvJpg
      />
    </v-sheet>
    <v-btn
      color="primary"
      href='../../assets/cvFreelance.pdf'
      class="spacebetween"
      download
      >
        Télécharger
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  },
  data(){
    return {
      sourceCvJpg: require('../../assets/cvFreelance.jpg'),
    }
  }
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
}

.spacebetween{
  margin-top: 10px;
}
</style>
