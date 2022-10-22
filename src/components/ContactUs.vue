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
  border: 3px solid #2c3e50;
  background: #eee;
  margin: auto;
  padding: 15px 25px;
}

form {
  /* Uniquement centrer le formulaire sur la page */
  margin: 0 auto;
  width: 400px;
  /* Encadré pour voir les limites du formulaire */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

form div + div {
  margin-top: 1em;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, textarea {
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 300px;
  box-sizing: border-box;

  /* Pour harmoniser le look & feel des bordures des champs texte */
  border: 1px solid #999;
}

input:focus, textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

textarea {
  /* Pour aligner les champs texte multi‑ligne avec leur étiquette */
  vertical-align: top;

  /* Pour donner assez de place pour écrire du texte */
  height: 5em;
}

.button {
  /* Pour placer le bouton à la même position que les champs texte */
  padding-left: 90px; /* même taille que les étiquettes */
}

button {
  /* Cette marge supplémentaire représente grosso modo le même espace que celui
     entre les étiquettes et les champs texte */
  margin-left: .5em;
}
</style>