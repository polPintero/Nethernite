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
    tableData: [],
    isLoading: false,
  },
  mutations: {
    SET_LOADING: (state, flag) => {
      state.isLoading = flag;
    },
    SET_SEARCH_STRING: (state, str) => {
      state.searchString = str;
    },
    SET_TO_CACHE: (state, payload) => {
      const page = state.page;
      Vue.set(state.cachePackeges, page, payload);
    },
    CLEAR_CACHE: (state) => {
      state.cachePackeges = {};
      state.page = 1;
    },
    SET_TABLE_DATA: (state, payload) => {
      state.tableData = payload;
    },
    SET_NEW_PAGE: (state, pageNumber) => {
      state.page = pageNumber;
    },
  },
  actions: {
    SEND_RESPONSE_SEARCH: async ({ state }, searchStr) => {
      const search = searchStr === undefined ? state.searchString : searchStr;
      const response = await api.getSearch(
        search,
        state.page * state.responseSize
      );
      return response;
    },
    GET_DATA_SEARCH: async ({ state, commit, dispatch }, searchStr) => {
      const { page, cachePackeges } = state;
      if (cachePackeges[page] !== undefined) return true;
      const response = await dispatch("SEND_RESPONSE_SEARCH", searchStr);
      if (response.status) {
        commit("SET_TO_CACHE", response.data);
      }
      return true;
    },
    GET_DATA_NEW_PAGE: ({ commit, dispatch }, pageNumber) => {
      commit("SET_NEW_PAGE", pageNumber);
      dispatch("GET_DATA_SEARCH");
    },
  },
});
