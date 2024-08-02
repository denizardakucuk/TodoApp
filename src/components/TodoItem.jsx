import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo, toggle, deleteTodo }) => {
  return (
    <div className='w-full flex items-center px-2 py-4 gap-2 border-b cursor-pointer select-none' onClick={() => toggle(todo.id)}>

        
        {
          todo.isComplete ? (
            <FaRegCheckCircle className='text-[#00AD85] size-5'/>
          ) : (
            <FaRegCircle className='text-[#00AD85] size-5'/>
          )
        }
        <p className={`flex-1 ${todo.isComplete ? "line line-through" : ""}`}>{todo.text}</p>

        <FaRegTrashAlt className='text-[#f30453] hover:scale-125 transition-all cursor-pointer' onClick={() => deleteTodo(todo.id)}/>

    </div>
  )
}

export default TodoItem