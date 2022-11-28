<template>
    <section>
      <v-app>
        <h2>Me contacter</h2>
        <h3>Créons un nouveau projet ensemble ou faites moi juste un coucou</h3>
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-title>
            M'envoyer un message
          </v-card-title>
      
          <v-spacer></v-spacer>

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
        </v-card>
        <v-card>
          <v-card-title>
            Mes informations
          </v-card-title>
      
          <v-spacer></v-spacer>
          
          <div>
                <h5>Mon adresse</h5>
                <span>123 rue du général pipou</span><br/>
                <span>69100 VILLEURBANNE</span><br/>
                <span>France</span>
              </div>
              
              <div>
                <h5>Mon email</h5>
                <span>mathieu.mussot01@gmail.com</span>
              </div>

              <div>
                <h5>Mon portable</h5>
                <span>06 73 22 90 95</span>
              </div>

        </v-card>
        <v-card>
          <v-icon icon="mdiTwitter "></v-icon>
          <v-icon icon="mdi-antenna"></v-icon>
          <v-icon icon="mdi-antenna"></v-icon>
        </v-card>
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
.frame {
  background: #161720;
  margin: auto;
  padding: 15px 25px;
  display: inline-block;
}

form {
  /* Uniquement centrer le formulaire sur la page */
  margin: 0 auto;
  width: 300px;
  /* Encadré pour voir les limites du formulaire */
  padding: 1em;
  border-radius: 1em;
}
</style>