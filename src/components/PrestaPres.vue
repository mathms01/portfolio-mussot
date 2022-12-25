<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h3>CE QUE JE FAIS</h3>
                <h2>Les différentes prestations possibles</h2>
            </v-card-title>
            <v-card-text>
              <v-divider></v-divider>
              <v-row justify="space-around">
                <v-col class="d-flex justify-center align-center" v-for="item in items" :key="item.title">
                  <v-sheet
                    rounded="xl"
                    :elevation=6
                    class="align-center"
                    height="100"
                    width="200"
                  >
                    <v-btn
                      size="x-large"
                      :icon="item.icon"
                      @click="selectedIndex = item.title"
                    ></v-btn>
                    <h2>{{ item.title }}</h2>
                  </v-sheet>
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
  name: 'PrestaPres',
  props: {
  },
  data () {
    return {
      items: [
        {
          "title": "Site vitrine",
          "icon": "mdi-laptop",
          "price": "1000€",
          "description": "Test",
        },
        {
          "title": "Site marchand",
          "icon": "mdi-store",
          "price": "2500€",
          "description": "Test",
        },
        {
          "title": "Application",
          "icon": "mdi-application",
          "price": "5000€",
          "description": "Test",
        },
        {
          "title": "Maintenance",
          "icon": "mdi-hammer-screwdriver",
          "price": "350€/TJM",
          "description": "Test",
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