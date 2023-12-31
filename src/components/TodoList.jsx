const TodoList = ({ todos, toggleTodo, handleDelete, handleComplete }) => {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "No Todos, Add an item and click the Add button"}
        {todos.map((mappedTodo) => (
          <li key={mappedTodo.id}>
            <label>
              <input
                type="checkbox"
                checked={mappedTodo.completed}
                onChange={(e) => {
                  handleComplete(mappedTodo);
                  toggleTodo(mappedTodo.id, e.target.checked);
                  handleDelete(mappedTodo.id);
                }}
              />
              {mappedTodo.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(mappedTodo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
