import React from "react";
export default function Form({ todo, handleChange, name }) {
  return (
    <form>
      <input
        type="text"
        name={name}
        id={name}
        value={todo}
        placeholder={`Add new ${name}`}
        onChange={handleChange}
      />
    </form>
  );
}
