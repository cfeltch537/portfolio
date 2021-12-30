import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  name: 'home',
  path: '/',
  component: () => import('@/pages/Home.vue')
}, 
{
  name: 'tanzen',
  path: '/tanzen',
  beforeEnter() {location.href = 'https://tanzenmed.com/'}
},
{
  name: 'cymot',
  path: '/cymot',
  beforeEnter() {location.href = 'https://cymot.org/'}
},
{
  name: 'github',
  path: '/github',
  beforeEnter() {location.href = 'https://github.com/cfeltch537'}
}, 
{
  name: 'linkedin',
  path: '/linkedin',
  beforeEnter() {location.href = 'https://www.linkedin.com/in/codyfeltch/'}
}, 
{
  name: 'stackoverflow',
  path: '/stackoverflow',
  beforeEnter() {location.href = 'https://stackoverflow.com/users/3981034/codyf'}
}, 
{
  path: '*',
  component: () => import('@/layouts/ErrorLayout.vue'),
  children: [{
    path: '',
    name: 'error',
    component: () => import('@/pages/error/NotFoundPage.vue')
  }]
}]

const router = new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '/' : '/portfolio/',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    } else {
      return null
    }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
