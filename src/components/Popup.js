import React from 'react'
import { useRef } from "react";
import {TiDelete}  from 'react-icons/ti'
import { useTodos } from '../TodoContext';
import { createPortal } from 'react-dom';



const Popup = ({popup,setpop}) => {
    const {Todos,setTodos}=useTodos()
    const Newdata=[...Todos]
    const portal=document.getElementById('portal')
    
    const getTitle=useRef()
    const getDate=useRef()
    const getDescript=useRef()
    function addTodo(){
        const ranId=Math.floor(Math.random()*10000)
        const title=getTitle.current.value
        const date=getDate.current.value
        const description=getDescript.current.value
        if(title.length>=3){ 
        Newdata.push({title:title,date:date,description:description,checked:false,showDescript:false,id:ranId,showTodo:true})
        setTodos(Newdata)
        setpop(!popup)
        }
        getTitle.current.value=''   
        getDate.current.value=''   
        getDescript.current.value=''   
    }
  return createPortal(
  <React.StrictMode>
    <div  style={{display:popup?'block':'none'}}>
        <div className='popup' />
        <div className="popup-ct" >
            <label htmlFor="title" className='font-bold text-blue-700'>Title:</label>
            <input maxLength={20} ref={getTitle} className="title border-b-2 p-2 pb-0 border-b-blue-700 outline-none  pl-2 font-semibold" placeholder='title...'></input>
{/*  */}
            <label htmlFor='submitPop' className="mt-1 font-bold text-blue-700">Date:</label>
            <input datatype='UTC' ref={getDate} className='pl-2 border-b-2 border-b-blue-700 outline-none font-semibold ' type='date' ></input>

            <label htmlFor="decription" className='font-bold text-blue-700'>Description:</label>
            <textarea maxLength='30' ref={getDescript} className="title  border-b-2 border-b-blue-700  pl-2 outline-none resize-none font-semibold"  placeholder='description...'/>

            {/* /*  */}
            <button onClick={()=>addTodo()} className="submitPop hover:bg-blue-50 border-2 border-blue-600 hover:text-blue-600 transition-all font-bold text-white rounded-md bg-blue-600 p-1 mt-8">SUBMIT</button>
            <button onClick={()=>setpop(false)} className="rmvbtn"><TiDelete className=' text-rose-700 hover:text-red-500 transition-all'/></button>
        </div>
    </div>
    </React.StrictMode>,portal
  )
}

export default Popup;

