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
                  <v-icon
                    size="x-large"
                    icon="mdi-dot-net"
                  ></v-icon>
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
                  <v-icon
                    size="x-large"
                    icon="mdi-vuejs"
                  ></v-icon>
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
                  <v-icon
                    size="x-large"
                    icon="mdi-leaf"
                  ></v-icon>
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
                  <v-icon
                    size="x-large"
                    icon="mdi-microsoft-azure"
                  ></v-icon>
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
                  <v-icon
                    size="x-large"
                    icon="mdi-microsoft-azure-devops"
                  ></v-icon> 
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
                  <v-icon
                    size="x-large"
                    icon="mdi-docker"
                  ></v-icon> 
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