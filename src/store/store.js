import { createStore } from 'vuex';

export default createStore({
  state: {
    primerNumero: 0,
    segundoNumero: 0,
  },
  mutations: {
    guardarNumeros(state, { primerNumero, segundoNumero, nom }) {
      state.primerNumero = primerNumero;
      state.segundoNumero = segundoNumero;
      state.nom = nom
    },
  },
});
