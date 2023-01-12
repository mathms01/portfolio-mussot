<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h3>CE QUE JE FAIS</h3>
                <h2>Les différentes prestations possibles</h2>
            </v-card-title>
            <v-card-text>
              <v-row class="space-around">
                <v-divider></v-divider>
              </v-row>
              <v-row justify="space-around">
                <v-col class="d-flex justify-center align-center" v-for="item in items" :key="item.title">
                  <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card
                      rounded="xl"
                      :elevation="isHovering ? 12 : 2"
                      :class="{ 'on-hover': isHovering }"
                      class="align-center v-card-hover"
                      min-height="200"
                      min-width="400"
                      v-bind="props"
                    >
                    <div v-if="!isHovering">
                      <v-icon
                        class="outlined"
                        size="x-large"
                        color="primary"
                      > {{ item.icon }}</v-icon>
                      <h2 class="space-around-min">{{ item.title }}</h2>
                      <h3 class="space-around">{{item.price}} TTC</h3>
                    </div>
                    <div v-if="isHovering">
                      <v-card-title>
                          <v-icon color="primary">{{item.icon}}</v-icon>
                          <v-spacer></v-spacer>
                            {{item.title}}
                      </v-card-title>
                      <v-card-text>
                        {{item.description}}
                      </v-card-text>
                      <v-expand-transition>
                        <v-card-actions>
                          <v-btn
                            color="primary"
                            variant="outlined"
                            append-icon="mdi-currency-eur">
                            {{item.price}} TTC
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            to="/about"
                          >
                              Me contacter
                          </v-btn>
                        </v-card-actions>
                      </v-expand-transition>
                    </div>
                    </v-card>
                  </v-hover>
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
  },
  data () {
    return {
      items: [
        {
          "title": "Site vitrine",
          "icon": "mdi-laptop",
          "price": "1000€",
          "description": "Prestation de conception, développement et livraison de votre site 'vitrine' qui sera le miroir de votre activité.",
        },
        {
          "title": "Site marchand",
          "icon": "mdi-store",
          "price": "2500€",
          "description": "Prestation de conception, développement et livraison de votre site 'marchand' permettant de vendre vos produits et services en toute sécurité.",
        },
        {
          "title": "Application",
          "icon": "mdi-application",
          "price": "5000€",
          "description": "Prestation de conception, développement et livraison de votre application adapté à vos besoins. Possibilité d'avoir un portage sur Mobile, Web et Ordinateur.",
        },
        {
          "title": "Maintenance",
          "icon": "mdi-hammer-screwdriver",
          "price": "350€/TJM",
          "description": "Prestation de missions à la demande sur une courte durée.",
        },
      ]
    }
  },
}
</script>

<style scoped>
@import '@/scss/global.css';

.v-card-hover {
    transition: opacity .4s ease-in-out;
    opacity: 1;
  }
  .v-card-hover:not(.on-hover) {
    opacity: 0.6;
  }

</style>