import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Server from '@/components/ConfigInfo/Server'
import Https from '@/components/ConfigInfo/Https'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/server',
      name: 'Server',
      component: Server
    },
    {
      path: '/https',
      name: 'Https',
      component: Https
    }
  ]
})
