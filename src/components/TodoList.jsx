const TodoList = ({ todos, toggleTodo }) => {
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos, Add an item and click the Add button"}
        {todos.map((mappedTodo) => (
          <li key={mappedTodo.id}>
            <label>
              <input
                type="checkbox"
                checked={mappedTodo.completed}
                onChange={(e) => {
                  toggleTodo(mappedTodo.id, e.target.checked);
                }}
              />
              {mappedTodo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
