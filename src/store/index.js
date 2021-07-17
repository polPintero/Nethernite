import Vue from "vue";
import Vuex from "vuex";
import API from "@/api/API";

const api = new API();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: 1,
    responseSize: 10,
    searchString: "",
    cachePackeges: {},
  },
  mutations: {
    SET_SEARCH_STRING: (state, str) => {
      state.searchString = str;
    },
    SET_TO_CACHE: (state, payload) => {
      const page = state.page;
      Vue.set(state.cachePackeges, page, payload);
      // state.cachePackeges[page] = payload;
    },
  },
  actions: {
    GET_DATA_SEARCH: async ({ state, commit }, searchString) => {
      const search =
        searchString === undefined ? state.searchString : searchString;
      const response = await api.getSearch(
        search,
        state.page * state.responseSize
      );
      if (response.status) {
        commit("SET_TO_CACHE", response.data);
      }
      return true;
    },
  },
});
