import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");

  const [notes, setNotes] = useState([
    {
      conten: "Aprender React",
      complete: false,
      id: 1,
    },
  ]);
  const HashChange = (event) => {
    setNewTask(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      { conten: newTask, complete: false, id: notes.length + 1 },
    ]);
  };

  return (
    <>
      <h1>Task tacker</h1>
      <div>
        <form onSubmit={handelSubmit}>
          Add note:
          <input type="text" value={newTask} onChange={HashChange} />
          <button>add</button>
        </form>
      </div>
      {notes.map((note) => (
        <div key={note.id}>
         <input type="checkbox" />
          <h2>{note.conten}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
