import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import IndexList from '@/components/indexlist/IndexList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/indexlist',
      name: 'IndexList',
      component: IndexList
    }, 
    {
      path: '/home',
      name: 'home',
      component: Home
    } 
  ]
})
