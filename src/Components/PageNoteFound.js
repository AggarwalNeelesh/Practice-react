import { useState } from 'react';
import {Navigate} from 'react-router-dom'

function PageNotFound(){
    const [abc, setabc] = useState(false);
    const [load, setload] = useState(false);
    setInterval(() => {
        setload(!load);
    }, 500);
    setTimeout(() => {
        setabc(true);
    }, 3000);
    return(
        <>
            <h1>Page Not Found</h1>
            <h2>Sorry for the inconvinience</h2>
            {load?
            <div style={{height:"100px", width:"100px", borderRadius:"50%", backgroundColor:"black", margin:"auto"}}>ABC</div>:<div style={{height:"100px", width:"100px", borderRadius:"50%", backgroundColor:"grey", margin:"auto"}}></div>
            }
            
            {
                abc?<Navigate to="/"/>:null
            }
        </>
    )
}
export default PageNotFound;