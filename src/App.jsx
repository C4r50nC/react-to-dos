import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

import Navbar from "./Navbar";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
