<template>
    <section>
      <v-app>
        <h2>Me contacter</h2>
        <h1>Créons un nouveau projet ensemble ou faites moi juste un coucou</h1>
        <v-container  class="fill-height" fluid>
          <v-row>
            <v-col cols="6">
              <v-card
                class="mx-auto"
                height='100%'
              >
                <v-card-title>
                  <h3 color="primary">Pour m'envoyer un message</h3>
                </v-card-title>
            
                <v-spacer></v-spacer>

                <v-card-text>
                <v-form ref="form" v-model="valid" @submit.prevent="sendEmail" lazy-validation>
                  
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
                  color="primary"
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
              <v-card height='100%'>
                <v-card-title>
                  <h3>Mes informations</h3>
                </v-card-title>
            
                <v-spacer></v-spacer>

                <v-card-text>
                  <v-expansion-panels>
                    <v-expansion-panel
                      title="Mon adresse"
                    >
                    <v-expansion-panel-text>
                      <span>123 rue du général pipou</span><br/>
                      <span>69100 VILLEURBANNE</span><br/>
                      <span>France</span>
                    </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel
                      title="Mon email"
                      text="mathieu.mussot01@gmail.com"
                    >
                    </v-expansion-panel>
                    <v-expansion-panel
                      title="Mon portable"
                      text="06 73 22 90 95"
                    >
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-text>

                <v-spacer/>
                
                <v-card-text class="pa-0">
                  <v-col class="text-center">
                    <SocialNetworksBarVue></SocialNetworksBarVue>
                  </v-col>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  </v-app>
    </section>
</template>

<script>
import emailjs from '@emailjs/browser';
import SocialNetworksBarVue from './SocialNetworksBar.vue';

export default {
  name: 'ContactUs',
  components: {
    SocialNetworksBarVue
  },
  props: {
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_4d3f0td', 'template_k6vtpvf', this.$refs.form, 'S08I5HBWR71_TAZc_')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<style>
</style>