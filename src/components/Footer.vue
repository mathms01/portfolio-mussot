<template>
<v-container>
    <v-footer
      class="text-center d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
  
      <div class="pt-0">
        Portfolio.github.pages est le portfolio de présentation de <b>Mathieu Mussot</b>. Accédez à mes projets, mes expériences, mes skills, mes diplômes, mon activité freelance, mes prestations...
        N'hésitez pas à me contacter dans la partie <b>About</b> pour plus d'informations.
      </div>
  
      <v-divider></v-divider>
  
      <div>
        &copy; {{ new Date().getFullYear() }} — <strong>Mathieu Mussot</strong>
      </div>
    </v-footer>
</v-container>
</template>

<script>
export default {
  name: 'FooterVue',
  props: {
  },
  data () {
    return {
      icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    }
  }
}
</script>

<style>

</style>