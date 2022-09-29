<template>
    <section>
        <img class="fit-picture"
     src="https://avatars.dicebear.com/api/miniavs/mms01.svg?hair=classic01&hairColor=black"
     alt="My avatar">
        <h1>Mathieu Mussot</h1>
        <h3>Freelance</h3>
        <h6>Portfolio d'un développeur fullstack</h6>
        <div>
            <router-link to="/about">Me contacter</router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: 'HomePres',
  props: {
  }
}
</script>

<style>
.fit-picture {
    width: 100px;
}
</style>