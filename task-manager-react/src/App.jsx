import { useState } from 'react'
// import reactLogo from './public/react.svg'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCounter from './components/TaskCounter'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'

function App() {
  const[tasks, setTasks] = useState([])
  const[filter, setFilter] = useState("all")

  function getFilteredTasks() {
    if (filter === 'active') {
        return tasks.filter((task) => !task.completed)
    } if (filter === 'completed') {
        return tasks.filter((task) => task.completed)
    }
    return tasks;
  }

  const addTask = (inputValue) => {
    const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  };

  const deleteTask = (id) => {
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
                    <img className ="search-icon" src={searchIcon} alt="Search"/>
                    <input className ="search-input" type="search" placeholder="Quick find"/>
                </label>
            </form>
            <img className ="progress-icon" src={checkIcon} alt="progess icon"/>
            <div className ="site-header__status">
                <TaskCounter tasks={tasks} filteredTasks={getFilteredTasks()} taskFilter={filter}/>
            </div>
        </header>
        <main className ="site-main">
            <aside className ="navbar">
                <ul>
                    <li id="b1"><strong>Inbox</strong> <span className="counter">{tasks.length}</span></li>
                    <li id="b2"><strong>Today</strong> <span className="counter">{tasks.length}</span></li>
                    <li id="b3"><strong>Upcoming</strong> <span className="counter">{tasks.filter(task => !task.completed).length}</span></li>
                </ul>
            </aside>
            <section className ="main-content">
                <h1>Inbox</h1>
                <div>
                    <button className={filter === "all" ? "filter-on" : "filter-off"} onClick={() => setFilter("all")} aria-pressed={filter === "all"}>All</button>
                    <button className={filter === "active" ? "filter-on" : "filter-off"} onClick={() => setFilter("active")} aria-pressed={filter === "active"}>Active</button>
                    <button className={filter === "completed" ? "filter-on" : "filter-off"} onClick={() => setFilter("completed")} aria-pressed={filter === "completed"}>Completed</button>
                </div>
                <TaskForm onAddTask={addTask}/>
                <TaskList tasks={getFilteredTasks()} onToggle={toggleTask} onDelete={deleteTask}/>
            </section>
        </main>
    </div>
  )
}

export default App
