const CompletedList = ({
  completed,
  toggleCompleteTodo,
  handleCompleteDelete,
  handleUnComplete,
}) => {
  return (
    <>
      <ul className="list">
        {completed.map((mappedTodo) => (
          <li key={mappedTodo.id}>
            <label>
              <input
                type="checkbox"
                checked={true}
                onChange={(e) => {
                  toggleCompleteTodo(mappedTodo.id, e.target.checked);
                  handleUnComplete(mappedTodo);
                  handleCompleteDelete(mappedTodo.id);
                }}
              />
              {mappedTodo.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => handleCompleteDelete(mappedTodo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompletedList;
