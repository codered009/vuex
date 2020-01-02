<template>
<div>
    <div class="modal fade show" tabindex="-1" role="dialog" aria-hidden="true" :style="visible ? 'display:block;' : ''">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content" ref="content">
                <div class="modal-header">
                    <h5 class="modal-title">{{title}}</h5>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop fade show"></div>
</div>
</template>

<script>

export default {
  name: 'modal-content',
  props: ['title', 'visible'],
  data() {
    return {

    }
  },
  mounted: function () {
    this.$el.addEventListener('click', this.handler);
  },
  beforeDestroy: function () {
    this.$el.removeEventListener('click', this.handler);
  },
  methods: {    
    handler: function(e) {
        // some components may have related popup item, on which we shall prevent the click outside event handler.
        var elements = e.path || (e.composedPath && e.composedPath())
        elements && elements.length > 0 && elements.unshift(e.target)
        
        if (this.$refs.content.contains(e.target)) return

        this.$parent.close();
    }
  }
}
</script>

<style scoped>

</style>