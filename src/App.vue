<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2020-11-19 07:35:56
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-08-26 16:51:38
-->
<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <GifButton></GifButton> -->
    <!-- <com-a v-if="isShow"></com-a>
    <com-b v-else></com-b> -->
    <!-- <model-video></model-video> -->
    <!-- <changeList></changeList> -->
    <!-- <button @click="isShow =!isShow">点击</button> -->
    <!-- <throttle></throttle> -->
    <!-- <huan></huan> -->
    <!-- <loop></loop> -->
    <!-- <threeD></threeD> -->
    <list-frame width="1280px" :fps="24" :maxNumLimit="421" :loop="true"></list-frame>

  </div>
</template>

<script>
// import Huan from './components/huan.vue'
// import Loop from './components/loop.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import GifButton from './components/GifButton.vue'
// import comA from './components/comA.vue'
// import comB from './components/comB.vue'
// import changeList from './components/changeList.vue'
// import modelVideo from './components/model-video.vue'
// import throttle from './components/throttle.vue'
// import threeD from './components/threeD.vue'
import ListFrame from './components/ListFrame.vue'
// import Huan from './components/huan.vue'
// import Huan from './components/image.vue'



export default {
  name: 'App',
  data(){
    return {
      isShow: true
    }
  },
  components: {
    // HelloWorld,
    // GifButton,
    // comA,
    // comB
    // changeList
    // modelVideo
    // throttle,
    // Huan,
    // Loop
    // threeD,
    ListFrame
  }
}
</script>

<style>
@import './assets/normalize.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
