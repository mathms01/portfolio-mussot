<template>
    <section>
        <h2>Me contacter</h2>
        <h3>Créons un nouveau projet ensemble ou faites moi juste un coucou</h3>
        <div class="frame">
            <div>
                <h4>M'envoyer un message</h4>
                <form action="/my-handling-form-page" method="post">
                    <div>
                        <label for="name">Nom&nbsp;:</label>
                        <input type="text" id="name" name="user_name" />
                    </div>
                    <div>
                        <label for="mail">E-mail&nbsp;:</label>
                        <input type="email" id="mail" name="user_email" />
                    </div>
                    <div>
                        <label for="msg">Message :</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </div>
                    <div>
                      <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="frame">
              <h4>Mes informations</h4>
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

              <div>
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                <font-awesome-icon icon="fa-solid fa-user-secret" />
                <font-awesome-icon icon="fa-solid fa-user-secret" />
              </div>
          </div>
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