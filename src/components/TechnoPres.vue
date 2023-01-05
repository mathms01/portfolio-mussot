<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h3>CE QUE JE CONNAIS</h3>
                <h2>Mon stack technique privilégié</h2>
            </v-card-title>
            <v-card-text>
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
            </v-card-text>
        </v-card>
        <v-card v-for="item in items" :key="item.title" :value="item.title" v-model="selectedItem">
          <v-toolbar v-if="item === selectedItem">
              <template v-slot:prepend>
                <v-icon>{{item.icon}}</v-icon>
              </template>

              <v-toolbar-title class="text-h6">
                {{item.title}}
              </v-toolbar-title>
  
              <template v-slot:append>
                <v-btn
                @click="close"
                icon="mdi-close-circle"
                >
                </v-btn>
              </template>
          </v-toolbar>
          <v-card-subtitle v-if="item === selectedItem">
            {{item.subtitle}}
          </v-card-subtitle>
          <v-card-text v-if="item === selectedItem">
            {{item.description}}
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
      ],
      selectedIndex: null
    }
  },
  computed: {
    selectedItem() {
      return this.items.find(item => item.title === this.selectedIndex);
    },
  },
  methods:{
    close(){
      this.selectedIndex = null
    }
  }
}
</script>

<style>

</style>