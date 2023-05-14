import React from "react";

// Tab bar for switching between All, Active, and Done views.
const FILTERS = ["All", "Active", "Done"];

function FilterBar({ current, onChange }) {
  return (
    <div className="filter-bar">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`filter-bar__btn ${current === f ? "filter-bar__btn--active" : ""}`}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
