// import React, { useState } from 'react';
import './App.css';
// import Form from './Form';
// import Student from './Student';
import Users from './Users';

function App() {
  // const [show, setshow] = useState(false);
  // const [name, setname] = useState("Neelesh");
  // const [inputer, setinputer] = useState("");
  // function apple(){
  //   // name = "aakshi";
  //   setname("Aakshi");
  // }
  // function changeIt(val){
  //   setinputer(val.target.value);
  // }
  return (
    <>
      {/* <Student name="Luffy"/> */}
      {/* <div className="App">
        <h1>{name}</h1>
        <button onClick={apple}>Hello</button>
      </div>
      
      <input type="text" onChange={changeIt} />
      <h1>{inputer}</h1>
      <h3>Size {inputer.length}</h3>
      { show ? <h2>Show/Hide text</h2>:null}
      <br />
      <button onClick={()=>{setshow(true)}}>show</button>
      <button onClick={()=>{setshow(false)}}>Hide</button> */}
      {/* <Form/> */}
      <Users name="Rahul"/>
    </>
  );
}

export default App;
