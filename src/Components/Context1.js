import {React, useState} from 'react'
import CommonContext from './CommonContext'
import Context2 from './Context2'
function Context1() {
  const [color, setcolor] = useState("blue")
  function changecolor(){
    setcolor("pink");
  }
  return (
    <>
      <CommonContext.Provider value={{color:color, changecolor: changecolor}}>
        <h1>Context1</h1>
        <Context2/>
      </CommonContext.Provider>
      
    </>
  )
}

export default Context1
