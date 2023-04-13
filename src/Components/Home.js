import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import Context1 from './Context1'



function Home() {
  const [data, setdata] = useState([5,7,8,9])
  return (
    <>
    <h1>Home</h1>
    <input type="text" value={data[0]} onChange={(e)=>setdata([...data,{}])} />
    {
      data.map((val, key)=>(
        <h1 key={key}>{val }</h1>
      ))
    }
    <Link to="/jokes">Go read some Jokes</Link>
    <br></br>
    <br></br>
    <Context1/><br></br>
    <br></br>
    
    </>
  )
}

export default Home