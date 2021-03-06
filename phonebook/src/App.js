import React,{ useState, useEffect}  from "react";
import axios from "axios";
import person from "./services/person";
import './index.css'
const App=()=>{

  const[persons, setPersons]=useState([])
  const[newName,setNewName]=useState('')
  const[newNumber,setNewNumber]=useState('') 
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        
      })
  }, [])
  
 
  const name=(e)=>{ 
    setNewName(e.target.value)
  }
  const number=(e)=>{ 
    setNewNumber(e.target.value)
  }
  const addPerson =(event)=>{
    event.preventDefault()
    const noteObject={
      name:newName,
      number:newNumber
    }
    person
    .create(noteObject)
     .then(response=>{
       setPersons(persons.concat(response.data))
     })

     
    const isperson=persons.some((p)=>{

      return p.name===newName
    })
    if(isperson){
      window.alert(`${newName}is already in phonebook`)
    }
    
    setNewName('')
    setNewNumber('')
  }
  const undelet=(id)=>{
    const url=`http://localhost:3001/persons/${id}`
    axios.delete(url)
    .then(res=>{
      setPersons(persons.filter((p)=>p.id !==id))
    })
  }


  return(
    <div>
      
      <h2 className="m1">phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:<input value={newName} onChange={name}/>
          
        </div>
        <div>
          number:<input value={newNumber} onChange={number}/>
          
        </div>
        <div> 
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map((name)=>{
        return<div style={{display:'flex'}} key={name.id} ><li >{name.name} {name.number}</li> <button onClick={()=>undelet(name.id)}>delete</button></div>
      })}
      </ul>
    </div>
  )
}

export default App
