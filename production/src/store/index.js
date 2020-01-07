import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collect:[]
  },
  mutations: {
    setCollect(state,params){
     state.collect=params
    }
  },
  actions: {

   async getCollect ({dispatch }, params){
    const res=await api.main.favorite(params);
    if(res.data.code==0){
     await dispatch('getlist')
    }
  },
  async getlist({commit},params){
    const res=await api.main.myfavorite(params);
    commit('setCollect',res.data.data.items)
  }
  },
  modules: {
  }
})
