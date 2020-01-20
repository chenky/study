import React, { Component } from 'react'

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  setCount = (count) => {
    this.setState({
      count,
    })
  }

  render(){
    return <>
      {
        this.props.children(this.state.count, this.setCount)
      }
    </>
  }  
}

export default class RenderProps2 extends Component {
  render() {
    return (
      <div>
        <Count>
          {
            (count, setCount)=>{
              return (
                <>
            <span>count:{count}</span>
            <button onClick={()=>setCount(count+1)}>set count</button>
                </>
              )
            }
          }
        </Count>
      </div>
    )
  }
}
