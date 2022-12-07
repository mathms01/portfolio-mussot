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
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'PrestaPres',
  props: {
  }
}
</script>

<style>

</style>