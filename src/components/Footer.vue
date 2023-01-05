<template>
<v-container>
    <v-footer
      class="text-center d-flex flex-column"
    >
      <SocialNetworksBarVue></SocialNetworksBarVue>
  
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
import SocialNetworksBarVue from './SocialNetworksBar.vue';

export default {
  name: 'FooterVue',
  components: {
    SocialNetworksBarVue
  },
  props: {
  },
}
</script>

<style>

</style>