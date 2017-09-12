import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/pages/demo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/pages/Home')
    },
    {
      path: '/',
      name: 'sao',
      component: () => import('@/pages/Sao')
    }
  ]
})
