import {useState} from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete}) {
    return (
        <ul className="task-list">
            {tasks.map(function(t) { 
                return (<TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete}/>);
            })}
        </ul>
    );
}