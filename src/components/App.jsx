import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Search from "./Search";
import Filter from "./Filter";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function pushtoArray(note) {
    setNoteArray((prevNote) => {
      return [...prevNote, note];
    });
  }

  function updateNote(value, id) {
    const updatedNote = [...noteArray];
    updatedNote[id].isComplete = value;
    setNoteArray(updatedNote);
  }

  function clearCompleted() {
    setNoteArray([]);
  }

  function filterList(name) {
    let result = noteArray.filter((item) => item.isComplete === true);
    setNoteArray(result);
    console.log(noteArray);
  }

  return (
    <div className="app">
      <Header />
      <Search pushNote={pushtoArray} />
      {noteArray.map((item, index) => {
        return (
          <Note
            content={item.content}
            id={index}
            key={index}
            update={updateNote}
            bool={item.isComplete}
          />
        );
      })}
      <Filter filter={filterList} clearList={clearCompleted} />
    </div>
  );
}

export default App;
