// router.js
import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store/store.js';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeComp.vue';
import Menu from '../components/MenuComp.vue';
import NG from '../views/NewGame.vue';
import CC from '../components/CreateChar.vue';
import SR from '../components/ShowRanking.vue';
import SG from '../components/ShowGame.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/newgame', component: NG },
    { path: '/createchar', component: CC },
    { path: '/showrank', component: SR },
    { path: '/showgame', component: SG },
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
