import React, { Component } from 'react'

export default class Student extends Component {
  constructor(){
      super();
      this.state = {
          age: 23,
          abc:12
      }
      console.log("Constructor");
  }
  shouldComponentUpdate(){
    console.log(this.state.age)
    if(this.state.age>=15 && this.state.age<20){
      return false;
    }else{
      return true;
    }
  }
  componentDidUpdate(prevProp, prevState, sanpshot){
    console.log("CDA",prevProp,prevState, sanpshot);
    // console.log(JSON.stringify(this.props)===JSON.stringify(prevProp))

  }
  componentDidMount(){
    // console.log("CDM");
  }
  render() {
    console.log("Render");
    return (
      <div><br/>
        Student {this.props.name}<br/>
        Age {this.state.age}<br/>
        <button onClick={()=>{this.setState({age:this.state.age-1})}}>Change age</button>
      </div>
    )
  }
}
