<template>
  <h1>Portofolio</h1>
  <ListProjects msg="Projects"/>
</template>

<script>
import ListProjects from '../../components/ListProjects.vue'

export default {
  name: 'App',
  components: {
    ListProjects
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
