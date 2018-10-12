import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div
      :class="['ss', { active: !isActive }]"
      :style="[styles, styles2]"
    >
      <p @click="handleClick" :style="styles">{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'black'
    }
  },
  methods: {
    handleClick (val) {
      // alert('clicked') // eslint-disable-line
      console.log(val)
      this.arr = ['name', 'tom']
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
