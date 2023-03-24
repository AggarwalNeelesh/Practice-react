import React, {useState} from 'react'
import './style.css'
import style from './custom.module.css'
// import {Alert} from 'react-bootstrap';
function Users(props) {
  const [data, setdata] = useState(0);
  const [data1, setdata1] = useState(0);
  // useEffect(() => {
  //   console.log("Use Effect");
  // })
  // useEffect(() => {
  //   console.log("Use Effect 2");
  // }, [data1])
  return (
    <>
    {/* <Alert key="success" variant="success">
          This is a alert with
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert> */}
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