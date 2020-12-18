import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main/Main.vue'
import Auth from '../views/Auth/Auth'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Main
  },
  {
    path: "/iniciar-sesion",
    name: "signin",
    component: Auth
  },
  {
    path: "/registro",
    name: "signup",
    component: Auth
  }
]

const router = new VueRouter({
  routes
})

export default router