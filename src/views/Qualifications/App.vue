<template>
<h1>Qualifications</h1>
<h2>Diplômes</h2>
<ListDegrees></ListDegrees>
<h2>Certifications</h2>
<ListCertifications></ListCertifications>
</template>

<script>

import ListDegrees from "@/components/ListDegrees.vue";
import ListCertifications from "@/components/ListCertifications.vue";

export default {
  name: 'App',
  components: {
    ListDegrees,
    ListCertifications
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
</style>
