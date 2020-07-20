import React from 'react';
import ReactDOM from 'react-dom';

import Student from './Components/Student.js';
import StudentList from './Components/StudentList.js';

const appkey = 'zhouchao_1553863350625c';
async function fetchAllStudent() {
  var stus = await fetch('http://open.duyiedu.com/api/student/findAll?appkey=zhouchao_1553863350625')
      .then(resp => resp.json()).then(resp => resp.data);
  return stus;
}

async function render() {
  ReactDOM.render(<div>正在加载中....</div>, document.getElementById('root'));
  const studentList = await fetchAllStudent();
  ReactDOM.render(<StudentList studentList={studentList}/>, document.getElementById('root'))
}

render();













