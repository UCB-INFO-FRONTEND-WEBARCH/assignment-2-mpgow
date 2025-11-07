import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete}) {
    return (
        <ul className="task-list">
            {tasks.length === 0 ? <li>No tasks yet!</li> : tasks.map(function(t) { 
                return (<TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete}/>);
            })}
        </ul>
    );
}