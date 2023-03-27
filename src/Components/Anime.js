import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Anime() {
  return (
    <div>
        <Link to="naruto">Naruto</Link>
        <Link to="luffy">Luffy</Link>
        <Outlet/>
    </div>
  )
}

export default Anime
