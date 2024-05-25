import { useState } from "react";
import List from "@mui/material/List";

import TodoItem from "./TodoItem";

const initialTodos = [
  { id: 1, text: "walk the dog", completed: false },
  { id: 2, text: "walk the cat", completed: false },
  { id: 3, text: "walk the fish", completed: true },
  { id: 4, text: "walk the chicken", completed: false },
  { id: 5, text: "walk the bird", completed: true },
  { id: 6, text: "walk the cow", completed: false },
  { id: 7, text: "walk the pig", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
    </List>
  );
}
