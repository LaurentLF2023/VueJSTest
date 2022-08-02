<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <AlbumCard/>
</template>

<script>
// @ is an alias to /src
import AlbumCard from '@/components/AlbumCard.vue'

export default {
  name: 'AlbumView',
  components: {
    AlbumCard
  }
}
</script>
