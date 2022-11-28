<template>
    <section>
        <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://avatars.dicebear.com/api/miniavs/mms01.svg?hair=classic01&hairColor=black"
        height="200px"
      ></v-img>
  
      <v-card-title>
        Mathieu Mussot
      </v-card-title>
  
      <v-card-subtitle>
        Développeur Freelance
      </v-card-subtitle>

      <v-spacer></v-spacer>
      
      <v-btn
          color="orange lighten-2"
          to="/about"
        >
            Me contacter
        </v-btn>

      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          Plus
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Portfolio d'un développeur fullstack
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    </section>
</template>

<script>
export default {
  name: 'HomePres',
  props: {
  },
  data :() =>({
    show:false,
  }),
}
</script>

<style>
.fit-picture {
    width: 100px;
}
</style>