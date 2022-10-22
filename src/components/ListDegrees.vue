<template>
    <div>
      <li v-for="item in items"
      :key=item.title>
        <img class="frame" src="item.image" />
          {{ item.title }} - {{ item.description }} - {{ item.link }} - {{ item.image }}
      </li>
    </div>
</template>

<script>
import degrees from '@/assets/degrees.json';

export default {
  name: 'ListDegrees',
  props: {
  },
  data () {
    return {
      items: degrees
    }
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
</style>