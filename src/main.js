/*
 * @Description:
 * @Author: zhoulx
 * @Date: 2020-11-19 07:35:56
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-03-22 09:25:48
 */
import Vue from 'vue';
import App from './App.vue';
import Coordtransform from 'coordtransform';
let lng = 119.9166423;
let lat = 30.3879660;
// var marker = new BMap.Marker(new BMap.Point(119.92776608220667, 30.391139373235053)); // 创建点
// var marker2 = new BMap.Marker(new BMap.Point(119.92776951002249, 30.391149769625468)); // 创建点
// let lng = 119.9166388888;
// let lat = 30.387955555;
let _lnglat = Coordtransform.wgs84togcj02(lng, lat);
let curcoordpoint = Coordtransform.gcj02tobd09(_lnglat[0], _lnglat[1]);
console.log('gcj02tobd09', curcoordpoint);
const getDistance = (lat1, lng1, lat2, lng2) => {
  let radLat1 = toRadians(lat1);
  let radLat2 = toRadians(lat2);
  let deltaLat = radLat1 - radLat2;
  let deltaLng = toRadians(lng1) - toRadians(lng2);
  let dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
  return dis * 6378137;

  function toRadians(d) {
    return (d * Math.PI) / 180;
  }
};
console.log(getDistance(30.387955555, 119.9166388888, 30.3879660, 119.9166423))
// function loadResourceError() {
//   window.addEventListener(
//     'error',
//     function(e) {
//       console.log(e, '错误捕获===');
//       if (e) {
//         let target = e.target || e.srcElement;
//         let isElementTarget = target instanceof HTMLElement;
//         if (!isElementTarget) {
//           // js错误
//           console.log('js错误===');
//           // js error处理
//           let { filename, message, lineno, colno, error } = e;
//           let { message: ErrorMsg, stack } = error;
//           console.log(filename, message, lineno, colno, error, ErrorMsg, stack)
//         } else {
//           // 页面静态资源加载错误处理
//           console.log('资源加载错误===');
//           let { type, timeStamp, target } = e;
//           let { localName, outerHTML, tagName, src } = target;
//           console.log(type, timeStamp, target, localName, outerHTML, tagName, src)
//           let typeName = target.localName;
//           console.log(typeName)
//           let sourceUrl = '';
//           if (typeName === 'link') {
//             sourceUrl = target.href;
//           } else if (typeName === 'script') {
//             sourceUrl = target.src;
//           } else if (typeName === 'img') {
//             sourceUrl = target.src;
//           }
//           alert('资源加载失败，请刷新页面或切换网络重试。(' + sourceUrl + ')');
//         }
//       }
//       // 设为true表示捕获阶段调用，会在元素的onerror前调用,在window.addEventListener('error')后调用
//     },
//     true
//   );
// }
// // 我们根据e.target的属性来判断它是link标签，还是script标签。目前只关注只监控了css，js文件加载错误的情况。
// loadResourceError()
// window.onerror = (message, source, lineno, colno, error) => {
//   console.log('监听到产生错误了');
//   console.log(
//     { message },
//     { source },
//     { lineno },
//     { colno },
//     { error },
//     { stack: error.stack }
//   );
//   return true;
// };
// window.addEventListener('unhandledrejection', (event) => {
//   console.log('未捕获', event);
//   event.preventDefault();
// })
// import { a } from './utils/test';
// console.log(a);
Vue.config.productionTip = false;

// Vue.config.errorHandler = (err, vm, info) => {
//   console.log({ err }, err);
//   console.log({ vm }, vm);
//   console.log({ info }, info);
//   console.error(err);
// };
new Vue({
  render: (h) => h(App),
}).$mount('#app');
