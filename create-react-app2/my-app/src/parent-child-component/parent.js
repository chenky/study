import React, { Component } from 'react'
import Child from './child';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state={
      a: "a",
      b: "b",
      c: "c"
    };
  }
  
  handleClick=()=>{
    this.setState({
      c: "ccc"
    })
  }

  render() {
    const {a,b,c} = this.state;
    console.log("parent rendered")
    return (
      <div>
        <Child a={a} b={b}></Child>
    <div>c is {c}</div>
        <div onClick={this.handleClick}>test</div>
      </div>
    )
  }
}
