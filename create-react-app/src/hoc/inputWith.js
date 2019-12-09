import React, { Component } from 'react'

export default (WrappedComponent) => {
  // return class extends Component{

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: '',
  //     }
  //   }
    
  //   handleChange = (e) => {
  //     this.setState({
  //       value: e.target.value,
  //     })
  //   }

  //   render() {
  //     const newProps = {
  //       value: this.state.value,
  //       onChange: this.handleChange,
  //     }
  //     return <WrappedComponent {...this.props} {...newProps}></WrappedComponent>
  //   }

  // }
  return class extends WrappedComponent{
    render() {
      const elementsTree = super.render();
      let newProps = {};
      const { children } = elementsTree.props;
      let [ input ] = children;
      if(input && input.type === 'input'){
        newProps = { defaultValue: 'force change value' };
      }
      const props = Object.assign({}, input.props, newProps);
      input = <input {...props}></input>;
      let newChildren = [...children];
      newChildren[0] = input;
      const newElementTree = React.cloneElement(elementsTree, elementsTree.props, newChildren);
      // elementsTree.props.children[0] = <input {...props}></input>
      return newElementTree;
    }
  }
}
