import React, { useState } from "react";

function TodoForm(props) {
  const [title, settitle] = useState("");
  const handleChange = (e) => {
    settitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    settitle("");
  };

  return (
    <div className="todo-form">
      <form
        action=""
        onSubmit={handleSubmit}
        className="form"
        autoComplete="off"
      >
        <input
          className="form-input"
          id="todo"
          type="text"
          placeholder="ADD TODOS..."
          onChange={handleChange}
          required
          value={title}
        />
        <button type="submit" className="form-btn">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
