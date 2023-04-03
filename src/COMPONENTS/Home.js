import React, { useState } from 'react'
import Todo from './Todo'
import Todofrom from './Todofrom'
import { useLoaderData } from 'react-router-dom'
import Friend from './Friend'

const todoss = ['ashik', 'Monika']
const Home = () => {
  const [todos, setTodo] = useState(todoss)
  const addTodo = (gettodo) => {
    let getvalue = [...todos, gettodo]
    setTodo(getvalue)
  }

  // dynamic route set
  const friends = useLoaderData()

  return (
    <div>
      <div
        style={{ margin: '20px', padding: '10px', border: '1px solid black' }}
      >
        <h1>create todo</h1>
        <Todofrom addTodo={addTodo}></Todofrom>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo}></Todo>
        ))}
      </div>
      <div
        style={{ margin: '20px', padding: '10px', border: '1px solid black' }}
      >
        <h3>Load data : {friends.length}</h3>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  )
}

export default Home
