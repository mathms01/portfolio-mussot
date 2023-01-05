<template>
    <v-container>
        <v-card>
          <v-card-title>
            <h3>VOTRE FUTUR SITE OU APPLICATION SUR-MESURE !</h3>
            <h2>Freelance Développement Full Stack</h2>
          </v-card-title>
          <v-card-text>
              <v-row class="space-around">
                Nous vous accompagnons pour coordonner et superviser les différentes phases de vos projets informatiques de la conception à la maintenance en passant par la réalisation et le déploiement : Mon but est de transformer vos idées en outils pour répondre à vos besoins métiers. Contactez moi pour plus d'informations !
              </v-row>
              <v-row class="space-around">
                <v-divider></v-divider>
              </v-row>
              <v-row justify="space-around">
                <v-col class="d-flex justify-center align-center">
                  <v-card
                    :rounded=true
                    class="align-center"
                    height="150"
                    width="150"
                  >
                    <v-card-title>
                      <v-icon color="primary">mdi-rocket-launch</v-icon>
                    </v-card-title>
                    <v-card-text>
                      <h2>72</h2>
                      <h3>projets finis</h3>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <v-card
                    :rounded=true
                    class="align-center"
                    height="150"
                    width="150"
                  >
                    <v-card-title>
                      <v-icon color="primary">mdi-coffee</v-icon>
                    </v-card-title>

                    <v-card-text>
                      <h2>692</h2>
                      <h3>tasses de thé bues</h3>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <v-card
                    :rounded=true
                    class="align-center"
                    height="150"
                    width="150"
                  >
                    <v-card-title>
                      <v-icon color="primary">mdi-briefcase</v-icon>
                    </v-card-title>

                    <v-card-text>
                      <h2>4</h2>
                      <h3>années d' expérience</h3>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <v-card
                    :rounded=true
                    class="align-center"
                    height="150"
                    width="150"
                  >
                    <v-card-title>
                      <v-icon color="primary">mdi-emoticon-tongue</v-icon>
                    </v-card-title>

                    <v-card-text>
                      <h2>56</h2>
                      <h3>clients conquis</h3>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
          </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'FreelancePres',
  props: {
  }
}
</script>

<style>

</style>