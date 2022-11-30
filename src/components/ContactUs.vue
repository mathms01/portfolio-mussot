<template>
    <section>
      <v-app>
        <h2>Me contacter</h2>
        <h3>Créons un nouveau projet ensemble ou faites moi juste un coucou</h3>
        <v-container  class="fill-height" fluid>
          <v-row>
            <v-col cols="6">
              <v-card
                class="mx-auto"
              >
                <v-card-title>
                  Pour m'envoyer un message
                </v-card-title>
            
                <v-spacer></v-spacer>

                <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  
                <v-text-field
                  outlined
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
            
                <v-text-field
                  outlined
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
            
                <v-textarea
                  outlined
                  v-model="message"
                  label="Message"
                  required
                  ></v-textarea>
            
                <v-btn
                  outlined
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Validate
                </v-btn>
              </v-form>
              </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card>
                <v-card-title>
                  Mes informations
                </v-card-title>
            
                <v-spacer></v-spacer>

                <v-card-text>
                      <h5>Mon adresse</h5>
                      <span>123 rue du général pipou</span><br/>
                      <span>69100 VILLEURBANNE</span><br/>
                      <span>France</span>

                      <v-spacer></v-spacer>

                      <h5>Mon email</h5>
                      <span>mathieu.mussot01@gmail.com</span>

                      <v-spacer></v-spacer>

                      <h5>Mon portable</h5>
                      <span>06 73 22 90 95</span>
                </v-card-text>
              </v-card>
              <v-card>
                <v-icon icon="mdi-plus "></v-icon>
                <v-icon icon="mdi-antenna"></v-icon>
                <v-icon icon="mdi-antenna"></v-icon>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  </v-app>
    </section>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {
  }
}
</script>

<style>
</style>