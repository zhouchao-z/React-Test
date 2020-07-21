import React from 'react';
import ReactDOM from 'react-dom';
import MyComp from './Components/MyComp.js';


//自定义组件直接绑定事件处理函数，点击无法触发。
//事件处理函数中的this，默认是undefined。通过bind改变this指向。
const div = <div>click</div>
ReactDOM.render(<MyComp onClick={function() { console.log(this)}}/>, document.getElementById('root'));














