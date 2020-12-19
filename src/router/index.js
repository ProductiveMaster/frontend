import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main/Main.vue';
import Auth from '../views/Auth/Auth';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/iniciar-sesion',
    name: 'signin',
    component: Auth,
  },
  {
    path: '/registro',
    name: 'signup',
    component: Auth,
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: Sidebar,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
