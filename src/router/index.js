import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Test',
    component: ()=>import('@/views/test')
  },
  {
    path: '/fts',
    name: 'fts',
    component: ()=>import('@/views/fts')
  },
  {
    path: '/vuexDemo',
    name: 'vuexDemo',
    component: ()=>import('@/views/vuexDemo')
  },
]

const router = new VueRouter({
  routes,
  mode:'hash'//hash或者history
})

export default router
