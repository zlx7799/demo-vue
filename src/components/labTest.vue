<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2022-01-13 14:43:12
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-01-13 18:03:05
-->

<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="经度">
        <el-input v-model="form.lng"></el-input>
      </el-form-item>
      <el-form-item label="纬度">
        <el-input v-model="form.lat"></el-input>
      </el-form-item>
      <el-form-item label="角度">
        <el-input v-model="form.lat"></el-input>
      </el-form-item>
      <el-form-item label="长度">
        <el-input v-model="form.length"></el-input>
      </el-form-item>
      <el-form-item label="宽度">
        <el-input v-model="form.width"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'labTest',
  data(){
    return {
      form:{

      }
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted(){},
  components: {}
}
</script>

<style scoped>

</style>
