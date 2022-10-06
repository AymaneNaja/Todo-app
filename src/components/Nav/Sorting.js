import React, { useState } from 'react'
import {BiSortZA} from 'react-icons/bi'
import {BsCalendarDate} from 'react-icons/bs'
import {BiSort} from 'react-icons/bi'
import { BiTimeFive} from 'react-icons/bi'
const Sorting = ({setTodos,Todos,setSearch}) => {
    const [Sorted,setSorted]=useState(false)

    function sortAlphabtically(){
        if(Todos.length>=1 && !Sorted){
            const UpdatedTodos=Todos.sort((a,b)=>{
                if(a.title<b.title){
                    return -1
                }
                else {return 1}
            })
            setSearch('ascending')
            setTodos(UpdatedTodos)
            setSorted(true)
        }
        else if(Todos.length>=1 && Sorted){
            const UpdatedTodos=Todos.sort((a,b)=>{
                if(a.title>b.title){
                    return -1
                }
                else {return 1}
            })
            setSearch('descending')
            setTodos(UpdatedTodos)
            setSorted(false)
        }
    }     
    function sortbyDate(){
        if(Todos.length>=1&& !Sorted ){
            const UpdatedTodos=Todos.sort((a,b)=>{
                if(a.date<b.date){
                    return -1
                }
                else {return 1}
            })
            setSearch('date sorted ascend')
            setTodos(UpdatedTodos)
            setSorted(true)
        }
        else if(Todos.length>=1&& Sorted ){
            const UpdatedTodos=Todos.sort((a,b)=>{
                if(a.date>b.date){
                    return -1
                }
                else {return 1}
            })
            setSearch('date sorted des')
            setTodos(UpdatedTodos)
            setSorted(false)
        }
    
     }
  return (
    <div className='flex gap-1'>

        <div className='flex items-center p-3.5 bg-blue-700 text-white rounded-full justify-center hover:text-blue-700
        hover:bg-white border border-blue-700
        transition-all' onClick={()=>sortAlphabtically()}>
            <BiSortZA className='scale-150'/>
        </div>
        <div className='flex items-center  p-1.5 bg-blue-700 text-white font-bold rounded-full hover:text-blue-700
        hover:bg-white border border-blue-700
        transition-all' onClick={()=>sortbyDate()}>
            <BiSort className='scale-125'/>
            <BiTimeFive className='scale-125'/>
        </div>

    </div>
  )
}

export default Sorting