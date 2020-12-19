import Vue from 'vue'
import Vuex from 'vuex'

import api from "../services/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
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
      const userQuery = await api.post('auth', {
        userData
      })

      console.log(userQuery);


      commit('updateState', {
        prop: "user",
        value: {}
      })
    },
    signin() {

    }
  },
  modules: {}
})