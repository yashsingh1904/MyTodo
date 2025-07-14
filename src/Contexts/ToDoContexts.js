import { useContext, createContext } from "react";

export const TodoContext = createContext({

    taskList: [

        {
            id: 1,
            taskmsg: "taskmsg",
            completed: false
        }

    ],

    addTask: (taskmsg) => { },
    updateTask: (id, taskmsg) => { },
    deleteTask: (id) => { },
    toggleComplete: (id) => { }






});




export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;