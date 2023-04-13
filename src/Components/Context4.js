import {React, useContext} from 'react'
import CommonContext from './CommonContext'
export default function Context4(){
    const {color} = useContext(CommonContext);
    return(
        <h4 style={{color:color}}>Context4</h4>
    )
}