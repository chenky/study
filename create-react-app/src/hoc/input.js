import React, { Component } from 'react';
import InputWith from './inputWith';

class Input extends Component {
  render() {
    const { value } = this.props;
    return (
      <>
        <input {...this.props}></input>
        <label>{value}</label>
      </>
    )
  }
}

export default InputWith(Input);
