<template>
    <v-carousel hide-delimiters height="300">
        <v-carousel-item
          v-for="item in items"
          :key="item.title"
          :src=getImagePath(item.image)
          cover
        >
          <!-- <v-img :src=getImagePath(item.image) height="100%" cover/> -->
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                {{item.title}}
              </div>
            </div>
        </v-carousel-item>
      </v-carousel>
</template>

<script>
import projects from '@/assets/projects.json';
import shared from '@/utilities/shared.js';

export default {
  name: 'CarrousselProjects',
  components: {  },
  props: {
  },
  data () {
    return {
      items: projects
    }
  },
  methods :{
    getImagePath(img) {
    return shared.getImagePath(img)
    }
  }
}
</script>

<style>

</style>