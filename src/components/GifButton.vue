<!--
 * @Description: 强提醒动画按钮
 * @Author: zhoulx
 * @Date: 2021-02-07 14:37:26
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-03-10 17:07:56
-->
<template>
  <div class="GifButton">
    <div class="blue-btn">
      <div 
        :style="{left: count ? '10px': '18px'}"
        class="apply">申请起飞列表</div>
      <transition name="font">
        <div class="num"
          v-if="showAnimation">{{count || ''}}</div>
      </transition>
      <transition name="circle">
        <div class="num-bg"
          v-if="showAnimation"></div>
      </transition>
    </div>
    <transition name="back">
      <div class="bg-btn" v-if="showAnimation"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "GifButton",
  data () {
    return {
      showAnimation: false
    }
  },
  props:{
    count: {
      type: Number,
      default: () => 0
    }
  },
  computed: {},
  watch: {
    count:{
      handler(){
        this.playAnimation();
      }
    }
  },
  methods: {
    playAnimation(){
      this.showAnimation = false;
      this.$nextTick(() => {
        this.showAnimation = true;
      });
    }
  },
  mounted () { },
  components: {}
}
</script>

<style scoped >
.GifButton {
  position: absolute;
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
.font-enter-to {
  animation: fontChangeBig 2.6s ease 0s 1 normal;
  -webkit-animation: fontChangeBig 2.6s ease 0s 1 normal;
}
.circle-enter-to {
  animation: circleAnimation 2.6s ease-in-out 0s 1 normal;
  -webkit-animation: circleAnimation 2.6s ease-in-out 0s 1 normal;
}
.back-enter-to {
  animation: backAnimation 0.3s ease-in 0.7s 1 normal;
  -webkit-animation: backAnimation 0.3s ease-in 0.7s 1 normal;
}
@-webkit-keyframes fontChangeBig {
   0% {
    transform: scale(0);
  }
  30% {
    transform: scale(1);
  }
  75% {
    transform: scale(1);
  }
  92% {
    transform: scale(0.7);
  }
  96% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes circleAnimation {
  0% {
    transform: scale(0);
  }
  30% {
    transform: scale(16);
  }
  75% {
    transform: scale(16);
  }
  92% {
    transform: scale(0.7);
  }
  96% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes backAnimation {
  0% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
