import React from "react";
export default function Note({ note, handleRemove }) {
  return (
    <div>
      <h4>{note}</h4>
      <button onClick={handleRemove}>Done</button>
    </div>
  );
}
