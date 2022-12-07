<template>
    <div>
    <v-container>
      <v-row>
        <v-col
        class="d-flex child-flex"
        v-for="item in items" 
        :key=item.title
        cols="4">
          <v-card width="100%">
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-subtitle>{{item.description}}</v-card-subtitle>
            <v-img v-bind:title="item.title" :src=getImagePath(item.image) href="{{item.link}}" aspect-ratio="1" cover>
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          <v-card-text>{{ item.level }} {{ item.city }}</v-card-text>
      </v-card>
        </v-col>
      </v-row>
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