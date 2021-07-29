<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-04-22 11:38:21
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-07-29 14:18:22
-->
<template>
  <div class="container">
    <div class="ruler-wrapper">
      <div class="line"></div>
      <div class="ruler-num-container">
        <!-- <div class="trans"> -->

        <div class="num"
          v-for="(item,index) in vValue"
          :style="{transform: `rotateX(${deg(index)}deg) translateZ(80px)`}"
          :key="index">
          {{item == -8 ? '' : item}}
        </div>
        <div v-for="(line,childIndex) in 45 "
          :key="childIndex + '-'"
          :style="{transform: `rotateX(${lineDeg(childIndex)}deg) rotateY(30deg) rotateZ(90deg) translateZ(80px) translateY(25px)`}"
          class="chlid-line"></div>
        <!-- </div> -->
      </div>

    </div>
  </div>
</template>

<script>
const vRange = { min: -10, max: 8, scale: 2 };
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
      return -(index - 3) * 45 % 360
    },
    lineDeg(index) {
      return -(index - 3) * 9 % 360
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
    position: relative;
    // r: 509px;
    overflow: hidden;
    -webkit-perspective: 1200;
    .line {
      position: absolute;
      top: 0;
      right: 10px;
      width: 1px;
      height: 162px;
      background-color: #fff;
    }
    .ruler-num-container {
      // top: 50%;
      -webkit-transform-style: preserve-3d;
      transform: rotateX(0deg);
      position: absolute;
      height: 40px;
      top: 50%;
      margin-top: -20px;
      // .trans {
      //   background-color: blue;
      //   position: absolute;
      //   width: 24px;
      //   height: 162px;
      //   transform: translate3d(0px, 0px, 0px);
      .num {
        -webkit-backface-visibility: hidden;
        position: absolute;
        width: 14px;
        line-height: 40px;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        color: #fff;
      }
      .chlid-line {
        -webkit-backface-visibility: hidden;
        position: absolute;
        margin-top: 20px;
        width: 1px;
        height: 4px;
        background-color: #fff;
      }
    }
    // }
  }
}
</style>
