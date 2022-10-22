<template>
  <div id="nav" class="navigation">
    <ul>
      <li @click="showNav=!showNav"><font-awesome-icon icon="fa-solid fa-bars" /></li>
      <div v-if="showNav">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/cv">CV</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/freelance">Freelance</router-link></li>
      <li><router-link to="/qualifications">Qualifications</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      </div>
    </ul>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    
  },
  data(){
    return {
      showNav: false
    }
  }
}
</script>

<style>
  .navigation {
    width: 100vw;
    min-height: 100vh;
    padding: 16px;
    position: fixed;
    right: 40%;
  }
  .navigation ul {
    list-style: none;
  }
  .navigation ul li {
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  .navigation ul a {
    color: grey;
    text-decoration: none;
  }
  .navigation ul a:hover, .navigation ul a.router-link-exact-active {
    text-decoration: underline;
  }
</style>