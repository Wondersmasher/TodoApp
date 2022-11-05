import React, { useState, useReducer } from "react";
import Form from "./Form";
import Note from "./Note";
function reducer(state, action) {
  if (action.type === "ADD") {
    return { ...state, notes: [action.payload, ...state.notes] };
  }
  if (action.type === "REMOVE") {
    return { ...state, notes: action.payload };
  }
  if (action.type === "FIND") {
    return { ...state };
  }
  throw new Error("not found");
}
function App() {
  const defaultState = { notes: [] };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [todos, setTodo] = useState({ title: "", todo: "" });
  const [value, setValue] = useState(0);
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todos, [name]: value });
  }
  function handleAdd(e) {
    e.preventDefault();
    const newTodo = {
      title: todos.title,
      todo: todos.todo,
      id: new Date().getTime().toString(),
    };
    setTodo({ title: "", todo: "" });
    dispatch({ type: "ADD", payload: newTodo });
  }
  function handleRemove(id) {
    const newTodo = state.notes.filter((note) => id !== note.id);
    dispatch({ type: "REMOVE", payload: newTodo });
  }
  function findTodo(id) {
    setValue(id);
    dispatch({ type: "FIND" });
  }
  return (
    <main>
      <p>This is a todo application</p>
      <button>New Note</button>
      <Form
        todo={todos.title}
        handleChange={(e) => handleChange(e)}
        name="title"
      ></Form>
      {state.notes.map((note, id) => (
        <button key={note.id} onClick={() => findTodo(id)}>
          {note.title}
        </button>
      ))}
      <Form
        todo={todos.todo}
        handleChange={(e) => handleChange(e)}
        name="todo"
      ></Form>

      <button onClick={(e) => handleAdd(e)}>Add Note</button>
      {state.notes[value] && (
        <Note
          note={state.notes[value]?.todo}
          handleRemove={() => handleRemove(state.notes[value]?.id)}
        ></Note>
      )}
    </main>
  );
}
export default App;
