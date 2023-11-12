// router.js
import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store/store.js';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeComp.vue';
import Menu from '../components/MenuComp.vue';
import NG from '../views/NewGame.vue';
import AG from '../views/AvailableGames.vue';
import IG from '../views/InfoGame.vue';
import GV from '../views/GameView.vue';

import CC from '../views/CreateCharacterView.vue';
import SR from '../views/ShowRankingView.vue';
import IC from '../views/PlayerInfoView.vue';
import DC from '../views/DeleteCharView.vue';
import PH from '../views/PlayerHistoryView.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/newgame', component: NG },
    { path: '/createchar', component: CC },
    { path: '/availablegames', component: AG },
    { path: '/gameview', component: GV },

    {
      path: '/infoGame',
      name: 'infoGame',
      component: IG,
      props: true,
    },
    
    { path: '/createchar', component: CC },
    { path: '/showrank', component: SR },
    { path: '/infochar', component: IC },
    { path: '/delete', component: DC },
    { path: '/phistory', component: PH },
];

const customRouter = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store);
app.use(customRouter);  // Usa el enrutador personalizado

app.mount('#app');

export default customRouter;
