import React, {Component} from 'react';
export default class Test extends Component{

  state = {
    n: 123
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        n: this.state.n - 1
      })
    }, 1000)
  }
  render() {
    return (
      <div>
        <B n={this.state.n}/>
      </div>
    )
  }
}

function B(props) {
  return (
      <div>
        b组件：{ props.n }
        <C n={ props.n }/>
      </div>
  )
}
function C(props) {
  return (
      <h1>
        c组件：{ props.n }
      </h1>
  )
}
