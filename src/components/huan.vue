<!--
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-04-20 16:34:12
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-05-29 14:47:24
-->
<template>
  <div>
    <canvas id="canvas"
      width="300px"
      height="500px"></canvas>
    <button @click="draw2">点击</button>
  </div>
</template>

<script>
export default {
  name: 'huan',
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    draw () {
      // var canvas = document.getElementById("canvas");
      // var ctx = canvas.getContext('2d');
      // ctx.lineWidth = 1;

      // ctx.beginPath(); // 开一条新路
      // // ctx.moveTo(170, 120);

      // var grd = ctx.createLinearGradient(0, 170, 170, 0);
      // grd.addColorStop("0", "#191C1D");
      // grd.addColorStop("0.4", "#B82121");
      // grd.addColorStop(1, "#B82121");
      // ctx.strokeStyle = grd;
      // ctx.arc(120, 120, 90,  Math.PI * 2 / 3, 0, false);
      // ctx.stroke(); // 画圆
      var canvas = document.getElementById("canvas");
      var ctx1 = canvas.getContext('2d');
      ctx1.lineWidth = 7;

      function draw (ctx, x) {
        ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        // ctx.strokeStyle = '#ff4444';
        if (x < Math.PI * 5 / 2) {
          x += 0.05;
        } else {
          x = Math.PI * 3 / 2;
        }
        ctx.arc(80, 30, 50, 0, Math.PI * 2, false); // 顺时针
        ctx.stroke();
        // ctx.beginPath();
        // ctx.strokeStyle = '#000';
        // ctx.arc(200, 80, 50, 0, x, true); // 逆时针
        // ctx.stroke();
        // requestAnimationFrame(function () {
        //   draw(ctx, x);
        // });
      }

      // requestAnimationFrame(function () {
      draw(ctx1, Math.PI * 3 / 2);
      // });

    },
    drawLTEArc () {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'RGBA(0, 155, 140, 1)';
      ctx.beginPath();
      // ctx.arc(CENTER_OF_CIRCLE.x, CENTER_OF_CIRCLE.y, r, startAngle, endAngle, false); // 顺时针
      ctx.arc(80, 80, 50, Math.PI * 3 / 2, Math.PI * 5 / 2, false); // 顺时针
      ctx.stroke();
      // console.log(startAngle, endAngle, r, index, ctx, CENTER_OF_CIRCLE.x, CENTER_OF_CIRCLE.y);
    },
    draw2 () {
      let canvas = document.querySelector('canvas')
      let ctx = canvas.getContext('2d');
      let angle = 0
      ctx.translate(150, 150)//移动坐标原点
      setInterval(() => {
        angle += Math.PI / 180//弧度，Math.PI/180等于1°
        ctx.rotate(angle)//根据原点旋转
        ctx.strokeRect(-50, -50, 100, 100);
      }, 500);
    }
  },
  mounted () {
  },
  components: {}
}
</script>

<style scoped>
</style>
