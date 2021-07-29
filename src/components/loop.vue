<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-04-21 13:32:21
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-04-21 15:56:43
-->
<template>
  <div class="out-container">
    <div>
      <div 
      class="container"
      :style="{transform: `translateX(${data}px)`, transition: `${transition}`}"
      >
      <div class="left">
        <span>0</span>
        <span>15</span>
        <span>20</span>
        <span>25</span>
      </div>
      <div class="mid">
        <span>0</span>
        <span>15</span>
        <span>20</span>
        <span>25</span>
      </div>
      <div class="right">
        <span>0</span>
        <span>15</span>
        <span>20</span>
        <span>25</span>
      </div>
    </div>
    </div>
    <div class="pointer">
      |
    </div>
    <button @click="left">左移</button>
    <button @click="right">右移</button>
  </div>
</template>

<script>
export default {
  name: 'loop',
  data(){
    return {
      data: -185,
      transition: '1s'
    }
  },
  computed: {},
  watch: {
    data(newVal){
      console.log(newVal)
      if(newVal == -345||newVal== 25){
        this.transition = 'none'
        this.data = 25;
      } else{
        this.transition = '1s'
      }
    }
  },
  methods: {
    left(){
      this.data -= 40
    },
    right(){
      this.data += 40
    }
  },
  mounted(){},
  components: {}
}
</script>

<style scoped>
.out-container{
  width: 320px;
  overflow: hidden;
  background-color: royalblue;
}
.container{
  width: 960px;
  display: flex;
  transition: 0.3s;
}
.left{
  /* background-color: salmon; */
}
.mid{
  /* background-color: red; */
}
.right{
  /* background-color: seagreen; */
}
span{
  display: inline-block;
  width: 50px;
  margin-right: 30px;
}
</style>

