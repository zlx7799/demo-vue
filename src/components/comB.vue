<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-03-10 17:01:12
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-03-10 17:05:27
-->
<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "comB",
  data(){
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  components: {},
  beforeCreate(){
    console.log("comB---beforeCreate");
  },
  created(){
    console.log("comB---Created");

  },
  beforeMount(){
    console.log("comB---beforeMount");
  },
  mounted(){
    console.log("comB---mounted");
  },
  beforeUpdate(){
    console.log("comB---beforeUpdate");
  },
  updated(){
    console.log("comB---updated");
  },
  beforeDestroy(){
    console.log("comB---beforeDestroy");
  },
  destroyed(){
    console.log("comB---destroyed");
  },
}
</script>

<style scoped>

</style>
