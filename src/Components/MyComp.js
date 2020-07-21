import React, {Component} from 'react';
export default class MyComp extends Component{
  render() {
    return (
        <div onClick={this.props.onClick.bind(this)}>点击我</div>
    )
  }
}

