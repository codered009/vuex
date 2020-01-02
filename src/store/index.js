import Vue from 'vue';
import Vuex from 'vuex';
import blogs from './modules/blogs.store'
import stories from './modules/stories.store'
import thrills from './modules/thrills.store'

Vue.use(Vuex);

export default new Vuex.Store({
  // Making sure that we're doing
  // everything correctly by enabling
  // strict mode in the dev environment.
  strict: process.env.NODE_ENV !== `production`,
  // you need to register the modules here
  modules: {
    blogs,
    stories,
    thrills
  }
});
