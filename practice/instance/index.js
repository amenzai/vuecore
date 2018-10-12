import Vue from 'vue'

// 为了下面好表述，new Vue(option)
const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>', // webpack 配置vue | 'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js'), 才可以使用 template
  data: {
    text: 0,
    obj: {
      a: 0 // 页面绑定对象的属性，最好在这里事先定义，不然不会渲染到视图
    }
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

let i = 0
setInterval(() => {
  i++
  // app.text += i
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  app.obj.a = i
  // app.$set(app.obj, 'a', i) app.$delete() app.$nextTick(() => {})
  // app.$forceUpdate()
  // app.$options.data.text += 1 // 没有作用
  // app.$data.text += 1 // 起作用
}, 1000)

console.log('$data', app.$data) // 就是option中的data对象
console.log('$props', app.$props)
console.log('$el', app.$el)
console.log('$options', app.$options)
// app.$options.render = (h) => { // 在data值改变时，也就是第二次渲染，就会生效
//   return h('div', {}, 'new render function')
// }
console.log('$root', app.$root === app) // 最顶层的 vue 实例
console.log('$children', app.$children) // 子组件
console.log('$slots', app.$slots)
console.log('$scopedSlots', app.$scopedSlots)
console.log('$refs', app.$refs)
console.log('$isServer', app.$isServer) // 服务端渲染时使用

const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
})
setTimeout(() => {
  unWatch() // 取消监听
}, 2000)

app.$once('test', (a, b) => {
  console.log(`test emited ${1} ${b}`)
})

setInterval(() => {
  app.$emit('test', 1, 2)
}, 1000)

// app.$forceUpdate() // 强制组件重新渲染
