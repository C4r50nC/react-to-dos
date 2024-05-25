import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

import Navbar from "./Navbar";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>To-dos</h1>
      <TodoList />
    </>
  );
}

export default App;
