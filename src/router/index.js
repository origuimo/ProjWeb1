// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeComp.vue';
import Menu from '../components/MenuComp.vue';
import NG from '../components/NewGame.vue';
import CC from '../components/CreateChar.vue';
import SR from '../components/ShowRanking.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/newgame', component: NG },
    { path: '/createchar', component: CC },
    { path: '/showrank', component: SR },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
