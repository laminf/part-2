import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number :7167432 }
    
  ]) 
  const [ newName, setNewName ] = useState('')
const [newNumber, setNewNumber]=useState()
  
  const name=(e)=>{
    setNewName(e.target.value)
}
const number=(e)=>{
  setNewNumber(e.target.value)
}
const addPerson=(event)=>{

  event.preventDefault()
  const noteObject={
  name: newName,
number:newNumber
  
}
const isPerson=persons.some((p)=>{
  return p.name===newName
})
if(isPerson){
  window.alert(`${newName} is already in phonebook`)
}

setPersons(persons.concat(noteObject))

setNewName('')
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}> 
        <div>
          name: <input value={newName} onChange={name}/>
          
        </div>
        <div>
        number: <input value={newNumber} onChange={number}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((name)=>{
        return <div>{name.name} {name.number}</div>
      })}
    </div>
  )
}

export default App
