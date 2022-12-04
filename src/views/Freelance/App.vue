<template>
<h1>Freelance</h1>
<FreelancePresVue></FreelancePresVue>
<PrestaPresVue></PrestaPresVue>
<TechnoPresVue></TechnoPresVue>

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
