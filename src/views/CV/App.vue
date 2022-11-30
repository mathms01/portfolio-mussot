<template>
<h1>Mon CV</h1>
  <v-container  class="fill-height" fluid>
      <v-row>
        <v-col cols="2">

        </v-col>
        <v-col cols="8">
          <v-sheet>
            <v-img
            :aspect-ratio="1"
            :src=sourceCvJpg
            />
          </v-sheet>
        </v-col>
        <v-col cols="2">
          <v-btn
            class="vert-text-btn"
            color="primary"
            href='../../assets/cvFreelance.pdf'
            download
          >
            Télécharger
          </v-btn>
        </v-col>
      </v-row>
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

.vert-text-btn {
  display: block;
  transform: rotate(90deg);

  border-width: 5px;
}
</style>
