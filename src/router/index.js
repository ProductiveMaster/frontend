import Vue from 'vue';
import VueRouter from 'vue-router';

// routes
import Main from '../views/Main/Main.vue';
import Auth from '../views/Auth/Auth';


import Home from "../views/Home/Home"
import Vacant from "../views/Home/components/Vacant/Vacant"
import Applications from "../views/Home/components/Applications/Applications"
import Users from "../views/Home/components/Users/Users"
import VacantPage from "../views/Home/components/VacantPage/VacantPage"
import Ranking from "../views/Home/components/Ranking/Ranking"


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
      },
      {
        path: 'aplicaciones',
        component: Applications,
      },
      {
        path: 'usuarios',
        component: Users,
      },
      {
        path: 'vacante/:id',
        component: VacantPage,
      },
      {
        path: 'ranking',
        component: Ranking,
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;