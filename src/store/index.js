import Vue from 'vue'
import Vuex from 'vuex'

import api from "../services/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    usersList: [{
      name: "Emiliano Pacheco"
    }]
  },
  mutations: {
    updateState(state, {
      prop,
      value
    }) {
      state[prop] = value
    }
  },
  actions: {
    async signup({
      commit
    }, userData) {
      try {
        const userQuery = await api.post('auth/sign-up',
          userData
        )

        if (userQuery.error) {

          return {
            success: false,
            message: userQuery.message
          }

        } else {

          return {
            success: true,
            message: "Ahora puedes iniciar sesión"
          }

        }

      } catch (error) {

        if (error.response && error.response.data.message) {
          return {
            success: false,
            message: error.response.data.message
          }
        } else {
          return {
            success: false,
            message: "Ha ocurrido un error inesperado intentalo de nuevo más tarde"
          }
        }

      }
    },
    async signin({
      commit
    }, userData) {
      try {
        const userQuery = await api.post('auth/sign-in', {}, {
          auth: {
            username: userData.email,
            password: userData.password
          }
        })

        if (userQuery.error) {

          return {
            success: false,
            message: userQuery.message
          }

        } else {

          commit('updateState', {
            prop: "user",
            value: userQuery.data.body.user
          })

          localStorage.setItem('productiveUser', JSON.stringify(userQuery.data.body.user))

          return {
            success: true,
            message: "Bienvenido!"
          }

        }


      } catch (error) {

        if (error.response && error.response.data.message) {
          return {
            success: false,
            message: error.response.data.message
          }
        } else {
          return {
            success: false,
            message: "Ha ocurrido un error inesperado intentalo de nuevo más tarde"
          }
        }

      }
    },
  },
  modules: {}
})