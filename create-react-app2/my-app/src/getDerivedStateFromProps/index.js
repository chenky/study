import React, { Component } from 'react'

const ShowCount = (props) => {
return <div>show count component {props.count}</div>
}

class Child extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      lastCount: props.count,
    }
  }

  /**
   * 
    与 componentWillUpdate 类似，componentWillReceiveProps 可能在一次更新中被多次调用。
    因此，避免在此方法中产生副作用非常重要。相反，应该使用 componentDidUpdate，因为它保证每次更新只调用一次：
   */
  componentWillReceiveProps(nextProps){
    console.log("child componentWillReceiveProps");
    // if(this.props.count !== nextProps.count){
    //   this.setState({
    //     count: nextProps.count,
    //   })
    // }
  }

  /* componentWillReceiveProps
    1.执行副作用componentDidUpdate,但是记得要有条件判断，否则会无限循环，如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()。
    2.如果你使用 componentWillReceiveProps 仅在 prop 更改时重新计算某些数据，请使用 memoization helper 代替
    3.如果你使用 componentWillReceiveProps 是为了在 prop 更改时“重置”某些 state，请考虑使组件完全受控或使用 key 使组件完全不受控 代替。
  */
  // componentDidUpdate(prevProps, prevState, snapshot){
  //   if(this.props.count !== prevProps.count){
  //     this.setState({
  //       count: this.props.count,
  //     })
  //   }    
  // }

  // static getDerivedStateFromProps(props, state){    
  //   if(props.count !== state.lastCount){      
  //     console.log("getDerivedStateFromProps",props, state);
  //     return { count: props.count, lastCount: props.count }
  //   }
  //   return state;
  // }

  add = () => {
    this.setState(prev=>({count: prev.count+1}));
  }
  
  render(){
    
    const {add, state} = this;
    const { count } = state;
    console.log("child is called", state);
    return (
      <div>
        <p>child count {count}</p>
        <button onClick={add}>child add</button>
        <ShowCount count={this.props.count}></ShowCount>
      </div>
    );
  }
}

class Parent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }

  add = () => {
    this.setState(prev=>({count: prev.count+1}));
  }
  
  render(){
    const {add, state} = this;
    const { count } = state;
    return (
      <div>
        <p>parent count {count}</p>
        <button onClick={add}>parent add</button>
        <Child count={count}></Child>
      </div>
    );
  }
}

export default class Index extends Component {
  render() {
    return (
      <Parent></Parent>
    )
  }
}
