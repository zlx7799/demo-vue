/*
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-03-05 11:36:19
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-11-18 17:01:42
 */
const fs = require('fs'); // 引入fs模块
const moment = require('moment');
const Json2csvParser = require('json2csv').Parser;
const fields = ['lng', 'lat']; // 表头
import { Request } from './request';

let myData = null;

export let create_csv = () => {
  // let params = {
          // token: localStorage.getItem('token'),
          // ...this.form
          // }
          let form = {nodes_c: JSON.stringify([{"POS": [118.6617928, 37.86453926], "NUM_AIRPORTS": 1}, {"POS": [118.6200608, 37.8814139], "NUM_AIRPORTS": 1}, {"POS": [118.5778973, 37.89872151], "NUM_AIRPORTS": 1}, {"POS": [118.6164931, 37.9002771], "NUM_AIRPORTS": 1}]),
            airports_nodes_c: JSON.stringify({"1": [2, 1], "2": [3, 1], "3": [4, 1], "4": [5, 1]}),
            order_c: JSON.stringify([{"NODES": [1, 2], "NUM_ORDERS": 4, "TIME_RANGE": [0, 1210], "CARGO_PREPARE_TIME": 60}, {"NODES": [1, 2], "NUM_ORDERS": 5, "TIME_RANGE": [0, 1210], "CARGO_PREPARE_TIME": 60}, {"NODES": [1, 3], "NUM_ORDERS": 3, "TIME_RANGE": [0, 1210], "CARGO_PREPARE_TIME": 60}, {"NODES": [1, 4], "NUM_ORDERS": 5, "TIME_RANGE": [0, 1210], "CARGO_PREPARE_TIME": 60}]),
            other_c: JSON.stringify({"NUM_UAVS": 4, "SPEED_CRIUSE": 15, "NUM_STANDBY_PARKINGS": 15, "MIN_DISTANCE_NODE_NODE": 220, "MIN_DISTANCE_APT_APT": 30, "MAX_DISTANCE_NODE_APT": 70, "DISTANCE_UNIT": 10, "XY_RANGE": [[0, 1000], [0, 1000]]}),
            airline_c: JSON.stringify([{"START_NODE_ID": 1, "END_NODE_ID": 2, "AIRLINE_LENGTH": 6500, "BATTERY_CONSUME_EMPTY": 40, "BATTERY_CONSUME_LOADED": 55}, {"START_NODE_ID": 2, "END_NODE_ID": 3, "AIRLINE_LENGTH": 5200, "BATTERY_CONSUME_EMPTY": 35, "BATTERY_CONSUME_LOADED": 46}, {"START_NODE_ID": 1, "END_NODE_ID": 3, "AIRLINE_LENGTH": 7200, "BATTERY_CONSUME_EMPTY": 55, "BATTERY_CONSUME_LOADED": 76}, {"START_NODE_ID": 1, "END_NODE_ID": 4, "AIRLINE_LENGTH": 7200, "BATTERY_CONSUME_EMPTY": 55, "BATTERY_CONSUME_LOADED": 76}]),
            uuid: 42812300,
            email: 'zhoulx917@foxmail.com',
            tel_num: '18322727224',
            name: '1'}
          Object.keys(form).forEach(key => params.append(key, form[key]));
  let request = ('http://antlink-debug.xyitech.com/cost_model/generate_case', params, { isLoading: true, formData: true});
  request.then(res => {
    console.log(res)
  })
}
// let myData = fs.readFileSync('./lat.json');  // 读取json信息

// // 处理时间
// function changeTime (val) {
//   if (!val) {
//     return ''
//   }
//   return moment(val * 1000).format('HH:mm:ss')
// }
// let orderList = JSON.parse(myData);
// orderList = orderList.map((item, index) => {
//   return {
//     lat: item.lat,
//     lng: item.lng,
//   }
// })


// const json2csvParser = new Json2csvParser({ fields });
// const csv = json2csvParser.parse(orderList);
// fs.writeFile("./data.csv", csv, function(err) {
//   if(err) {
//       return console.log(err);
//   }
  
//   console.log("The file was saved!");
// });