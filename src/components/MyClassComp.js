import React, { Component } from 'react';

export default class MyClassComp extends Component {
  constructor(props) {
    super(props);  //this.props = props
  }
  render() {
    console.log(this.props.obj.name);
    this.props.obj.name = 'adsf';
    if(this.props.ui) {
      return (
          <div>
            { this.props.ui }
          </div>
      )
    } else if (this.props.ui2) {
      return this.props.ui2;
    }
    return <div>{ this.props.obj.name }</div>



  }
}
