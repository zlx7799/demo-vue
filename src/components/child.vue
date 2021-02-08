<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-01-25 10:38:20
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-01-26 09:09:55
-->
<template>
  <div>
    <div>{{this.arr}}</div>
  </div>
</template>

<script>
export default {
  name: "child",
  data(){
    return {}
  },
  props:{
    arr:{
      type: Array,
    }
  },
  computed: {},
  watch: {
    arr: {
      handler (val, oldVal) {
        console.log("监听到值得变化了", val, oldVal)
      },
      deep: true
    }
  },
  methods: {},
  mounted(){},
  components: {}
}
</script>

<style scoped>

</style>
