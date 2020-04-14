// import React, { Component } from 'react'

// export default class Child extends Component {

//   shouldComponentUpdate(nextProps, nextState){
//     if(this.props.a!==nextProps.a){
//       return true;
//     }
//     if(this.props.b !== nextProps.b){
//       return true;
//     }
//     return false;
//   }

//   render() {
//     const {a,b} = this.props;
//     console.log("child rendered")
//     return (
//       <div>
//         {  `${a} and ${b}` }
//       </div>
//     )
//   }
// }

import React, { PureComponent } from 'react'

export default class Child extends PureComponent {
  render() {
    const {a,b} = this.props;
    console.log("child rendered")
    return (
      <div>
        {  `${a} and ${b}` }
      </div>
    )
  }
}

