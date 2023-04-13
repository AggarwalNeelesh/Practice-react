import {React, useContext} from 'react'
import CommonContext from './CommonContext'
import Context3 from './Context3'
function Context2() {
    const {color, changecolor} = useContext(CommonContext);
  return (
    <>
        <div>
                <h1 style={{color:color}}>Context 2</h1>
                <button onClick={changecolor}>Change</button>
        </div>
        <Context3/>
    </>
  )
}

export default Context2