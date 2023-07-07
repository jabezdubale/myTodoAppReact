import "./styles.css";
import { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

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

  function toggleCompleteTodo(id, completed) {
    setCompleted((currentTodos) => {
      return currentTodos.map((todois) => {
        if (todois.id === id) {
          return { ...todois, completed };
        }
        return todois;
      });
    });
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todox) => todox.id !== id);
    });
  }

  function handleCompleteDelete(id) {
    setCompleted((currentTodos) => {
      return currentTodos.filter((todox) => todox.id !== id);
    });
  }

  function handleComplete(addedtodo) {
    setCompleted((currentList) => {
      return [...currentList, addedtodo];
    });
  }

  function handleUnComplete(addedCompleted) {
    setTodos((currentCompleted) => {
      return [...currentCompleted, addedCompleted];
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodos} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />

      {completed.length !== 0 && (
        <>
          <h1>&nbsp;</h1>
          <h1 className="header">Completed Lists</h1>
          <CompletedList
            completed={completed}
            toggleCompleteTodo={toggleCompleteTodo}
            handleCompleteDelete={handleCompleteDelete}
            handleUnComplete={handleUnComplete}
          />
        </>
      )}
    </>
  );
}

export default App;
