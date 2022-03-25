<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2020-11-19 07:35:56
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-03-21 15:55:09
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
    <!-- <list-frame width="1280px" :fps="24" :maxNumLimit="421" :loop="true"></list-frame> -->
    <!-- <test :prop="val"></test> -->
    <!-- <button @click="clickMe">点我</button> -->
    <!-- <recognize></recognize> -->
    <!-- <test-canvas></test-canvas> -->
    <!-- <lab-test></lab-test> -->
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
// import ListFrame from './components/ListFrame.vue'
// import Huan from './components/huan.vue'
// import Huan from './components/image.vue'
// import recognize from '@/components/recognize' 
// import test from '@/components/test' 
// import TestCanvas from '@/components/testCanvas';
// import labTest from '@/components/labTest.vue';
// import {create_csv} from '@/components/create_csv'


export default {
  name: 'App',
  data(){
    return {
      isShow: true,
      val: 0,
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
    // ListFrame
    // recognize
    // labTest
    // test
    // TestCanvas
  },
  methods: {
    // clickMe(){
    //   create_csv();
    // }
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
