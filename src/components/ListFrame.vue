<template>
  <div class="ListFrames"
    :style="{'width': width}">
    <img class="target-img"
      :src="src"
      alt="">
  </div>
</template>

<script>
export default {
  name: 'ListFrames',
  props: {
    width: String,
    maxNumLimit: Number, // 图片最大数量
    fps: Number, // 帧数
    loop: { // 是否无限循环
      type: Boolean,
      default: () => false,
    }
  },
  data () {
    return {
      src: '',
      index: 1,
    }
  },
  computed: {},
  watch: {},
  methods: {
    play(){
      this.mockSetTimeOut(() => {
        if(this.index == this.maxNumLimit + 1){
          this.index == 1;
        }
        this.src = require(`../assets/rh1/rh1_${this.index}.png`);
        this.index++;
        this.play();
      }, (1000 / this.fps));
    },
    mockSetTimeOut (cb, time = 0) {
      let t = 0;
      let timer = () => {
        t += 1;
        if ((t * (1000 / 60)) > time) {
          cb();
          cancelAnimationFrame(timer);
        } else {
          requestAnimationFrame(timer);
        }
      }
      requestAnimationFrame(timer);
    },

  },
  mounted () {
    this.play();
  },
  components: {}
}
</script>

<style scoped lang="less">
.ListFrames {
  .target-img {
    width: 100%;
  }
}
</style>
