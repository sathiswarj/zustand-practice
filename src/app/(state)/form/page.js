"use client";

import { useState } from "react";
import { useStore } from "../../store";

export default function Page() {
    const [text, setText] = useState("");

    const addTodo = useStore((state) => state?.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            alert("Todo cannot be empty!");
            return;
        }
        addTodo({ text, completed: false });
        setText("");  
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="todo-input"
                    placeholder="Enter your todo..."
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
