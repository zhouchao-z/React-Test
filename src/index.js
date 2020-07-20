import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';
import './assets/index.css'


const srcArr = [src1, src2, src3];

const container = document.getElementById('root');


let index = 0;
let timer;
function render() {
  ReactDOM.render(<img src={ srcArr[index] } alt=""/>, document.getElementById('root'));
}

function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}
render();
start();

function stop() {
  clearInterval(timer);
}

container.onmouseenter = function() {
  stop();
};

container.onmouseleave = function() {
  start();
};











