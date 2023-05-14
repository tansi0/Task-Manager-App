// Handles reading and writing todos to localStorage so they stick around when you close the browser.

const STORAGE_KEY = "todos";

export function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
