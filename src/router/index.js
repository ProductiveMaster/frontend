import Vue from 'vue';
import VueRouter from 'vue-router';

// routes
import Main from '../views/Main/Main.vue';
import Auth from '../views/Auth/Auth';


import Home from "../views/Home/Home"
import Vacant from "../views/Home/components/Vacant/Vacant"


Vue.use(VueRouter);

const routes = [{
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
    path: '/home',
    component: Home,
    children: [{
      path: 'vacantes',
      component: Vacant,
    }]
  },
];

const router = new VueRouter({
  routes,
});

export default router;