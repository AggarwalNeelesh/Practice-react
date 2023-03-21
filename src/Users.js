import React from 'react'

function Users(props) {
  
  return (
    <>
    <div style={{margin:"auto"}}>
      {props.children}
      <h1>Hello {props.name}</h1>
      <button onClick={function(){
        props.setname("Aggarwal Shah");
      }}>Set name</button>
      <br/>
    </div>
   
   </>
  )
}

export default Users
