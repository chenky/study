import React, { Component } from 'react';
import Input from './input';

export default class TestInputHOC extends Component {
  render() {
    return <Input data-test="test"></Input>
  }
}
