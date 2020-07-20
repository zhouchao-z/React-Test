import React, { Component } from 'react';
import Student from './Student.js';

export default class StudentList extends Component{
  render() {
    console.log(this.props);
    const studentArr = this.props.studentList.map(item => <Student {...item}/>);
    return (
        <div>
          { studentArr }
        </div>

    )
  }
}
