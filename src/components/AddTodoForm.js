import React, { useState } from "react";

// Form for adding a new todo. Title is required; date and description are optional. Clears itself after submission.
function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      id: Date.now().toString(),
      title: title.trim(),
      date,
      description: description.trim(),
      done: false,
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setDate("");
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2 className="add-form__title">Add a task</h2>

      <label className="add-form__label">Title *</label>
      <input
        className="add-form__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        required
      />

      <label className="add-form__label">Due date</label>
      <input
        className="add-form__input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label className="add-form__label">Description</label>
      <textarea
        className="add-form__input add-form__textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Any extra details (optional)"
        rows={3}
      />

      <button type="submit" className="add-form__btn">
        Add task
      </button>
    </form>
  );
}

export default AddTodoForm;
