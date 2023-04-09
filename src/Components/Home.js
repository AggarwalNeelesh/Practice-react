import {React, useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
  const [data, setdata] = useState({name:"Neelesh", age:22, hobby:"anime"})
  return (
    <>
    <h1>Home</h1>
    <input type="text" value={data.name} onChange={(e)=>setdata({...data, name:e.target.value})} />
    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    <h1>{data.hobby}</h1>
    <Link to="/jokes">Go read some Jokes</Link>
    </>
  )
}

export default Home