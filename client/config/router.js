import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/', // 路由path 的统一前缀，不是强制的
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link', // 对激活的router-link标签自定义类名，两个类的区别： /login   /login/exact(比前者多一个exact-active-link类)
    scrollBehavior (to, from, savedPosition) { // 页面跳转滚动条处理
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    // fallback: true // 不支持history 模式的浏览器自动使用hash模式
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
  })
}
