import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    function loggedin(){
        localStorage.setItem("login", true);
        navigate('/');
    }
    useEffect(() => {
      let login = localStorage.getItem('login');
      if(login!==null){
        navigate('/');
      }
    })
    return(
        <div style={{margin:"10px", padding:"10px"}}>
            <label style={{padding:"10px"}} htmlFor="name"><h3>Username : </h3></label>
            <input id="name" type="text"></input><br></br>
            <label style={{padding:"10px"}} htmlFor="password"><h3>Password : </h3></label>
            <input id="password" type="text"></input><br></br>
            <button onClick={loggedin}>Submit</button>
        </div>
    )
}