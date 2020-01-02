import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios";

// create a store
Vue.use(Vuex)

const state = {
  stories: {}
};

// getters
const getters = {
  // blogs(state) {
  //  return state.blogs;
  // }
  stories: state => state.stories
};

// mutations
const mutations = {
  SET_STORIES(state, stories) {
    state.stories = stories;
  }
};

let actions = {
  async loadStoriesList( {commit}) {
    let {data} = await axios.get("http://api.royalthrills.com.test/api/stories");
    commit("SET_STORIES", data);
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}