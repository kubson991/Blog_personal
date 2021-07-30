import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _702bbb3c = () => interopDefault(import('../pages/acercaDeMi.vue' /* webpackChunkName: "pages/acercaDeMi" */))
const _08bd96e9 = () => interopDefault(import('../pages/blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _50ef493a = () => interopDefault(import('../pages/blog/MiBlog.vue' /* webpackChunkName: "pages/blog/MiBlog" */))
const _c5519bac = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acercaDeMi",
    component: _702bbb3c,
    name: "acercaDeMi"
  }, {
    path: "/blogs",
    component: _08bd96e9,
    name: "blogs"
  }, {
    path: "/blog/MiBlog",
    component: _50ef493a,
    name: "blog-MiBlog"
  }, {
    path: "/",
    component: _c5519bac,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
