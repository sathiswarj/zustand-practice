"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import zukeeper from "zukeeper";

export const useStore = create(
  persist(
    zukeeper((set) => ({
      todos: [],

      addTodo: (todo) =>
        set((state) => ({
          todos: [...state.todos, todo],
        })),

      deleteTodo: (index) =>
        set((state) => ({
          todos: state.todos.filter((_, i) => i !== index),
        })),

      toggleTodo: (index) =>
        set((state) => ({
          todos: state.todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
    })),
    {
      name: "todo-storage",  
      getStorage: () => localStorage,  
    }
  )
);
