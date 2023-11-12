import { createStore } from 'vuex';


const store = createStore({
  state: {
    gameDataList: [], // Lista para almacenar los conjuntos de datos
  },
  mutations: {
    guardarJuego(state, juego) {
      juego.primerNumero = parseInt(juego.primerNumero);
      state.gameDataList.push(juego);
    },
  },
});

export default store;