

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
   <Course courses={courses} />
   

  </div>
  )
}

const Course=({courses})=>{

  return(
    <div>

  <Header courses={courses}/>
  <Content courses={courses}/>
  <Headers courses={courses}/>
  <Contents courses={courses}/>
  
  
    </div>
  )
}
const Header =({courses})=>{

  return(
    <div>
    <h1>{courses[0].name} </h1>
    
    </div>
  )
}
const Content=({courses})=>{

  return(
    <div>
    {courses[0].parts.map(item=>{
      return <div><p>{item.name} {item.exercises}</p> </div>
    })}
  total of  {courses[0].parts.reduce((a,i)=>{
    return a+i.exercises
  },0)} exercises
    </div>
  )
}
const Headers =({courses})=>{

  return(
    <div>
    <h1>{courses[1].name} </h1>
    
    </div>
  )
}
const Contents=({courses})=>{

  return(
    <div>
    {courses[1].parts.map(item=>{
      return <div><p>{item.name} {item.exercises}</p> </div>
    })}
  total of {courses[1].parts.reduce((a,i)=>{
    return a+i.exercises
  },0)} exercises
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