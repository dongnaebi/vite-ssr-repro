import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'
import routes from './routes'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
// const pages = import.meta.glob('../pages/*.vue')
//
// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\.\/pages(.*)\.vue$/)[1].toLowerCase()
//   return {
//     path: name === '/index' ? '/' : name,
//     component: () => import('../pages/index.vue')
//   }
// })
// console.log(routes)

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
