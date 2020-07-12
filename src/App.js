import React, { useState, /*useEffect*/ } from 'react';
import './App.css'
import TodoList from './Todo/TodoList';
import Context from './context'
import background from './background.jpg'

function App() {
  const [todos, setTodos] = useState(mainArr())
  const [start, setStart] = useState(false)
  const [count, setCount] = useState(0)
  const [isColor, setIsColor] = useState('')
  const [pastId, setPastId] = useState('')
  const [coincCount, setCoincCount] = useState(0)

  function mainArr() {
    const random = (a, b) => 0.5 - Math.random();
    const colors = [
      {id: 0, hidden: false, color: "red", isCoincidence: false},
      {id: 1, hidden: false, color: "yellow", isCoincidence: false},
      {id: 2, hidden: false, color: "blue", isCoincidence: false},
      {id: 3, hidden: false, color: "pink", isCoincidence: false},
      {id: 4, hidden: false, color: "purple", isCoincidence: false},
      {id: 5, hidden: false, color: "violet", isCoincidence: false},
      {id: 6, hidden: false, color: "black", isCoincidence: false},
      {id: 7, hidden: false, color: "orange", isCoincidence: false},
      {id: 8, hidden: false, color: "red", isCoincidence: false},
      {id: 9, hidden: false, color: "yellow", isCoincidence: false},
      {id: 10, hidden: false, color: "blue", isCoincidence: false},
      {id: 11, hidden: false, color: "pink", isCoincidence: false},
      {id: 12, hidden: false, color: "purple", isCoincidence: false},
      {id: 13, hidden: false, color: "violet", isCoincidence: false},
      {id: 14, hidden: false, color: "black", isCoincidence: false},
      {id: 15, hidden: false, color: "orange", isCoincidence: false},
    ];
    const colorsSort = colors.sort(random);
    return colorsSort
  }

  /*useEffect( () => {
    setTodos(
      todos.map( todo => {      
        todo.hidden = true
        return todo
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])*/

  function handleStart() {
    setTodos(
      todos.map( todo => {      
        todo.hidden = true
        return todo
    }))
    setStart(true)
  } 
  
  function handleUpdate() {    
      setTodos(mainArr())
      setCoincCount(0)
  }

  function toggleTodo(id, color) {
    if (start) {
      if (count < 2) {
        setTodos(
          todos.map( todo => {
          if (todo.id === id) {
            todo.hidden = !todo.hidden
          }
          return todo
        }))
        setCount(count + 1)
        setIsColor(color)
        setPastId(id)

        if (count === 1) {
          if (color === isColor && id !== pastId) {
            setTimeout(() => {
              setTodos(
                todos.map( todo => {
                if (todo.id === id || todo.id === pastId) {
                  todo.isCoincidence = true
                }
                return todo
              }))
              setCount(0)
              setCoincCount(coincCount + 1)
            }, 500)            
          } else {
            setTimeout(() => {
              setTodos(
                todos.map( todo => {      
                  todo.hidden = true
                  return todo
              }))
              setCount(0)
            }, 500)
          }  
        }
               
      }    
    }     
  }  

  return (    
    <Context.Provider value={{ toggleTodo }}>
      <div className='container' style={{backgroundImage: `url(${background})`}}>
      <h1>Funny tiles</h1>
      <div className='app'>
        {coincCount === 8 ? <p className='joy'>Congratulation!</p> : <TodoList todos = { todos }/>}
      </div>
      <div className='navigation'>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleStart}>Start</button>      
      </div>      
    </div>
    </Context.Provider>    
  );
}

export default App;
