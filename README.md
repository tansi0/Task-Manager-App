# Task Manager App

A simple task manager built with React. Create tasks with a title, due date, and description — mark them done when you're finished.

## Features

- Add tasks with a title, optional due date, and optional description
- Mark tasks as done with a checkbox
- Filter between All, Active, and Done
- Clear all completed tasks at once
- Tasks persist in `localStorage` — they survive page refreshes

## Getting started

```bash
npm install
npm start
```

## Structure

```
src/
├── components/
│   ├── AddTodoForm.js   # Form for creating new tasks
│   ├── FilterBar.js     # All / Active / Done tabs
│   └── TodoItem.js      # Individual task card
├── pages/
│   └── Home.js          # Main page, manages state
├── store/
│   └── todoStore.js     # localStorage read/write helpers
├── App.js
└── index.js
```

## Built with

- React 18
- localStorage for persistence
- Plain CSS — no UI libraries
