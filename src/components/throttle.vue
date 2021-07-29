<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-04-20 10:10:07
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-04-20 12:01:58
-->
<template>
  <div class="throttle">
    <div class="pointer"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "throttle",
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () { },
  components: {}
}
</script>

<style scoped>
.throttle {
  width: 202px;
  height: 2px;
  transform: rotate(20deg);
  position: relative;
}
.circle{
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  left: 96px;
  top: -4px;
}
.pointer{
  width: 101px;
  position: relative;
  background-color: tomato;
}
.pointer::after{
  display: block;
  content: "";
  width: 20px;
  height: 2px;
  background-color: blue;
  position: relative;
  right: -101px;
}

</style>
