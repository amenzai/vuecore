import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 注册一个模块
store.registerModule('c', {
  state: {
    text: 3
  }
})

// store.unregisterModule('c')

// 监听某个 state 执行操作
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })

// 执行某个mutation 后， 执行回调
// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

// 数字表示顺序，全局、路由、组件 见 todo.vue
router.beforeEach((to, from, next) => {
  console.log('1', 'before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('3', 'before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('4', 'after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
