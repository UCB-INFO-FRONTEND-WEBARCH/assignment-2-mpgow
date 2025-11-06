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
        <form onSubmit={submitHandler} className="task-form">
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button type="submit">+ add task</button>
        </form>
    );
}