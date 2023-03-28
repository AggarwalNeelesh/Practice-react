import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props){
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() => {
       let login = localStorage.getItem("login");
       console.log(login);
       if(login===null || login===false)navigate('/login')
      }
    )
    return(
        <Component/>
    )
}