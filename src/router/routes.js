
function load (component) {
  return () => import(`../pages/${component}.vue`)
}

export default [
  {
    path: '/',
    component: () => import('../pages/index.vue'),
    meta: { title: '首页' }
  },
  // {
  //   path: '/',
  //   component: load('index'),
  //   meta: { title: '首页' }
  // }
]
