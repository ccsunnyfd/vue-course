import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes
// })

const router = new Router({
  routes
})

const HAS_LOGEDIN = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGEDIN) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGEDIN) next({ name: 'home' })
    else next()
  }
})

router.afterEach((to, from) => {
  // logining = false
})

export default router
