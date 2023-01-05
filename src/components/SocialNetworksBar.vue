<template>
    <div>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon.icon"
            :href="icon.link"
            target="_blank"
            variant="text"
        ></v-btn>
    </div>
</template>
    
<script>
export default {
    name: 'SocialNetworksBar',
    props: {
    },
    data () {
    return {
        icons: [
        {
            "icon" : "mdi-linkedin",
            "link" : "https://www.linkedin.com/in/mathieu-mussot/"
        },
        {
            "icon" : "mdi-white-balance-sunny",
            "link" : "https://www.malt.fr/profile/mathieumusssot"
        },
    ],
    }
    }
}
</script>

<style>

</style>