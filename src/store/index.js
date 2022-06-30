import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {},
  mutations: {
    initList (state, list) {
      state.list = list
    }
  },
  actions: {
    getList (context) {
      axios.get('/list.json').then(({
        data
      }) => {
        context.commit('initList', data)
      })
    }
  },
  modules: {}
})
