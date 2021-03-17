
function load (component) {
  return () => import(`../pages/${component}.vue`)
}

export default [
  {
    path: '/',
    component: load('index'),
    meta: { title: '首页', hideHeader: true }
  },
]
