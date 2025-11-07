import { useState } from "react";

export default function TaskForm({ onAddTask }) {
    const [value, setValue] = useState("");
    function submitHandler(e) {
        e.preventDefault();
        const text = value.trim();
        if (!text) {
            return null;
        } else {
            onAddTask(text);
            setValue(""); // reset input
        }
    }
    return (
        <form className="task-form" onSubmit={submitHandler} >
            <input className="task-input" type="text" placeholder="task" value={value} onChange={e => setValue(e.target.value)}/>
            <button className="task-button" type="submit">+ add</button>
        </form>
    );
}