<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-04-22 11:38:21
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-07-29 14:13:29
-->
<template>
  <div class="container">
    <div class="ruler-wrapper">
      <div class="ruler-num">
        <div v-for="(item,index) in vValue"
          :style="{transform: `rotateX(${deg(index)}deg) translateZ(85px)`,color: index==9 ? '#fff' : '#666'}"
          :key="index">{{item}}</div>
      </div>

    </div>
  </div>
</template>

<script>
const vRange = { min: -10, max: 20, scale: 2 };
export default {
  name: 'threeD',
  data () {
    return {}
  },
  computed: {
    vValue () {
      console.log(this.setRangeNum(vRange))
      return this.setRangeNum(vRange);
    },

  },
  watch: {},
  methods: {
    deg (index) {
      return -(index - 9) * 15 % 360
    },
    setRangeNum (range = { min: 0, max: 0, scale: 1 }, reverse = false) {
      let value = new Array((range.max - range.min) / range.scale)
        .fill(0)
        .map((item, index) => range.max - index * range.scale);
      if (reverse) {// 反转数
        value = value.reverse();
      }
      return value;
    },
  },
  mounted () { },
  components: {}
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100vh;
  background-color: #181c1d;
  padding: 500px;
  box-sizing: border-box;
  .ruler-wrapper {
    margin: 0 auto;
    background-color: black;
    width: 28px;
    height: 162px;
    -webkit-perspective: 1200;
    transform: rotateX(15deg);
    // r: 509px;
    // overflow: hidden;
    .ruler-num {
      position: relative;

      div {
        position: absolute;
        width: 14px;
        margin-left: 14px;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>
