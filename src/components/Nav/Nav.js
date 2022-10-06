import { Addbtn } from './Addbtn';
import React from 'react'
import { useTodos } from '../../TodoContext';
import { useRef } from 'react';
import SearchTodo from './SearchTodo';
import Sorting from './Sorting';
const Nav = ({popup,setpop}) => {
  const {Todos,setTodos,Search,setSearch}=useTodos()
  const SearchRef=useRef()
  function findTodo(){
    if(SearchRef.current.value.length>=1 && Todos.length>=1){
      setSearch(SearchRef.current.value)
      const UpdatedTodos=Todos.sort((el)=>{
        if(el.title.includes(Search)){
          return -1
        }
        else{return 1}
      })
      setTodos(UpdatedTodos)
      console.log(Todos)
    }
  }

  return (
    <div className='flex font-bold justify-center mt-2 gap-1'>
    <div>
      
    </div>
    <Sorting setSearch={setSearch} setTodos={setTodos} Todos={Todos}/>
    <SearchTodo   SearchRef={SearchRef} findTodo={findTodo}  />
    <Addbtn   setpop={setpop}  />
    
    </div>
  )
}

export default Nav