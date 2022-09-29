<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/cv">CV</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
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