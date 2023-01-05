<template>
<v-container fluid class="fill-height">
  <v-container class="banner">
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
  <v-container>
    <v-row>
      <FreelancePresVue></FreelancePresVue>
    </v-row>
    <v-row>
      <PrestaPresVue></PrestaPresVue>
    </v-row>
    <v-row>
      <TechnoPresVue></TechnoPresVue>
    </v-row>
  </v-container>
</v-container>
</template>

<script>
import HomePres from '@/components/HomePres.vue';
import CarrousselProjects from '@/components/CarrousselProjects.vue';
import FreelancePresVue from '@/components/FreelancePres.vue';
import PrestaPresVue from '@/components/PrestaPres.vue';
import TechnoPresVue from '@/components/TechnoPres.vue';

export default {
  name: 'App',
  components: {
    HomePres,
    CarrousselProjects,
    FreelancePresVue,
    PrestaPresVue,
    TechnoPresVue
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
