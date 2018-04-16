import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import YourCardSearch from '@/components/YourCardSearch'
import TheirCardSearch from '@/components/TheirCardSearch'
import Trade from '@/components/Trade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/yours',
      name: 'YourCardSearch',
      component: YourCardSearch
    },  
    {
      path: '/theirs',
      name: 'TheirCardSearch',
      component: TheirCardSearch
    },
    {
      path: '/trade',
      name: 'Trade',
      component: Trade
    }  
  ]
})
