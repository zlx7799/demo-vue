<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-09-23 16:14:49
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-09-23 17:42:01
-->

<template>
  <div>
  </div>
</template>

<script>
// import EventBus from '@/common/components/EventBus'

export default {
  name: 'MapDistance',
  data(){
    return {
      isMeasure: false,
      clear: 0,
    }
  },
  props: {
    prop: {

    }
  },
  computed: {},
  watch: {
    prop(newVal){
      console.log('newVal', newVal)
    },
    isMeasure(newVal, oldVal){
      console.log('neaVal this.isMeasure', newVal, oldVal)
    },
    clear(newVal, oldVal){
      console.log('neaVal this.clear', newVal, oldVal)
    },
  },
  methods: {},
  mounted(){
    // setInterval(() => {
    //   console.log('+++', this.clear)
    //   this.clear++;
    // }, 2000);
    // const self = this;
    // EventBus.$on('measureChanged', (msg) => {
    //   console.log('Eventbus newVal', msg)
    //   self.isMeasure = msg;
    // })

    // EventBus.$on('isClearChanged', (msg) => {
    //   console.log('Eventbus newVal 清除测距', self.clear)
    //   self.clear++;
    // })
  },
  components: {}
}
</script>

<style scoped>

</style>
