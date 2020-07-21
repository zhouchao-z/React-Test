import React, { Component } from 'react';
import './ball.css';
export default class Ball extends Component {

  constructor(props) {
    super(props);
    //需要改变的属性放到state里面。
    this.state = {
      left: this.props.left || 0,
      top: this.props.top || 0,
      xSpeed: this.props.xSpeed,
      ySpeed: this.props.ySpeed
    };
    const duration = 15;
    setInterval(() => {
      const xDis = this.state.xSpeed * duration / 1000;  //每毫秒移动的距离 * 运动时间。
      const yDis = this.state.ySpeed * duration / 1000;
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;

      //到达墙壁，速度反向。
      if(newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      } else if(newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      }

      if(newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed
        });
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      }

      //通过定时器，每隔一段时间改变距离，达到运动的效果。
      this.setState({
        left: newLeft,
        top: newTop
      })
    }, duration);


  }
  render() {
    return (
        <div className="ball" style={{
          background: "#" + this.props.bg,
          left: this.state.left,
          top: this.state.top
        }}>

        </div>
    )
  }
}
