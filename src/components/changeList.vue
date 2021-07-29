<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-03-29 18:04:29
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-03-29 18:12:21
-->
<template>
  <div>
    <button @click="changeList">点击切换数组</button>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.id}}-----{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import list1 from './list1.json';
import list2 from './list2.json';
export default {
  name: "changeList",
  data(){
    return {
      list: JSON.parse(JSON.stringify(list1))
    }
  },
  computed: {},
  watch: {},
  methods: {
    changeList(){
      this.list = JSON.parse(JSON.stringify(list2)) 
    }
  },
  mounted(){},
  components: {}
}
</script>

<style scoped>

</style>
