import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

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
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGEDIN) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGEDIN) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve((to, from, next) => {
//   if (to.name !== 'login') {
//     if (HAS_LOGEDIN) next()
//     else next({ name: 'login' })
//   } else {
//     if (HAS_LOGEDIN) next({ name: 'home' })
//     else next()
//   }
// })

router.afterEach((to, from) => {
  // logining = false
})

// The Full Navigation Resolution Flow
// Navigation triggered.
// Call leave guards in deactivated components.
// Call global beforeEach guards.
// Call beforeRouteUpdate guards in reused components.
// Call beforeEnter in route configs.
// Resolve async route components.
// Call beforeRouteEnter in activated components.
// Call global beforeResolve guards.
// Navigation confirmed.
// Call global afterEach hooks.
// DOM updates triggered.
// Call callbacks passed to next in beforeRouteEnter guards with instantiated instances.

export default router
