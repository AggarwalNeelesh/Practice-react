import React from 'react'
import {Table} from 'react-bootstrap'
import Reuse1 from './Reuse1'
function Mapping() {
  const arr = [
    {name:"Neelesh", age:22, crush:"All Girls", Fav_anime:[{name:"One Piece", episodes:"1054*"},{name:"Naruto", episodes:"720"}, {name:"Black Clover", episodes:"170"}, {name:"Black Clover", episodes:"170"}]},
    {name:"Grey", age:21, crush:"Neelesh",Fav_anime:[{name:"One Piece", episodes:"1054*"},{name:"Naruto", episodes:"720"}, {name:"Black Clover", episodes:"170"}]},
    {name:"Noella", age:21, crush:"Neelesh",Fav_anime:[{name:"One Piece", episodes:"1054*"},{name:"Naruto", episodes:"720"}, {name:"Black Clover", episodes:"170"}]}
  ]
  
  return (
    <>
    <h1>Mapping</h1>
    <Table border={5} variant="dark" striped>
    <tbody>
     <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Crush</th>
          <th>Favorite Anime</th>
      </tr>
      {
      arr.map((item)=>(
        <Reuse1  name={item.name} age={item.age} crush={item.crush} anime={item.Fav_anime}/>
      ))
    }
    </tbody>
    </Table>
    </>
  )
}

export default Mapping
{/* <tr key={i}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.crush}</td>
          <td>
          <Table border={5}  variant="dark" striped>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Episodes</th>
              </tr>
             { item.Fav_anime.map((anime, j)=>(
                <tr key={j}>
                  <td>{anime.name}</td>
                  <td>{anime.episodes}</td>
                </tr>
            ))}
            </tbody>
          </Table>
          </td>
        </tr> */}