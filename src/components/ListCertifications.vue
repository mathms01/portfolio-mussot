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
import certifications from '@/assets/certifications.json';
import shared from '@/utilities/shared.js';

export default {
  name: 'ListCertifications',
  props: {
  },
  data () {
    return {
      items: certifications
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