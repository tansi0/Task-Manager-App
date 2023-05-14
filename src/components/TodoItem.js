import React from "react";

// A single todo card. Shows the title, due date, and description.
// Clicking the checkbox marks it done. The delete button removes it.
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.done ? "todo-item--done" : ""}`}>
      <div className="todo-item__left">
        <input
          type="checkbox"
          className="todo-item__checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <div className="todo-item__content">
          <p className="todo-item__title">{todo.title}</p>
          {todo.date && (
            <p className="todo-item__date">Due: {todo.date}</p>
          )}
          {todo.description && (
            <p className="todo-item__description">{todo.description}</p>
          )}
        </div>
      </div>
      <button
        className="todo-item__delete"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
