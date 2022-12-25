<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h3>CE QUE JE CONNAIS</h3>
                <h2>Mon stack technique privilégié</h2>
            </v-card-title>
            <v-card-text>
                <v-divider></v-divider>
                <v-row justify="space-around">
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-dot-net"
                  @click="selectedIndex = '.NET'"
                ></v-btn>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                  <v-btn
                    size="x-large"
                    icon="mdi-vuejs"
                    @click="selectedIndex = 'VUE'"
                  ></v-btn>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-leaf"
                  @click="selectedIndex = 'MongoDB'"
                ></v-btn>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-microsoft-azure"
                  @click="selectedIndex = 'Azure'"
                ></v-btn>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-microsoft-azure-devops"
                  @click="selectedIndex = 'Azure Devops'"
                ></v-btn> 
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-btn
                  size="x-large"
                  icon="mdi-docker"
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
          "subtitle": "Test",
          "description": "Test",
          "icon": "mdi-dot-net"
        },
        {
          "title": "VUE",
          "subtitle": "Test",
          "description": "Test",
          "icon": "mdi-vuejs"
        },
        {
          "title": "MongoDB",
          "subtitle": "Test",
          "description": "Test",
          "icon": "mdi-leaf"
        },
        {
          "title": "Azure",
          "subtitle": "Test",
          "description": "Test",
          "icon": "mdi-microsoft-azure"
        },
        {
          "title": "Azure Devops",
          "subtitle": "Test",
          "description": "Test",
          "icon": "mdi-microsoft-azure-devops"
        },
        {
          "title": "Docker",
          "subtitle": "Test",
          "description": "Test",
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