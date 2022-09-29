<template>
    <div>
      <li v-for="item in items"
      :key=item.title>
          {{ item.title }} - {{ item.description }}
      </li>
    </div>
</template>

<script>
import projects from '@/assets/projects.json';

export default {
  name: 'ListProjects',
  props: {
  },
  data () {
    return {
      items: projects
    }
  }
}
</script>

<style>

</style>