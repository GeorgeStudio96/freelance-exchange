"use client";

import { useValueContext } from "./ValueContext";

export default function Search() {
  const { filters, setFilters } = useValueContext();

  function getInputValue(e: any) {
    return setFilters({ ...filters, searchValue: e.target.value });
  }

  return (
    <div>
      <input
        type="search"
        value={filters.searchValue}
        className="input input-search"
        placeholder="Search some projects..."
        onChange={getInputValue}
      />
      <div>Input value: {filters.searchValue}</div>
    </div>
  );
}
