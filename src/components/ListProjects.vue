<template>
    <div>
      <v-container fluid grid-list-md>
      <v-layout row wrap>
          <v-flex v-for="item in items" :key=item.title>
              <v-card >
                  <v-card-title>{{item.title}}</v-card-title>
                  <v-card-subtitle>{{item.description}}</v-card-subtitle>
                  <v-img v-bind:title="item.title" :src=getImagePath(item.image) href="{{item.link}}" height="200px"></v-img>
              </v-card>
          </v-flex>
      </v-layout>
    </v-container>

      <!-- <span class="container" v-for="item in items"
      :key=item.title>
        <img class="frame" :src=getImagePath(item.image) href="#" v-bind:title="item.title"/>
        <div class="center">
          {{ item.title }} {{ item.description }} {{ item.link }} 
        </div>
    </span> -->
    </div>
</template>

<script>
import projects from '@/assets/projects.json';
import shared from '@/utilities/shared.js';

export default {
  name: 'ListProjects',
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
.frame {
  margin: auto;
  padding: 15px 25px;
  max-width: 400px;
  max-height: 300px;
}

.container{
  position: relative;
  text-align: center;
  color: black;
}

.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>