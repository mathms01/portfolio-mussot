<template>
<v-container>
  <h1>Freelance</h1>
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
import FreelancePresVue from '@/components/FreelancePres.vue';
import PrestaPresVue from '@/components/PrestaPres.vue'
import TechnoPresVue from '@/components/TechnoPres.vue';

export default {
  name: 'App',
  components: {
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
  margin-top: 60px;
  width: 1000px;
}
</style>
