<template>
<div class="banner">
  <div class="child-items">
    <HomePres class="pres"/>
  </div>
  <div class="child-items">
  <CarrousselProjects class="carroussel"/>
  </div>
</div>
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
  margin-top: 60px;
}

.child-items {
    display: inline-block;
    vertical-align: middle;
    margin: auto;
}

.pres {
  background-color: aqua;
}

.carroussel {
  background-color:aquamarine;
}

.banner {
  background-image: url(https://dge4uaysoh8oy.cloudfront.net/lp/creatopy/624/images/1630069165764_CTA---Blueberry---5.jpg);
  background-size:cover;
  height: 500px;
}

</style>
