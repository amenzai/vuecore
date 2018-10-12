import Vue from 'vue'

const compoent = {
  props: {
    active: {
      // type: Boolean,
      // required: true,
      default: false, // 如果 default 是个对象，还是需要写成函数返回个对象
      validator (value) { // 自定义校验props
        return typeof value === 'boolean'
      }
    },
    propOne: [String, Number]
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return { // data 必须在这返回个对象，这个对象不能是在全局定义的，不然会造成多个相同组件数据同时更新
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', compoent)

new Vue({
  components: {
    CompOne: compoent
  },
  data: {
    prop1: 1
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$root)
    console.log(this.$refs.comp1)
  },
  el: '#root',
  template: `
    <div data-name="root">
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="true" propOne="text2"></comp-one>
    </div>
  `
})
