import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p>FullName: {{fullName}}</p>
      <p><input type="text" v-model="number"></p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
      <p>LastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>Obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
    number: 0,
    fullName: '',
    obj: {
      a: 0
    }
  },
  computed: { // 常用于显示一个随某个值变化的值
    name: { // 与使用方法的好处就是，当number变化时，这里不会再重新执行
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) { // 使用set 时，最好别去修改 data里面的值
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: { // 常用于监听某个值变化，然后执行某个操作
    'obj.a': {
      handler () {
        console.log('obj.a changed')
        // this.obj.a += 1 // 不要对监控的值进行修改，会死循环
      },
      immediate: true
      // deep: true
    }
  },
  // watch: { // 常用于监听某个值变化，然后执行某个操作
  //   obj: {
  //     handler () {
  //       console.log('obj.a changed')
  //       // this.obj.a += 1
  //     },
  //     immediate: true,
  //     deep: true // 监听对象中属性的变化
  //   }
  // },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
