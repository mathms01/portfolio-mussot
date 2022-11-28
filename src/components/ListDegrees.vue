<template>
    <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
          <v-flex v-for="item in items" :key=item.title>
              <v-card >
                  <v-card-title>{{item.title}}</v-card-title>
                  <v-card-subtitle>{{item.description}}</v-card-subtitle>
                  <v-img v-bind:title="item.title" :src=getImagePath(item.image) href="{{item.link}}" height="200px"></v-img>
                  <v-card-text>{{ item.level }} {{ item.city }}</v-card-text>
              </v-card>
          </v-flex>
      </v-layout>
    </v-container>

      <!-- <span class="container" v-for="item in items"
      :key=item.title>
        <img class="frame" :src=getImagePath(item.image) href="#" v-bind:title="item.title"/>
        <div class="center">
          {{ item.title }} {{ item.description }} {{ item.level }} {{ item.city }} {{ item.link }} 
        </div>
    </span> -->
    </div>
</template>

<script>
import degrees from '@/assets/degrees.json';
import shared from '@/utilities/shared.js';

export default {
  name: 'ListDegrees',
  props: {
  },
  data () {
    return {
      items: degrees
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