export default function TaskItem( {task, onToggle, onDelete} ) {
    return (
    <li className="task-item">
        <input type="checkbox" id={`task-${task.id}`} className="task-checkbox" onChange = {() => onToggle(task.id)} checked={task.completed}/>
        <label htmlFor={`task-${task.id}`} className={`task-label ${task.completed ? 'completed' : ''}`}>{task.text} </label>
        <button className="delete-button" onClick = {() => onDelete(task.id)}> - delete</button>
        {/* task-label part for completion based styling (use .task-label.completed in css) */}
    </li>
    );
}