<template>
    <section>
        <h3>Votre futur site sur-mesure !</h3>
        <h2>Freelance</h2>
        <hr class="solid"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
            <div class="container in-line">
                <h2>1234</h2>
                <p>blalbla</p>
            </div>
            <div class="vl in-line"></div>
            <div class="container in-line">
                <h2>1234</h2>
                <p>blalbla</p>
            </div>
            <div class="vl in-line"></div>
            <div class="container in-line">
                <h2>1234</h2>
                <p>blalbla</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'FreelancePres',
  props: {
  }
}
</script>

<style>
hr.solid {
  border-top: 3px solid #bbb;
}

.vl {
  border-left: 3px solid #bbb;
}

.in-line{
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 5px;  
}

.container{
    /* width: 200px; */
}
</style>