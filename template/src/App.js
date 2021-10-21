

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
   <Course course={course} />
  </div>
  )
}

const Course=({course})=>{

  return(
    <div>

  <Header course={course}/>
  <Content course={course}/>
    </div>
  )
}
const Header =({course})=>{

  return(
    <div>
    <h1>{course.name} </h1>
    </div>
  )
}
const Content=({course})=>{

  return(
    <div>
    <p>{course.parts[0].name} {course.parts[0].exercises} </p>
    <p>{course.parts[1].name} {course.parts[1].exercises} </p>
    <p>{course.parts[2].name} {course.parts[2].exercises} </p>
    </div>
  )
}

export default App



/*import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  
  const name=(e)=>{
    setNewName(e.target.value)
}
const addPerson=(event)=>{

  event.preventDefault()
  const noteObject={
  name: newName,
  
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((name)=>{
        return <div>{name.name}</div>
      })}
    </div>
  )
}

export default App
*/