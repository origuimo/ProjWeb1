import { createStore } from 'vuex';


const store = createStore({
  modules: {

    state: {

      jugadorInfo: null,

      mutations: {
        
        setGameDataList(state, data) {
          state.gameDataList = data;
        },

        InfoJugador(state, jugadorInfo) {
          state.jugadorInfo = {
            player_ID: jugadorInfo.player_ID,
            xp: jugadorInfo.xp,
            level: jugadorInfo.level,
            coins: jugadorInfo.coins,
            token: jugadorInfo.token,
          };
        },
      },
      getters: {
        getToken: state => state.jugadorInfo?.token || null,
        getCoins: state => state.jugadorInfo?.coins || null,
        getLevel: state => state.jugadorInfo?.level || null,
        getID: state => state.jugadorInfo?.player_ID || null,
      },
    },
  },
});

export default store;