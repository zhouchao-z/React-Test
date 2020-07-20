import React from 'react';
import ReactDOM from 'react-dom';
// import src1 from './assets/1.jpg';
// import src2 from './assets/2.jpg';
// import src3 from './assets/3.jpg';
// import './assets/index.css'

import MyFunComp from './components/MyFunComp.js';
import MyClassComp from './components/MyClassComp.js';

const obj = {
  name: 'zc',
  age: 18
};
ReactDOM.render(
    <div>
      <MyFunComp number={3}/>
      {/*<MyClassComp number={8} test/>*/}
      {/*<MyClassComp ui={<p>这是我传递的p元素</p>}/>*/}
      {/*<MyClassComp ui2={<p>这是我传递的第二个p元素</p>}/>*/}
      <MyClassComp obj={ obj } test={2}/>
    </div>,
    document.getElementById('root')
);
// const srcArr = [src1, src2, src3];
//
// const container = document.getElementById('root');
//
//
// let index = 0;
// let timer;
// function render() {
//   ReactDOM.render(<img src={ srcArr[index] } alt=""/>, document.getElementById('root'));
// }
//
// function start() {
//   stop();
//   timer = setInterval(() => {
//     index = (index + 1) % 3;
//     render();
//   }, 2000);
// }
// render();
// start();
//
// function stop() {
//   clearInterval(timer);
// }
//
// container.onmouseenter = function() {
//   stop();
// };
//
// container.onmouseleave = function() {
//   start();
// };











