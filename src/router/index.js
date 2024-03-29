import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import City from '@/pages/City/city'
import Detail from '@/pages/Detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
