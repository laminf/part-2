import React,{useState,useEffect} from "react";
import axios from "axios";
const App=()=>{

  const[persons, setPerson]=useState([])
  const[newName,setNewName]=useState('')
  const[newNumber,setNewNumber]=useState()
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPerson(response.data)
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
    axios
    .post('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPerson(persons.concat (noteObject))
    })

    const isperson=persons.some((p)=>{

      return p.name===newName
    })
    if(isperson){
      window.alert(`${newName}is already in phonebook`)
    }
    setPerson(persons.concat(noteObject))
    setNewName('')
  }
  return(
    <div>
      <h2>phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:<input value={newName}onChange={name}/>
        </div>
        <div>
          number:<input value={newNumber}onChange={number}/>
        </div>
        <div> 
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((name)=>{
        return<div>{name.name} {name.number}</div>
      })}
    </div>
  )
}
export default App
