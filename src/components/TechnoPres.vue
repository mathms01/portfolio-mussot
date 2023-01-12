<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h3>CE QUE JE CONNAIS</h3>
                <h2>Mon stack technique privilégié</h2>
            </v-card-title>
            <!-- <v-card-text>
              <v-row class="space-around">
                <v-divider></v-divider>
              </v-row>
              <v-row justify="space-around">
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-dot-net"
                  color="primary"
                  @click="selectedIndex = '.NET'"
                ></v-btn>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                  <v-btn
                    size="x-large"
                    icon="mdi-vuejs"
                    color="primary"
                    @click="selectedIndex = 'VUE'"
                  ></v-btn>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-leaf"
                  color="primary"
                  @click="selectedIndex = 'MongoDB'"
                ></v-btn>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-microsoft-azure"
                  color="primary"
                  @click="selectedIndex = 'Azure'"
                ></v-btn>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-microsoft-azure-devops"
                  color="primary"
                  @click="selectedIndex = 'Azure Devops'"
                ></v-btn> 
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-docker"
                  color="primary"
                  @click="selectedIndex = 'Docker'"
                ></v-btn> 
              </v-col>
            </v-row>
            </v-card-text> -->
        <v-card-text>
          <v-card v-for="(item, index) in items" :key="item.title" :value="item.title" class="space-around-min">
            <v-row>
              <v-col v-if="index % 2 === 0" cols="1">
              </v-col>
              <v-col class="d-flex justify-center align-center" cols="2">
                <v-icon size="x-large" class="outlined" color="primary">
                  {{item.icon}}
                </v-icon>
              </v-col>
              <v-col cols="1" class="d-flex justify-center align-center">
                  <v-divider vertical inset></v-divider>
              </v-col>
              <v-col :cols="index % 2 === 0 ? 8 : 9">
                <v-card-title class="text-h6 text-left">
                  <v-row>
                    <v-col cols="2">
                      <span>{{item.title}}</span>
                    </v-col>
                    <v-col cols="10">
                      <v-spacer></v-spacer>
                    </v-col>
                    <!-- <v-col cols="1">
                      <v-btn
                      @click="close"
                      icon="mdi-close-circle"
                      color="primary"
                      size="30"
                      >
                      </v-btn>
                    </v-col> -->
                  </v-row>
              </v-card-title>
              <v-card-subtitle class="text-left">
                {{item.subtitle}}
              </v-card-subtitle>
              <v-card-text class="text-left">
                {{item.description}}
              </v-card-text>
              </v-col>
            </v-row>
            <v-row>
              <v-divider></v-divider>
            </v-row>
          </v-card>
        </v-card-text>
      </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'TechnoPres',
  props: {
  },
  data () {
    return {
      items: [
        {
          "title": ".NET",
          "subtitle": "Plateforme de développement de Microsoft pour la création d'applications",
          "description": "Développement d'interface Web, d'API et d'applications SaaS en micro-services (Dotnet 6/7, Blazor, ASP Core...)",
          "icon": "mdi-dot-net"
        },
        {
          "title": "VUE",
          "subtitle": "Framework JavaScript open-source",
          "description": "Développement de sites internet vitrines et marchands (VueJS, Vuetify...)",
          "icon": "mdi-vuejs"
        },
        {
          "title": "MongoDB",
          "subtitle": "Système de gestion de base de données orienté documents",
          "description": "Déploiement et administration de bases de données NoSql (MongoDB, CosmoDB...)",
          "icon": "mdi-leaf"
        },
        {
          "title": "Azure",
          "subtitle": "Plate-forme applicative Cloud de Microsoft",
          "description": "Conception, déploiement et administration de services applicatifs Cloud sur l'environnement Azure",
          "icon": "mdi-microsoft-azure"
        },
        {
          "title": "Azure Devops",
          "subtitle": "Mouvement d'unification des développements logiciels et des infrastructures",
          "description": "Automatisation et déploiement de processus pour l'intégration en continue du code (Github Action, Azure DevOps...)",
          "icon": "mdi-microsoft-azure-devops"
        },
        {
          "title": "Docker",
          "subtitle": "Plateforme de conteneurisation des applications",
          "description": "Déploiement et administration d'images et de conteneurs Docker",
          "icon": "mdi-docker"
        },
      ]
    }
  },
}
</script>

<style scoped>
@import '@/scss/global.css';
</style>