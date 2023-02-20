import React, { useState } from 'react'
import {AiFillDelete}  from 'react-icons/ai'
import { useTodos } from '../TodoContext'

const List = () => {
  const {Todos,setTodos,Search}=useTodos()

  // vars
  function showDescipt(id,option){
    const UpdatedTodos=Todos.map(todo=>{
      if(todo.id===id&& option=='show'){
        return {...todo,showDescipt:true}
      }
      else if(todo.id===id&& option=='hide'){
        return {...todo,showDescipt:false}
      }
      else{
        return todo
      }
    })
    setTodos(UpdatedTodos)
  }
  function removeItem(indexi){
    const filtItems=Todos.filter((el,index)=>{
      if(index!=indexi){
        return el
      }else{return}
    })
    setTodos(filtItems)
  }
// 
  function handleCheked(todo){
    const filt=Todos.map(el=>{
      if(el===todo){
        return {...el,checked:!el.checked} 
    }
    else{return el}
  }
    )
    setTodos(filt)}
    // 
    
  return (
    <div className= 'grid mt-10  justify-center'>
        <div className='empty-list' style={{display:Todos.length<1?'grid':'none'}}>
              Empty List...
        </div>
        {Todos.map((el,index)=>{
          return(
            <>{el.showTodo?<div 
            onMouseEnter={()=>showDescipt(el.id,'show')}
            onMouseLeave={()=>showDescipt(el.id,'hide')}
            key={el.id}
              className=' cursor-pointer transition-all bg-white gap-2 grid shadow-xl m-2 text-xl rounded-lg border-2 border-blue-600 p-3' style={{display:el.title.length<=1?'none':'grid'}}>
              <div className=' font-bold flex justify-between items-baseline  '>
                <input onChange={()=>handleCheked(el)} className='scale-150 '  checked={el.checked} type='checkbox'/>
                <p style={{textDecoration:el.checked?'line-through 3px':'none'}} className=' mb-1 mr-4 ml-4'>{el.title}</p>
                <p className=' text-base text-slate-500 mr-2'>{el.date}</p>
                <button  className= 'transition-all  hover:text-red-500 rounded-full  pt-1 bg-white scale-100 flex i' onClick={()=>removeItem(index)}><AiFillDelete className='text-red-600 hover:text-rose-700 
                scale-110 transition-all translate-y-0.5'/></button>
              </div>
              {el.showDescipt?<div className='descript text-base text-gray'>{el.description}</div>:null}
            </div>:null}</>
        )})}
    </div>
  )
}

export default List