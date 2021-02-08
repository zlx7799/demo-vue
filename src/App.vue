<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2020-11-19 07:35:56
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-02-07 16:38:42
-->
<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <GifButton></GifButton>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GifButton from './components/GifButton.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    GifButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
