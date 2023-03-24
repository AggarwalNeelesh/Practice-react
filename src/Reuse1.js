import React from 'react'
import Reuse2 from './Reuse2'
import {Table} from 'react-bootstrap'
function Reuse1(props) {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.crush}</td>
        <td>
            <Table striped variant="dark">
                <tbody>
                    {props.anime.map((item)=>(
                        <Reuse2 name={item.name} episodes={item.episodes}/>
                    ))}
                </tbody>
            </Table>
        </td>
    </tr>
  )
}

export default Reuse1