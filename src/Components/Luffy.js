import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Luffy(){
    const list = [
        {name:"Monkey D. Luffy", bounty:"3 Billion", desig:"Captain", link:"/anime/strawHats/luffy/cpaptain"},
        {name:"Roronoa Zoro", bounty:"1.2 Billion", desig:"Vice Captain", link:"/anime/strawHats/zoro"},
        {name:"Vinsmoke Sanji", bounty:"1.1 Billion", desig:"Cook", link:"/anime/strawHats/sanji"},
        {name:"First Son of Sea Jimbei", bounty:"800 Million", desig:"Henchman", link:"/anime/strawHats/jimbei"},
        {name:"Cat Buglar Nami", bounty:"750 Million", desig:"Navigator", link:"/anime/strawHats/nami"}
    ]
    return(
        <>
        <h1>One Piece is real!</h1>
        <Table>
        <tr>
            <th>Name</th>
            <th>Bounty</th>
            <th>Designation</th>
            <th>Link</th>
        </tr>
        {list.map((item, i)=>(
            <tr>
                <td>{item.name}</td>
                <td>{item.bounty}</td>
                <td>{item.desig}</td>
                <td><Link to={item.link}>See more</Link></td>
            </tr>
        ))}
        </Table>
        </>
    )
}