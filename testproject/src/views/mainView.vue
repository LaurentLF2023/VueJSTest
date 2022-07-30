<template>
<HomeView />
</template>

<script>

import { defineComponent } from 'vue';
import HomeView from './HomeView.vue';


export default defineComponent({
  name: 'MainView',
  components: {
        HomeView,
  },
});

</script>