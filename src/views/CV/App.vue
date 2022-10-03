<template>
<h1>Mon CV</h1>
<img class="frame" src="@/assets/cvFreelance.jpg"/>
<a type="button" class="button" href="@/assets/cvFreelance.pdf" download="cv_mussot.pdf">Télécharger</a>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  },
  data(){
    return {
      source1:'@/assets/cvFreelance.jpg'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.frame {
  border: 3px solid #2c3e50;
  background: #eee;
  margin: auto;
  padding: 15px 25px;
}

.button {
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  position: absolute;
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
