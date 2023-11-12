import { createStore } from 'vuex';


const store = createStore({
  state: {
    gameDataList: [], // Lista para almacenar los conjuntos de datos
  },
  mutations: {
    guardarJuego(state, juego) {
      state.gameDataList.push(juego); // Agrega el conjunto de datos a la lista
    },
  },
});

export default store;