import Vue from 'vue'
import Router from 'vue-router'

import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/Index',
      children: [{
        path: '/Index',
        name: 'Index',
        component: Index
      }]
      },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
