<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-02-07 14:37:26
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-02-08 09:13:16
-->
<template>
  <div class="GifButton">
    <div class="blue-btn">
      <div class="apply">申请起飞列表</div>
      <transition name="name1">
        <div class="num"
          v-if="count">{{count}}</div>
      </transition>
      <transition name="name2">
        <div class="num-bg"
          v-if="count"></div>
      </transition>
    </div>
    <transition name="name3">
      <div class="bg-btn" v-if="count"></div>
    </transition>

    <div class="add"
      @click="count++">
      点击加一
    </div>
  </div>
</template>

<script>
export default {
  name: "GifButton",
  data () {
    return {
      count: 0
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () { },
  components: {}
}
</script>

<style scoped >
.GifButton {
  position: absolute;
  left: 50px;
}
.blue-btn {
  width: 108px;
  height: 32px;
  line-height: 32px;
  background: #0b9cdd;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  overflow: hidden;
  position: absolute;
  z-index: 2;
}
.bg-btn {
  width: 108px;
  height: 32px;
  border-radius: 4px;
  background: tomato;
  position: absolute;
  z-index: 0;
}
.apply {
  position: absolute;
  left: 10px;
  z-index: 4;
}
.add {
  position: absolute;
  top: 52px;
}
.num {
  position: absolute;
  z-index: 7;
  top: 10px;
  right: 10px;
  width: 12px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  background-color: tomato;
}
.num-bg {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  width: 12px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  border-radius: 50%;
  color: tomato;
  background-color: tomato;
}
.name1-enter-to,
.name1-leave-to {
  animation: big 0.3s ease-in-out 0s 1 normal;
  -webkit-animation: big 0.3s ease-in-out 0s 1 normal;
}
.name2-enter-to,
.name2-leave-to {
  animation: big2 2s ease-in-out 0.3s 1 normal;
  -webkit-animation: big2 2s ease-in-out 0.3s 1 normal;
}
.name3-enter-to,
.name3-leave-to {
  animation: big3 1s ease-in-out 1s 1 normal;
  -webkit-animation: big3 1s ease-in-out 1s 1 normal;
}
@-webkit-keyframes big {
  0% {
    transform: scale(0);
  }
  10% {
    transform: scale(0.2);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes big2 {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1);
  }
  50% {
    transform: scale(16);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes big3 {
  0% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
