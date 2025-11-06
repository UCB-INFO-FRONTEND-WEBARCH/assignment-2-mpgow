import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCounter from './components/TaskCounter'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'

function App() {
  // const [count, setCount] = useState(0)
  const[tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const[filter, setFilter] = useState("all")

  function getFilteredTasks() {
    if (filter === 'active') {
        return tasks.filter((task) => !task.completed)
    } if (filter === 'completed') {
        return tasks.filter((task) => task.completed)
    }
    return tasks;
  }

  const filteredTasks = getFilteredTasks();

  var next_id = 0;

  const handleChange = (event) => {
  // const inputValue = event.target.value;
  // console.log("Input changed", inputValue);
  setInputValue(event.target.value);
  }

  const handleClick = (inputValue) => {
    // setTasks([...tasks, `New Task ${tasks.length + 1}`]); // spread operator
    // setTasks([...tasks, `${inputValue}`])
    // setTasks([...tasks, inputValue])
    const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
    }
    setTasks([...tasks, newTask])
  }

//   const addTask = (taskText) => {
//     const newTask = {
//         id: next_id,
//         text: taskText,
//         completed: false,
//     }
//     next_id++;
//     setTasks([...tasks, newTask]);
//     // use map to replace tasks with setTasks
//   };

  const toggleTask = (id) => {
    // for loop into tasks to find matching id, flip completed boolean
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  };

  const deleteTask = (id) => {
    // for loop into tasks to find matching id, check filter mode, filter on completion status
    function keeper(t) {
        return t.id !== id;
    }
    const updatedTasks = tasks.filter(keeper);
    setTasks(updatedTasks);
  };

  return (
    <div className='app'>
        <header className ="site-header">
            <button className ="menu-button" aria-label="Open menu"></button>
            <form className ="search-form" role="search" aria-label="Quick find form">
                <label className ="search-container">
                    <img className ="search-icon" src="./assets/search_icon.png" alt="Search"/>
                    <input className ="search-input" type="search" placeholder="Quick find"/>
                </label>
            </form>
            <img className ="progress-icon" src="./assets/check_icon.png" alt="progess icon"/>
            <div className ="site-header__status">
                <span>30/5</span>
            </div>
        </header>
        <main className ="site-main">
            <aside className ="navbar">
                <ul>
                    <li id="b1"><strong>Inbox</strong> <span className ="counter">5</span></li>
                    <li id="b2"><strong>Today</strong> <span className ="counter">5</span></li>
                    <li id="b3"><strong>Upcoming</strong></li>
                </ul>
            </aside>

            <section className ="main-content">
                <h1>Inbox</h1>
                <div>
                <span onClick={() => setFilter("all") }>All</span>
                <span className="filterSeparator"> | </span>
                <span onClick={() => setFilter("active") }>Active</span>
                <span className="filterSeparator"> | </span>
                <span onClick={() => setFilter("completed") }>Completed</span>
                </div>

                {/* <TaskForm onAddTask={addTask}/> */}
                <TaskForm onAddTask={handleClick}/>
                <TaskCounter tasks={tasks}/>
                <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask}/>

                {/* <input type='text' value = {inputValue} onChange = {handleChange}/> */}
                {/* <input value={text} onChange = {e => handleChange(e.target.value)}/> */}
                {/* <button id="add-task-btn" onClick = {() => handleClick(inputValue)}>+ add Task</button> */}
                {/* <ul className = "task-list">
                {tasks.map((task, index) => (
                    <li key={task.id} className="task-item">
                        <input type="checkbox" id={`task-${index}`} className="task-checkbox"/>
                        <label htmlFor={`task-${index}`} >{task.text}</label>
                    </li>
                // <li key={task.id}>{task.text}</li>
                ))}
                </ul> */}
                {/* <ul>
                    {filteredTasks.map((task,id) => (
                    <li key ={id} className="task-item">
                        <input type="checkbox" id={`task-${id}`} className="task-checkbox" onChange = {() => toggleTask(task.id)} checked={task.completed}/>
                        <label htmlFor={`task-${id}`} className={`task-label ${task.completed ? 'completed' : ''}`}>{task.text}</label>
                        <button id="delete-task-btn" onClick = {() => deleteTask(task.id)}>- delete Task</button>
                    </li>
                    ))}
                </ul> */}
                {/* <ul className ="task-list">
                    <li className ="tasks">
                        <label>
                            <input type="radio" name="tasks.call" value="call"/>Call Mom
                        </label>
                    </li>
                    <li className ="tasks">
                        <label>
                            <input type="radio" name="tasks.magazine" value="magazine"/>Buy the new issue of Scientific American
                        </label>
                    </li>
                    <li className ="tasks">
                        <label>
                            <input type="radio" name="tasks.return" value="return"/>Return the textbook to Josie
                        </label>
                    </li>
                    <li className ="tasks">
                        <label>
                            <input type="radio" name="tasks.album" value="album"/>Buy the new album by Rake    
                        </label>
                    </li>
                    <li className ="tasks">
                        <label>
                            <input type="radio" name="tasks.gift" value="gift"/>Buy a gift card for Dad 
                        </label>
                    </li>
                </ul> */}
            </section>
        </main>
    </div>
  )
}

export default App
