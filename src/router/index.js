import Vue from 'vue'
import Router from 'vue-router'
import { publicPath } from '../../vue.config.js'

Vue.use(Router)

export const routes = [{
  path: '/',
  component: () => import('@/pages/Home.vue')
}, 
{
  path: '/tanzen',
  beforeEnter() {location.href = 'https://tanzenmed.com/'}
},
{
  path: '/cymot',
  beforeEnter() {location.href = 'https://cymot.org/'}
},
{
  path: '/github',
  beforeEnter() {location.href = 'https://github.com/cfeltch537'}
}, 
{
  path: '/linkedin',
  beforeEnter() {location.href = 'https://www.linkedin.com/in/codyfeltch/'}
}, 
{
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
  base: publicPath,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
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
