import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/pages/demo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import('@/pages/Home')
    }
  ]
})
