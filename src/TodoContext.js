import React, { createContext, useContext, useState } from 'react'



const TodoContext=createContext()
export const useTodos=()=>{
    return useContext(TodoContext)
}
const TodoProvider = ({children}) => {
    const [Todos,setTodos]=useState([])
    const [Search,setSearch]=useState([])

  return (
    <TodoContext.Provider value={{Todos,setTodos,Search,setSearch}}>{children}</TodoContext.Provider>
  )
}

export default TodoProvider