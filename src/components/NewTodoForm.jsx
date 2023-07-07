import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          type="text"
          id="item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button className="btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
};

export default NewTodoForm;
