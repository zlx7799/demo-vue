<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2020-12-16 10:13:23
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-01-27 05:26:50
-->
<template>
  <div>
    <p>这是我定义的数组</p>
    <div>{{this.arr}}</div>
    <button @click="changeArr">点击这里我就要改变数组里第2个</button>
    <child :arr="arr"></child>
    <p class="speech"></p>

  </div>
</template>

<script>
export default {
  name: "HelloWord",
  data () {
    return {
      arr: [
        {
          lng: 119.98260978766649,
          lat: 30.273372549998687
        },
        {
          lng: 119.98265702231888,
          lat: 30.273020463503563
        },
        {
          lng: 119.98348645430329,
          lat: 30.272857062416577
        },
        {
          lng: 119.98635998634279,
          lat: 30.273525133768295
        },
        {
          lng: 119.99282538444766,
          lat: 30.275011391076852
        },
        {
          lng: 119.99299615461253,
          lat: 30.27498074073865
        }
      ],
    };
  },
  watch: {
    'arr': {
      handler: function (val, oldval) {
        console.log('修改后', val, '修改前', oldval);
      },
    },
  },
  computed: {
    shortlyArr () { // 这里我获取arr的首位，第二位，末位
      return [this.arr[0], this.arr[1], this.arr[this.arr.length - 1]]
    }
  },
  methods: {
    changeArr () {
      this.$set(this.arr, 1, {}); //这里改变arr的第二位
      console.log("这是修改之后的数组", this.arr);
    },
  },
  components: {
    'child': () => import('./child')
  }
};
</script>
<style >
p.speech {
  position: relative;
  width: 36px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 20px;
  background-color: #E53C3C;
  border: 1px solid transparent;
  border-radius: 2px;
}
p.speech:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  right: 10px;
  top: 20px;
  border-right: 8px solid #E53C3C;
  border-bottom: 8px solid transparent;
}
</style>