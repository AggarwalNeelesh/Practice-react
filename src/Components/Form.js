import React, {useState} from 'react'

function Form() {
    const [name, setname] = useState("")
    const [designation, setdesignation] = useState("")
    const [check, setcheck] = useState(false)
    function formDetails(e){
        e.preventDefault();
        console.log(name+" "+designation+" "+check);
    }
  return (
    <div>
    <form onSubmit={formDetails}>
      <h1>OnBoarding Form</h1>
      <label htmlFor="name">Name : </label>
      <input type="text" name="name" placeholder='Enter Name' onChange={(e)=>setname(e.target.value)}/><br />
      <label htmlFor="desig">Designation : </label>
      <input type="text" name="desig" placeholder='Enter Role' onChange={(e)=>setdesignation(e.target.value)}/><br />
      <label htmlFor="checkbox">Terms and Conditions  </label>
      <input type="checkbox" name='checkbox' onChange={(e)=>setcheck(e.target.checked)}/><br />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Form
