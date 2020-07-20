import React, { Component } from 'react';
export default class Tick extends Component{
  constructor(props) {
    super(props);
    this.state = {
      left: this.props.number
    };
    setInterval(() => {
      this.setState({
        left: this.state.left+1
      })
    }, 1000);
  }

  render() {
    return (
        <h1>剩余时间：{ this.state.left }</h1>
    )
  }
}


