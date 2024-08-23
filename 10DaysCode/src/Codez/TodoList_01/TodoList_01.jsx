import React from 'react'
import { useState } from 'react'
import { TodoProviderNew } from './TodoContext'

export default function TodoList_01() {

  const [todo , setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo(() => )
  }

  const removeTodo = (id) => {

  }

  const updateTodo = (id , todo) => {

  }

  const toggleComplete = (id) => {

  }

  return (
    <TodoProviderNew value={{todo , addTodo , removeTodo , updateTodo , toggleComplete}}>
      

    </TodoProviderNew>
  )
}

