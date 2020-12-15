import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    result: 0,
  },
  getters: {
    tenResult: (state) => {
      return state.result * 10;
    },
    nameResult: (state) => {
      return state.result + " name product";
    },
  },
  mutations: {
    increaseOption(state) {
      state.result++;
    },
    decreaseOption(state) {
      state.result--;
    },
  },
  actions: {
    increment: ({ commit }) => {
      commit("increaseOption");
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit("decreaseOption");
      }, 2000);
    },
  },
});
