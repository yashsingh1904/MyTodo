import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { TodoContextProvider } from './Contexts'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
function App() {

  const [taskList, SettaskList] = useState([]);

  const addTask = (taskmsg) => {
    SettaskList((prev) => [{ id: Date.now(), taskmsg: taskmsg ,completed:false}, ...prev])
  }

  const updateTask = (taskid, updatemsg) => {

    SettaskList((prev) => prev.map((prevtask) => (prevtask.id === taskid ?{ ...prevtask,taskmsg : updatemsg }: prevtask)))
  }

  const deleteTask = (taskid) => {
    SettaskList((prev) => prev.filter((prevtask) => prevtask.id != taskid))
  }

  const toggleComplete = (taskid) => {

    SettaskList((prev) => prev.map((prevtask) => prevtask.id === taskid ? { ...prevtask, completed: !prevtask.completed } : prevtask))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      SettaskList(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList))
  }, [taskList])



  return (

    <TodoContextProvider value={{ taskList, addTask, updateTask, deleteTask, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">

            {/* Todo form goes here */}
            <TodoForm/>

          </div>



          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {taskList.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >

                <TodoItem task={todo} />

              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoContextProvider>

  )
}

export default App
