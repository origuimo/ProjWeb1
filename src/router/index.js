import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeComp.vue';
import Menu from '../components/MenuComp.vue';
import NG from '../components/NewGame.vue';
import CC from '../components/CreateChar.vue';
import SR from '../components/ShowRanking.vue';
import SG from '../components/ShowGame.vue';
import CreateAttackView from '../views/CreateAttackView.vue';
import SellAttackView from '../views/SellAttackView.vue';
import AvailableAttacksView from '@/views/AvailableAttacksView.vue';
import AttackDetailView from '@/views/AttackDetailView.vue';
import StoreMenuView from '../views/StoreMenuView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/newgame', component: NG },
  { path: '/createchar', component: CC },
  { path: '/showrank', component: SR },
  { path: '/showgame', component: SG },
  { path: '/createattackview', component: CreateAttackView },
  { path: '/sellattackview', component: SellAttackView },
  { path: '/availableattacksview', component: AvailableAttacksView },
  { path: '/attacks/:id', component: AttackDetailView},
  { path: '/menuStore', component: StoreMenuView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
