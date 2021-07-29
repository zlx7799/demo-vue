<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-03-10 17:01:12
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-03-22 15:50:09
-->
<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "comA",
  data(){
    return {
      timeStamp: 0
    }
  },
  computed: {},
  watch: {
    timeStamp: {
      handler(newVal){
        console.log(newVal);
      }
    }
  },
  methods: {},
  components: {},
  beforeCreate(){
    console.log("comA---beforeCreate");
  },
  created(){
    console.log("comA---Created");

  },
  beforeMount(){
    console.log("comA---beforeMount");
  },
  mounted(){
    console.log("comA---mounted");
    setTimeout(() => {
      
    }, 10000);
  },
  beforeUpdate(){
    console.log("comA---beforeUpdate");
  },
  updated(){
    console.log("comA---updated");
  },
  beforeDestroy(){
    console.log("comA---beforeDestroy");
  },
  destroyed(){
    console.log("comA---destroyed");
  },
}
</script>

<style scoped>

</style>
