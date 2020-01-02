<template>
<ModalContent v-if="visible" :title="title" :visible="visible"><slot></slot></ModalContent>
</template>

<script>
import ModalContent from './Content.vue'
export default {
  name: 'modal',
  props: ['title'],
  components: {
      ModalContent
  },
  data() {
    return {
        visible: false
    }
  },
  methods: {
    show: function () {
        this.visible = true;
    },
    close: function() {
        this.visible = false;
        
    }
  }
}
</script>

<style scoped>

</style>