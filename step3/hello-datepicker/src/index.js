import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import 'antd/dist/antd.css'
// import { DatePicker } from 'antd';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { DatePicker } from 'antd';



function disabledDate(current) {
  //计算一天的时长
  let onday = Date.parse("2017-8-31") - Date.parse("2017-8-30");
  //设置禁用区间 ：今天——2017-8-31号可选
  return current && (current.valueOf() < (Date.now() - onday) || current.valueOf() > Date.parse("2017-9-1"));
}




ReactDOM.render(
  <div>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      showTime
    />
  </div>,
  document.getElementById('root')
);