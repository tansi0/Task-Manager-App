import React, { useState, useEffect } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoItem from "../components/TodoItem";
import FilterBar from "../components/FilterBar";
import { loadTodos, saveTodos } from "../store/todoStore";

// Main page. Manages the todo list in state and syncs to localStorage
// whenever anything changes.
function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load saved todos on first render
  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  function handleAdd(newTodo) {
    const updated = [newTodo, ...todos];
    setTodos(updated);
    saveTodos(updated);
  }

  function handleToggle(id) {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTodos(updated);
    saveTodos(updated);
  }

  function handleDelete(id) {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    saveTodos(updated);
  }

  function handleClearDone() {
    const updated = todos.filter((t) => !t.done);
    setTodos(updated);
    saveTodos(updated);
  }

  const filtered = todos.filter((t) => {
    if (filter === "Active") return !t.done;
    if (filter === "Done") return t.done;
    return true;
  });

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">My Tasks</h1>
        <p className="home__count">
          {todos.length - doneCount} remaining · {doneCount} done
        </p>
      </header>

      <AddTodoForm onAdd={handleAdd} />

      <div className="home__list-section">
        <div className="home__list-header">
          <FilterBar current={filter} onChange={setFilter} />
          {doneCount > 0 && (
            <button className="home__clear-btn" onClick={handleClearDone}>
              Clear done
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <p className="home__empty">
            {filter === "Done" ? "Nothing done yet." : "No tasks here."}
          </p>
        ) : (
          <div className="home__list">
            {filtered.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
