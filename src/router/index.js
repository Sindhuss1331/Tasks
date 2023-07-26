import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import RegisterPage from '@/components/RegisterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/registerpage',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})
