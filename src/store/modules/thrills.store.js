import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios";

// create a store
Vue.use(Vuex)

const state = {
  thrills: {}
};

// getters
const getters = {
  // blogs(state) {
  //  return state.blogs;
  // }
  thrills: state => state.thrills
};

// mutations
const mutations = {
  SET_THRILLS(state, thrills) {
    state.thrills = thrills;
  }
};

let actions = {
  async loadThrillsList( {commit}) {
    let {data} = await axios.get("http://api.royalthrills.com.test/api/thrills");
    commit("SET_THRILLS", data);
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}