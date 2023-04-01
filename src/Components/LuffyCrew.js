import React from 'react'
import { useParams , withRouter} from 'react-router-dom'

function LuffyCrew() {
    const param = useParams();
    const {name} = param;
    const {desig} = param;
    console.log(name,desig);
    const list = [
        {name:"Monkey D. Luffy", bounty:"3 Billion", desig:"Captain", link:"/anime/strawHats/luffy"},
        {name:"Roronoa Zoro", bounty:"1.2 Billion", desig:"Vice Captain", link:"/anime/strawHats/zoro"},
        {name:"Vinsmoke Sanji", bounty:"1.1 Billion", desig:"Cook", link:"/anime/strawHats/sanji"},
        {name:"First Son of Sea Jimbei", bounty:"800 Million", desig:"Henchman", link:"/anime/strawHats/jimbei"},
        {name:"Cat Buglar Nami", bounty:"750 Million", desig:"Navigator", link:"/anime/strawHats/nami"}
    ]
  return (
    <>
    <h2>Luffy Crew</h2>
    {
      list.map((item)=>(
        (item.link.includes(name))?<h3>{item.name} - {item.desig} (${item.bounty})</h3>:null
            
      )
     )
    }
    </>
    
  )
}

export default LuffyCrew
