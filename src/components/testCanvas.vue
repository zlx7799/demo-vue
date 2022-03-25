<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-10-12 16:20:00
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-10-12 16:49:14
-->
<template>
  <div>
    <canvas ref="rh1Canvas" ></canvas>
  </div>
</template>

<script>
export default {
  name: 'TestCanvas',
  data(){
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mounted(){
    let canvas = this.$refs.rh1Canvas;
    let ctx = canvas.getContext('2d'); // 获取canvas对象
    const width = document.body.clientWidth;
    const height = width * 50 / 148;
    if (window.devicePixelRatio) {
      ctx.canvas.style.width = width + 'px';
      ctx.canvas.style.height = height + 'px';
      ctx.canvas.width = width * window.devicePixelRatio;
      ctx.canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    let image = new Image();
    image.src = 'https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RH1/rh1_img_webp/rh1_1.webp?x-oss-process=image/format,jpg'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, width, height);
      console.log(ctx, image)
    }
  },
  components: {}
}
</script>

<style scoped>

</style>
