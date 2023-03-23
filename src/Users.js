import React, {useState, useEffect} from 'react'
import './style.css'
import style from './custom.module.css'
function Users(props) {
  const [data, setdata] = useState(0);
  const [data1, setdata1] = useState(0);
  useEffect(() => {
    console.log("Use Effect");
  })
  useEffect(() => {
    console.log("Use Effect 2");
  }, [data1])
  return (
    <>
    <div style={{margin:"auto"}}>
      <h1 className={`box ${style.success}`}>Hello {props.name}</h1>
      <h2 className={style.success}> {data} {data1}</h2>
      <button onClick={()=>setdata(data+1)}>Set Data</button>
      <button onClick={()=>setdata1(data1+1)}>Set Data 1</button>
      <br/>
    </div>
   
   </>
  )
}
export default Users