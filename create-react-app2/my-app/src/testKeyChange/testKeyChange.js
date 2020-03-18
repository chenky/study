import React, { Component } from 'react'

export default class TestKeyChange extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: 1,
    }
  }

  handleChange=(e)=>{
    const newKey = e.target.value;
    console.log('newKey'+newKey);
    this.setState({
      key: newKey,
    })
  }

  render() {
    const {key} = this.state;
    return (
      <div>
        <input key={key} onChange={this.handleChange} value={key}></input>
      </div>
    )
  }
}
