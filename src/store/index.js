import Vue from "vue";
import Vuex from "vuex";
import API from "@/api/API";

const api = new API();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    GET_DATA_SEARCH: async ({ state }, searchString) => {
      const z = await api.getSearch(searchString);
      console.log(state);
      // console.log(z);
      return true
    },
  },
});
