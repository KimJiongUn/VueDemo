import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'张三',
    number:0,
    list:[
      {id:1,name:'111'},
      {id:2,name:'222'},
      {id:3,name:'333'}
    ]
  },
  getters:{
    getNewName(state){
       return `hello ${state.name}`
    }
  },
  mutations: {//同步
    setNewNum(state,data){
      state.number = data.number
    }
  },
  actions: {//异步
    waitSet(store){
      return new Promise(resolve=>{
        setTimeout(()=>{
         store.commit('setNewNum',{number:777})
         resolve()
        },1000)
      })
    }
  },
  modules: {
  },
  plugins:[createPersistedState()]
})
