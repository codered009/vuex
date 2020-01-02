import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios";

// create a store
Vue.use(Vuex)

const state = {
  blogs: {}
};

// getters
const getters = {
  // blogs(state) {
  //  return state.blogs;
  // }
  blogs: state => state.blogs
};

// mutations
const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  }
};

// actions
// export const actions = {
//  async nuxtBlogServerInit({ commit }) {
//    //data is an object ,api call returns array of objects
//    let { data } = await axios.get("http://api.royalthrills.com.test/api/blogs");
//    commit("SET_BLOGS", data);
//  }
// };

let actions = {
  async loadBlogsList( {commit}) {
    let {data} = await axios.get("http://api.royalthrills.com.test/api/blogs");
    commit("SET_BLOGS", data);
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}