import React from 'react'
import {useParams} from 'react-router-dom'
function Users(props) {
  let param = useParams();
  const {name} = param;
  return (
    <>
    <h1>User Page:
     {name==null?"Not Found":name
     }</h1>
    
   </>
  )
}
export default Users