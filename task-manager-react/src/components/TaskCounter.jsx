export default function TaskCounter( {tasks, filteredTasks, taskFilter} ) {
    const taskTotal = tasks.length;
    const compTotal = tasks.filter(task => task.completed).length;
    return (
        <div className="counters">
            <span className="task-total-counter">Total: {taskTotal}</span>
            <span> </span>
            <span className="comp-total-counter">Completed: {compTotal}</span>
        </div>
    );
}