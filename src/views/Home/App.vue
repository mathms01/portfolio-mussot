<template>
  <v-container>
    <v-parallax
      dark
      :src="getImagePath('Leaf_banner.jpg')"
      class="v-parallax__image"
    >
    </v-parallax>
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
<v-container fluid class="fill-height">
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
</template>

<script>
import HomePres from '@/components/HomePres.vue';
import CarrousselProjects from '@/components/CarrousselProjects.vue';
import FreelancePresVue from '@/components/FreelancePres.vue';
import PrestaPresVue from '@/components/PrestaPres.vue';
import TechnoPresVue from '@/components/TechnoPres.vue';
import shared from '@/utilities/shared';

export default {
  name: 'App',
  components: {
    HomePres,
    CarrousselProjects,
    FreelancePresVue,
    PrestaPresVue,
    TechnoPresVue
  },
  methods :{
    getImagePath(img) {
    return shared.getImagePath(img)
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
  width: 100%;
}

.banner {
  background-size:cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.v-parallax__image {
  transform: scale(1.6) !important;
  width: 100% !important;
  height: 20% !important;
  position: absolute;
}

</style>
