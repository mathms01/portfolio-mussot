<template>
<v-container fluid class="fill-height banner">
  <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="3">
      <HomePres/>
    </v-col>
    <v-col cols="1"></v-col>
    <v-col cols="7">
      <CarrousselProjects/>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import HomePres from '@/components/HomePres.vue';
import CarrousselProjects from '@/components/CarrousselProjects.vue';

export default {
  name: 'App',
  components: {
    HomePres,
    CarrousselProjects
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
  width: 100%;
}

.banner {
  background-image: url(https://dge4uaysoh8oy.cloudfront.net/lp/creatopy/624/images/1630069165764_CTA---Blueberry---5.jpg);
  background-size:cover;
  height: 500px;
}

</style>
