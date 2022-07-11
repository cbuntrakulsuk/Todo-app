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
  function updateNote(id) {
    const newArr = noteArray.map((item, index) => {
      return index === id ? { ...item, isComplete: true } : item;
    });
    setNoteArray(newArr);
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

// new idea
// call updateNote onclick from note.jsx X
// update the bool value to true in app.jsx by passing the name? to identify the object and copy over previous note with only the updated bool.
// render the strike thru in app.jsx based on boolean val
