import { createStore } from 'vuex';


const store = createStore({
  state: {
    gameDataList: [], // Lista para almacenar los conjuntos de datos
    bearer: '0',
  },
  mutations: {
    guardarJuego(state, juego) {
      juego.primerNumero = parseInt(juego.primerNumero);
      state.gameDataList.push(juego);
    },
  },
  guardarbearer(state, nuevoBearer) {
    state.bearer = nuevoBearer;
  },
});

export default store;