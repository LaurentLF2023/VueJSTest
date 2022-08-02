<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <UserSelect/>
    <PostCard/>
</template>

<script>
// @ is an alias to /src
import UserSelect from '@/components/UserSelect.vue'
import PostCard from '@/components/PostCard.vue'


export default {
  name: 'HomeView',
  components: {
    UserSelect,
    PostCard
  }
}
</script>
