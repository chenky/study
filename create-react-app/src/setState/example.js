import React, { Component } from "react";
export default class Example extends Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 1 次输出
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 第 2 次输出
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 3 次输出
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 4 次输出
    }, 0);
  }
  render() {
    return null;
  }
}
