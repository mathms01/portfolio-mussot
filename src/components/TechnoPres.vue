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
                <v-sheet
                  :rounded=true
                  :elevation=6
                  class="align-center"
                  height="100"
                  width="100"
                >
                  <v-btn
                    icon="mdi-dot-net"
                  ></v-btn>
                  <h2>.NET</h2>
                </v-sheet>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-sheet
                  :rounded=true
                  :elevation=6
                  class="align-center"
                  height="100"
                  width="100"
                >
                  <v-btn
                    icon="mdi-vuejs"
                  ></v-btn>
                  <h2>VUE js</h2>
                </v-sheet>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-sheet
                  :rounded=true
                  :elevation=6
                  class="align-center"
                  height="100"
                  width="100"
                >
                  <v-btn
                    icon="mdi-leaf"
                  ></v-btn>
                  <h2>MongoDB</h2>
                </v-sheet>
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col class="d-flex justify-center align-center">
                <v-sheet
                  :rounded=true
                  :elevation=6
                  class="align-center"
                  height="100"
                  width="100"
                >
                  <v-btn
                    icon="mdi-microsoft-azure"
                  ></v-btn>
                  <h2>Azure Cloud</h2>
                </v-sheet>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-sheet
                  :rounded=true
                  :elevation=6
                  class="align-center"
                  height="100"
                  width="100"
                >
                  <v-btn
                    icon="mdi-microsoft-azure-devops"
                  ></v-btn> 
                  <h2>Azure Devops</h2>
                </v-sheet>
              </v-col>
              <v-col class="d-flex justify-center align-center">
                <v-sheet
                  :rounded=true
                  :elevation=6
                  class="align-center"
                  height="100"
                  width="100"
                >
                  <v-btn
                    icon="mdi-docker"
                  ></v-btn> 
                  <h2>Docker</h2>
                </v-sheet>
              </v-col>
            </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'TechnoPres',
  props: {
  }
}
</script>

<style>

</style>