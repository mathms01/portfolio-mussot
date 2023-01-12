<template>
    <v-carousel show-arrows="hover" hide-delimiters
      progress="primary" cycle height="300">
        <v-carousel-item
          v-for="item in items"
          :key="item.title"
          :src=getImagePath(item.image)
          cover
        >
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2 title-carroussel">
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
.title-carroussel{
  text-shadow: 0 0 3px #ff00ea, 0 0 5px #460039;
}
</style>