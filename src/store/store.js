import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    storedValues: [], // Aquí se almacenarán los valores de los campos de entrada
  },
  mutations: {
    addStoredValue(state, payload) {
      state.storedValues.push(payload);
    },
  },
});

export default store;
