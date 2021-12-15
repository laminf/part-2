import React,{ useState, useEffect}  from "react";
import axios from "axios";
import person from "./services/person";
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


  return(
    <div>
      <h2>phonebook</h2>
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
        return<li key={name.id}>{name.name} {name.number}</li>
      })}
      </ul>
    </div>
  )
}
export default App
