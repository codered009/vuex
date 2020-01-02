<template>
    <div class="itinerary body">
        <Banner/>
        <Content/>
    </div>
</template>

<script>
import Banner from './Banner.vue';
import Content from './content';

export default {
  name: 'itinerary',
  components: {
    Banner,
    Content
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
