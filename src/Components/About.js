import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    <h1>About</h1>
    <Link  to="/user/Neelesh">Neelesh</Link><br/>
    <Link  to="/user/Aakshi">Aakshi</Link>
    </>
  )
}

export default About