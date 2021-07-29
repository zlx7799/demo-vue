<!--
 * @Description: 轮询播放视频
 * @Author: zhoulx
 * @Date: 2021-04-08 17:45:46
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-04-08 18:23:58
-->
<template>
  <div>
    <video class="video"
      id="video"
      :src="currentVideoUrl"
      controls
      autoplay></video>
  </div>
</template>

<script>
const videoUrlList = [
  'https://xyi-web.oss-cn-hangzhou.aliyuncs.com/website-otherInfo/download/video/%E3%80%8C2018%E8%BF%85%E8%9A%81%E7%A7%8B%E5%AD%A3%E5%8F%91%E5%B8%83%E4%BC%9A%E3%80%8D%20-%20%E4%B8%A4%E5%91%A8%E5%B9%B4%E5%9B%9E%E9%A1%BE.mp4',
  'https://xyi-web.oss-cn-hangzhou.aliyuncs.com/website-otherInfo/download/video/%E3%80%8C2018%E8%BF%85%E8%9A%81%E7%A7%8B%E5%AD%A3%E5%8F%91%E5%B8%83%E4%BC%9A%E3%80%8D%20-%20%E6%8F%AD%E7%A7%98%E4%B8%93%E4%B8%BA%E7%89%A9%E6%B5%81%E8%80%8C%E7%94%9F%E7%9A%84RA3%E6%97%A0%E4%BA%BA%E6%9C%BA.mp4',
  'https://xyi-web.oss-cn-hangzhou.aliyuncs.com/website-otherInfo/download/video/%E5%8C%BB%E7%96%97%E6%80%A5%E6%95%91_%E5%9F%8E%E5%B8%82%E5%8C%BB%E7%96%97.mp4'
];
let count = 0
export default {
  name: 'modelVideo',
  data () {
    return {
      currentVideoUrl: videoUrlList[count]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () {
    let video = document.getElementById('video');
    let currentInterval = setInterval(() => {
      console.log(video.ended);
      if (video.ended) {
        count++
        if (count == videoUrlList.length) {
          count = 0
        }
        this.currentVideoUrl = videoUrlList[count]
        // clearInterval(currentInterval);
      }
    }, 5000);
    console.log(currentInterval)
  },
  components: {}
}
</script>

<style scoped>
.video {
  width: 100%;
  outline: none
}
</style>
