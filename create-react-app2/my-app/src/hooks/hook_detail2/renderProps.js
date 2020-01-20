import React, { Component } from 'react'

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
        {/* { this.props.children(this.state) } */}
      </div>
    );
  }
}

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>
    );
  }
}


export default class RenderProps extends Component {
  render() {
    return (
      <div>
        <Mouse render={
          mouse => <Cat mouse={mouse}></Cat>
        }>
          {/* {
            mouse => <Cat mouse={mouse}></Cat>
          } */}
          {
            // mouse => <p>鼠标的位置是aaaaaa {mouse.x}，{mouse.y}</p>
          }
        </Mouse>
      </div>
    )
  }
}

