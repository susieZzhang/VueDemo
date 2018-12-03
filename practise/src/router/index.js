import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Home from '@/views/Home/index'
import Index from '@/views/index'
import Plan from '@/views/add'
import cookies from 'js-cookie'

Vue.use(Router)

var router = new Router({
  mode: 'hash',
  base: './',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: {
        name: 'index'
      },
      meta: {
        isLogin: true
      },
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'plan/:id',
          name: 'plan',
          component: Plan
        }
      ]
    }
  ]
})
export default router

router.beforeEach((to, from, next) => {
  if (to.matched.some(item => item.meta.isLogin)) {
    const shiroCookie = cookies.get('user')
    if (shiroCookie) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})
