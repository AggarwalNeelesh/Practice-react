import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Anime() {
  return (
    <div>
        <Link to="naruto">Naruto</Link><br></br>
        <Link to="strawHats">StrawHats</Link>
        <Outlet/>
    </div>
  )
}

export default Anime
