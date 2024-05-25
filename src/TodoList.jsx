import { useState, useEffect } from "react";
import { Box, List, Typography } from "@mui/material";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
  const initialData = JSON.parse(localStorage.getItem("todos"));
  if (!initialData) return [];
  return initialData;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        To-dos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={() => removeTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
