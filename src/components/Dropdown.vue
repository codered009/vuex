<template>
    <div class="droplist">
        <div class="droplist-body" @click="visible = !visible" v-click-outside="closeDroplist">
            <div class="droplist-title">{{title}}</div>
            <div class="droplist-icon"></div>
        </div>
        <div class="droplist-items">
            <div class="droplist-items-body" v-if="visible">
                <ul class="droplist-items-list">
                    <li v-for="(item, id) in items" v-bind:key="id">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data() {
    return {
        visible: false
    }
  },
  methods: {
    closeDroplist: function() {
        this.visible = false;
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped>

.droplist {
    position: relative;
}
.droplist .droplist-body:after {
    position: absolute;
    content: url('../assets/droplist-icon.png');
    top: 37%;
    right: 25px;
}

.droplist .droplist-body {
    background: rgba(0, 0, 0, 0.75);
    padding-right: 145px;
    padding-left: 30px;
    height: 75px;
    cursor: pointer;
    position: relative;
    display: flex;
}

.droplist .droplist-title {
    font-size: 24px;
    color: #fffefe;
    display: flex;
    align-items: center;
}

.droplist .droplist-icon {
    position: absolute;    
    right: 15px;
    top: 50%;
    margin-top: -5px;
}

.droplist .droplist-icon img {
    width: 22px;
    height: 11px;
    display: block;
}

.droplist .droplist-items {
    padding-right: 5px;
    z-index: 9999;
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.75);
}

.droplist .droplist-items-body {
    width: calc(100% - 10px);
    max-height: 300px;
    overflow-y: scroll;
}

.droplist .droplist-items-body::-webkit-scrollbar {
    width: 10px;
}

.droplist .droplist-items-body::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.75);
}

.droplist .droplist-items-body::-webkit-scrollbar-thumb {
    background-color: #ffffff;
}

.droplist .droplist-items-list {
    padding: 0px;
    margin: 0px;
}

.droplist .droplist-items-list li {
    color: #ffffff;
    list-style-type: none;
    padding: 15px 10px;
}

.droplist .droplist-items-list li:hover {
    background: rgba(255, 255, 255, 0.75);
    color: #000000;
    cursor: pointer;
}
@media (max-width: 1199px) and (min-width: 992px) {
    .droplist .droplist-body {
        padding-right: 115px;
        height: 60px;

    }
    .droplist .droplist-title {
        font-size: 15px;
    }
}
@media (max-width: 991px) and (min-width: 768px) {
    

}

@media (max-width: 767px) {

}
@media (max-width: 575px) {
    .droplist .droplist-body {
        padding-right: 50px;
    }
    .droplist .droplist-title {
        font-size: 18px;
    }
    .droplist .droplist-body {
        height: 65px;
    }
}
</style>
