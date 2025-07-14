import React from 'react'
import { useState } from 'react'
import { useTodo } from '../Contexts'

function TodoItem({ task }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(task.taskmsg)
    const { updateTask, deleteTask, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTask(task.id, todoMsg )
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        console.log(task.id);
        toggleComplete(task.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${task.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={task.completed}
                onChange={toggleCompleted}
            />

            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${task.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />


            {/* Edit, Save Button */}


            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={(e) => {

                    console.log(e.target.value);
                    
                    if (task.completed) return;

                    if (isTodoEditable) {
                        
                        
                        
                        editTodo();
                    } 
                    
                    else setIsTodoEditable((prev) => !prev);
                }}
                disabled={task.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>




            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTask(task.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
