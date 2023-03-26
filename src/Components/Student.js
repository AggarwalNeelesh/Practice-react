import React, { Component, createRef } from 'react'

export default class Student extends Component {
  constructor(){
      super();
      // this.state = {
      //     age: 23,
      //     abc:12
      // }
      this.inputRef = createRef();
      // console.log("Constructor");
  }
  change(){
    console.log(this.inputRef);
    this.inputRef.current.value = "555"
  }
  // shouldComponentUpdate(){
  //   console.log(this.state.age)
  //   if(this.state.age>=15 && this.state.age<20){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }
  // componentDidUpdate(prevProp, prevState, sanpshot){
  //   console.log("CDA",prevProp,prevState, sanpshot);
  //   // console.log(JSON.stringify(this.props)===JSON.stringify(prevProp))

  // }
  componentDidMount(){
    // console.log("CDM");
    console.log(this.inputRef);

  }
  
  render() {
    console.log("Render");
    return (
      <div>
        {/* Student {this.props.name}<br/>
        Age {this.state.age}<br/> */}
        <input type = "text" ref={this.inputRef} value="1000"/>
        <button onClick={()=>this.change()}>Change age</button>
      </div>
    )
  }
}
