import { useSearchParams } from "react-router-dom"
export default function Filter(){
    const [searchParams, setsearchParams] = useSearchParams();
    return(
        <>
        <h1>Filters Used</h1>
        <h2>Age : {searchParams.get('age')}</h2>
        <button onClick={()=>{setsearchParams({age: 30})}}>Change Filter</button>
        </>
    )
}