import React, { useState } from 'react'
import { useTodo } from '../Contexts';

function TodoForm() {
    const [taskmsg,settaskmsg]=useState("");
    const {addTask}=useTodo();
    

    const addtask=(e)=>{
        console.log("add request receive");
        console.log(taskmsg);
        
        e.preventDefault();

        if(!taskmsg)return;

        addTask(taskmsg);
        settaskmsg("");


    }
    

    return (
        <form  className="flex" onSubmit={addtask}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={taskmsg}
                onChange={(e)=>settaskmsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

