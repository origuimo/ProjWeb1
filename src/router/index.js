// router.js
import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store/store.js';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Menu from '../views/MenuView.vue';
import NG from '../views/NewGame.vue';
import AG from '../views/AvailableGames.vue';
import IG from '../views/InfoGame.vue';
import GV from '../views/GameView.vue';
import SG from '../views/AvailableGames.vue';
import LG from '../views/LogIn.vue'
import MLG from '../views/logInMenu.vue'

import CC from '../views/CreateCharacterView.vue';
import SR from '../views/ShowRankingView.vue';
import IC from '../views/PlayerInfoView.vue';
import DC from '../views/DeleteCharView.vue';
import PH from '../views/PlayerHistoryView.vue';
import CreateAttackView from '../views/CreateAttackView.vue';
import SellAttackView from '../views/SellAttackView.vue';
import AvailableAttacksView from '@/views/AvailableAttacksView.vue';
import AttackDetailView from '@/views/AttackDetailView.vue';
import StoreMenuView from '../views/StoreMenuView.vue';
import LogView from '../views/LogView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/newgame', component: NG },
    { path: '/createchar', component: CC },
    { path: '/availablegames', component: AG },
    { path: '/gameView/:files/:source/:id', 
      name: 'gameView',
      component: GV,
      props: true,
    },
    {
      path: '/infoGame/:gameID',
      name: 'infoGame',
      component: IG,
      props: true,
    },
  { path : '/login', component: LG},
  { path: '/menulogin', component: MLG},  
  { path: '/createchar', component: CC },
  { path: '/showrank', component: SR },
  { path: '/showgame', component: SG },
  { path: '/logview', component: LogView },
  { path: '/createattackview', component: CreateAttackView },
  { path: '/sellattackview', component: SellAttackView },
  { path: '/availableattacksview', component: AvailableAttacksView },
  { path: '/attacks/:id', component: AttackDetailView},
  { path: '/menuStore', component: StoreMenuView },
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

//app.mount('#app');

export default customRouter;
