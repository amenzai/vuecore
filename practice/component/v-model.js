import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value', 'value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1"><span>{{ value }}</span>
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one v-model="value" value="gjc"></comp-one>
      <span>{{ value }}</span>
    </div>
  `
})

// const component = {
//   props: ['value'],
//   template: `
//     <div>
//       <input type="text" @input="handleInput" :value="value">
//     </div>
//   `,
//   methods: {
//     handleInput (e) {
//       // this.$emit('change', e.target.value)
//       this.$emit('input', e.target.value)
//     }
//   }
// }
// new Vue({
//   components: {
//     CompOne: component
//   },
//   el: '#root',
//   data () {
//     return {
//       value: '123'
//     }
//   },
//   // template: `
//   //   <div>
//   //     <comp-one @change="value = arguments[0]" :value="value"></comp-one>
//   //     <span>{{ value }}</span>
//   //   </div>
//   // `
//   template: `
//     <div>
//       <comp-one v-model="value"></comp-one>
//       <span>{{ value }}</span>
//     </div>
//   `
// })
