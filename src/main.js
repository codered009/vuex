import 'bootstrap/dist/css/bootstrap.css';
import './components/slider/slick.css';

import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import Vuex from 'vuex';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './store';
//import modules from './modules';
import { routes } from './router-config';
 
Vue.use(VueScrollTo)
Vue.config.productionTip = false

// store and router
Vue.use(Vuex);
Vue.use(Router);
//const store = new Vuex.Store(VuexStore);
const router = new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (from.name === to.name) {
            return savedPosition;
        }
        if (!savedPosition || to !== from) {
            return { x: 0, y: 0 }
        }
        return savedPosition;
    },
});
sync(store, router);
Vue.router = router;

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
