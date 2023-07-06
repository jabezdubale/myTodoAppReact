import "./styles.css";
import { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todois) => {
        if (todois.id === id) {
          return { ...todois, completed };
        }
        return todois;
      });
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
