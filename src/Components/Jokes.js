import { useState, useEffect } from "react"
import { Table } from "react-bootstrap";

export default function Jokes(){
    const [data, setdata] = useState([]);
    useEffect(() => {
      fetch('https://v2.jokeapi.dev/joke/Any?amount=10').then((res)=>{
            res.json().then((rep)=>{
                setdata(rep.jokes);
            })
      })
    
      
    }, [])
    // url = https://www.eporner.com/api/v2/video/search/?query=teen&per_page=10&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json
    // console.log(data[0]);
    // data.map((item, i)=>{
    //     console.log(i, item.category, item.setup, item.delivery)
    // })
    return(
        <>
        <h1>Jokes :- </h1>
        <Table>
        <tbody>
                    <tr>
                        <th>Category</th>
                        <th>Setup</th>
                        <th>Delivery</th>
                    </tr>
            {       
                data.map((item, i)=>(
                    <tr key={i}>
                        <td>{item.category}</td>
                        <td>{item.setup}</td>
                        <td>{item.delivery}</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
            
        </>
    )
}