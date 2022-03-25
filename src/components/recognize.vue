<!--
 * @Description: 识别区demo
 * @Author: zhoulx
 * @Date: 2021-09-18 09:40:48
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-02-18 14:50:25
-->
<template>
  <div>
    <div>
      <img :src="item.src"
        alt=""
        v-for="(item, index) in imageTargetList"
        :key="index">
    </div>
    <!-- <img src="https://express-image.oss-cn-hangzhou.aliyuncs.com/imgs/big_screen_map.svg" alt=""> -->
    <button @click="test">点击</button>
  </div>
</template>

<script>
import { toByteArray, fromByteArray } from '../libs/base64';
import imagejson from '../const/image.json';
import {a, test} from '../utils/test.js';
function FillString (t, c, n, b) {
  if ((t == "") || (c.length != 1) || (n <= t.length)) {
    return t;
  }
  let l = t.length;
  for (let i = 0; i < n - l; i++) {
    if (b == true) {
      t = c + t;
    }
    else {
      t += c;
    }
  }
  return t;
}
function FormatHexBatch (arr) {
  let hexArr = arr.map(ele => ele.toString(16)); // 十进制转十六进制
  let hexString = '';
  hexArr.reverse().forEach(num => {
    if (num.toString().length < 2) {
      num = '0' + num;
    }
    hexString += num;
  })
  return hexString;
}
function HexToSingle (t) {
  t = FormatHexBatch(t);
  t = t.replace(/\s+/g, "");
  console.log('HexToSingle', t)
  if (t == "") {
    return "";
  }
  if (t == "00000000") {
    return "0";
  }
  if ((t.length > 8) || (isNaN(parseInt(t, 16)))) {
    return "Error";
  }
  if (t.length < 8) {
    t = FillString(t, "0", 8, true);
  }
  t = parseInt(t, 16).toString(2);
  t = FillString(t, "0", 32, true);
  let s = t.substring(0, 1);
  let e = t.substring(1, 9);
  let m = t.substring(9);
  e = parseInt(e, 2) - 127;
  m = "1" + m;
  if (e >= 0) {
    m = m.substr(0, e + 1) + "." + m.substring(e + 1)
  }
  else {
    m = "0." + FillString(m, "0", m.length - e - 1, true)
  }
  if (m.indexOf(".") == -1) {
    m = m + ".0";
  }
  let a = m.split(".");
  let mi = parseInt(a[0], 2);
  let mf = 0;
  for (let i = 0; i < a[1].length; i++) {
    mf += parseFloat(a[1].charAt(i)) * Math.pow(2, -(i + 1));
  }
  m = parseInt(mi) + parseFloat(mf);
  if (s == 1) {
    m = 0 - m;
  }
  return m;
}
export default {
  name: 'recognize',
  data () {
    return {
      imagejson: imagejson, // 监控传图爬取数据
      imageTargetList: [],
      a: a,
      test: test
    }
  },
  computed: {},
  watch: {},
  methods: {
    getLatLngAlt (arr) {
      console.log('value', this.getValue(arr.slice(120, 124),), arr.slice(120, 124), arr);
      const lat = this.getValue(arr.slice(32, 36)) / 10000000 || 0;
      const lng = this.getValue(arr.slice(36, 40)) / 10000000 || 0;
      const alt = this.getValue(arr.slice(40, 44)) / 10000000 || 0;
      console.log({ lat, lng, alt });
      return { lat, lng, alt };
    },
    getValue (arr) {
      console.log('二进制', arr)
      let nums16 = arr.map(ele => ele.toString(16)); // 十进制转十六进制
      let string16 = '';
      // nums16 = ['00','00','8C', '3E'];
      // nums16 = ['BC','BB','7B', '3F'];
      console.log('十六进制', nums16);
      console.log('十六进制翻转', nums16.reverse());
      nums16.reverse().forEach(num => {
        if (num.toString().length < 2) {
          num = '0' + num;
        }
        string16 += num;
      })
      console.log('解析16进制', string16, parseInt(string16, 16));
      return parseInt(string16, 16);
    },


    // getRecognize (arr) {
    //   console.log('value', arr.slice(120, 152), arr);
    //   const x0 = this.hex2float(this.getFloat(arr.slice(120, 124)));
    //   const y0 = this.hex2float(this.getFloat(arr.slice(124, 128)));
    //   const x1 = this.hex2float(this.getFloat(arr.slice(128, 132)));
    //   const y1 = this.hex2float(this.getFloat(arr.slice(132, 136)));
    //   const x2 = this.hex2float(this.getFloat(arr.slice(136, 140)));
    //   const y2 = this.hex2float(this.getFloat(arr.slice(140, 144)));
    //   const x3 = this.hex2float(this.getFloat(arr.slice(144, 148)));
    //   const y3 = this.hex2float(this.getFloat(arr.slice(148, 152)));
    //   console.log({ x0, y0, x1, y1, x2, y2, x3, y3 })
    //   return { x0, y0, x1, y1, x2, y2, x3, y3 };
    // },
    getRecognize (arr) {
      // console.log('value', arr.slice(120, 152), arr);
      const x0 = HexToSingle(arr.slice(120, 124));
      const y0 = HexToSingle(arr.slice(124, 128));

      const x1 = HexToSingle(arr.slice(128, 132));
      const y1 = HexToSingle(arr.slice(132, 136));

      const x2 = HexToSingle(arr.slice(136, 140));
      const y2 = HexToSingle(arr.slice(140, 144));

      const x3 = HexToSingle(arr.slice(144, 148));
      const y3 = HexToSingle(arr.slice(148, 152));
      console.log({ x0, y0, x1, y1, x2, y2, x3, y3 })
      return { x0, y0, x1, y1, x2, y2, x3, y3 };
    },

    // 3f 41 00 00 

    // getHex(arr){
    //   let nums16 = arr.map(ele => ele.toString(16)); // 十进制转十六进制

    // },

    // hex2float (num) {
    //   //符号位
    //   let sign = (num & 0x80000000) ? -1 : 1;
    //   //指数位
    //   let exponent = ((num >> 23) & 0xff) - 127;
    //   //尾数位
    //   let mantissa = 1 + ((num & 0x7fffff) / 0x7fffff);
    //   return sign * mantissa * Math.pow(2, exponent);
    // },
    // getFloat (bytes) {
    //   console.log({bytes})
    //   return ((bytes.reverse()[0] & 0xFF) << 24) |
    //     ((bytes.reverse()[1] & 0xFF) << 16) |
    //     ((bytes.reverse()[2] & 0xFF) << 8) |
    //     (bytes.reverse()[3] & 0xFF);
    // },
    FormatHexBatch (arr) {
      console.log('二进制', arr)
      let nums16 = arr.map(ele => ele.toString(16)); // 十进制转十六进制
      let string16 = '';
      // nums16 = ['00','00','8C', '3E'];
      // nums16 = ['BC','BB','7B', '3F'];
      console.log('十六进制', nums16);
      // console.log('十六进制翻转', nums16.reverse());
      // nums16.reverse()
      // console.log({nums16})
      nums16.reverse().forEach(num => {
        if (num.toString().length < 2) {
          num = '0' + num;
        }
        console.log(num);
        string16 += num;
      })
      console.log('解析16进制', string16);
      return string16;
    },
    getsrc () {
      let image_list = this.imagejson.image_list;
      let imageTargetList = image_list.map(imageItem => {
        let src = [];
        console.log('toByteArray', toByteArray(imageItem.img_piece_data), this.stringToArrayBuffer(imageItem.img_piece_data))
        let imgSrc = src.concat(Array.from(toByteArray(imageItem.img_piece_data))); // 得到整个图片路径
        // this.getLatLngAlt(imgSrc);
        this.getRecognize(imgSrc);
        imageItem.src = 'data:image/jpg;base64,' + fromByteArray(imgSrc); // 得到base64路径
        // console.log(imageItem.src);
        return imageItem
      })
      return imageTargetList
    },
    stringToArrayBuffer (str) {
      let val = ""
      if (!str) return;
      let length = str.length;
      let index = 0;
      let array = []
      while (index < length) {
        array.push(str.substring(index, index + 2));
        index = index + 2;
      }
      val = array.join(",");
      // 将16进制转化为ArrayBuffer
      return new Uint8Array(val.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)
      })).buffer
    },
    clickPoint(){
      // throw new Error('错了')
      let obj = {};
      console.log(obj.err.length);
    },
  },
  mounted () {
    // setTimeout(() => {
    //   a = 1;      
    // }, 2000);
    // this.imageTargetList = this.getsrc();
    // console.log(this.imagejson);
  },
  components: {}
}
</script>

<style scoped>
</style>
