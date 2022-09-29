<template>
    <Splide :options="{ rewind: true }" aria-label="Mes projects">
        <SplideSlide v-for="item in items"
      :key=item.title>
        <img :src="item.link" :alt="item.title">
        </SplideSlide>
    </Splide>
</template>

<script>
import projects from '@/assets/projects.json';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: 'CarrousselProjects',
  components: { Splide, SplideSlide },
  props: {
  },
  data () {
    return {
      items: projects
    }
  }
}
</script>

<style>

</style>