import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    nonce: 0,
    history: [],
    saveInLocalStorage: localStorage.getItem("data"),
  },
  mutations: {
    setHistory(state, value) {
      state.history.push(value);
      state.history = [...state.history.sort((a, b) => b.date - a.date)];
    },
    setNonce(state) {
      state.nonce = ++state.nonce;
    },
    setResponse(state, value) {
      const response = JSON.stringify(value);
      state.saveInLocalStorage = response;
      localStorage.setItem("data", response);
    },
  },
  getters: {
    saveInLocalStorage: (state) => {
      return state.saveInLocalStorage;
    },
    history: (state) => {
      return state.history;
    },
  },
  actions: {
    addEventHistory({ commit }, event) {
      commit("setHistory", event);
    },
    sendData({ commit, state, dispatch }, data) {
      commit("setNonce");
      dispatch("addEventHistory", {
        type: "submit",
        name: "Отправка фориы",
        value: `localstorage:${state.saveInLocalStorage}`,
        date: new Date(),
      });
      setTimeout(() => {
        let response;
        if (data.amount % 2 === 0) {
          commit("setResponse", {
            price: data.price,
            qty: data.qty,
            amount: data.amount,
            nonce: state.nonce,
          });
          response = true;
        } else {
          response = false;
        }
        dispatch("addEventHistory", {
          type: "submit",
          name: "Получение данных с бекенда",
          value: `success: ${response} , localstorage:${state.saveInLocalStorage}`,
          date: new Date(),
        });
      }, 1000);
    },
  },
});
