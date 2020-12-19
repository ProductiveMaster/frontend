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

        console.log(userQuery);


        commit('updateState', {
          prop: "user",
          value: {}
        })

        return true
      } catch (error) {
        console.error(error)
        return false
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

        console.log(userQuery);

        if (!userQuery.data.error) {
          commit('updateState', {
            prop: "user",
            value: userQuery.data.body.user
          })

          return true
        }


      } catch (error) {
        console.error(error)
        return false
      }
    },
  },
  modules: {}
})