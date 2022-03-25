
/*
 * @Description: 
 * @Author: zhoulx
 * @Date: 2022-02-17 16:13:00
 * @LastEditors: zhoulx
 * @LastEditTime: 2022-02-18 14:49:21
 */
export const a = 2;
// let obj = {};
// console.log(obj.err.length);
export const test = () => {
  // let obj = {};
  // console.log(obj.err.length);
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1)
    }, 2000);
  });
}