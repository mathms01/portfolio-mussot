<template>
    <section>
    <v-card
      class="mx-auto"
      width="250"
      variant="plain"
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
          color="primary"
          to="/about"
          class="space-around-min"
        >
            Me contacter
        </v-btn>
    </v-card>
    </section>
</template>

<script>
export default {
  name: 'HomePres',
  props: {
  },
}
</script>

<style scoped>
@import '@/scss/global.css';
.fit-picture {
    width: 100px;
}
</style>