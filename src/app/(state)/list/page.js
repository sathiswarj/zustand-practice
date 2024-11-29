"use client";

import { useStore } from "../../store";

export default function ListPage() {
    const todos = useStore((state) => state.todos);
    const toggleTodo = useStore((state) => state.toggleTodo);
    const deleteTodo = useStore((state) => state.deleteTodo);

    return (
        <>
            {todos.map((item, index) => (
                <div className="todo-item" key={index}>
                    <span className={item.completed ? "completed" : ""}>{item.text}</span>
                    <button 
                        disabled={item.completed} 
                        onClick={() => toggleTodo(index)}
                    >
                      Completed   
                    </button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            ))}
        </>
    );
}
