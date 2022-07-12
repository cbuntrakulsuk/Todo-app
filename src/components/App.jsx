import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Search from "./Search";
import Filter from "./Filter";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [copyArr, setCopyArr] = useState([]);

  function pushtoArray(note) {
    setNoteArray((prevNote) => {
      return [...prevNote, note];
    });
  }

  function updateNote(id) {
    const newArr = noteArray.map((item, index) => {
      if (index === id && item.isComplete === false) {
        return { ...item, isComplete: true };
      } else if (index === id && item.isComplete === true) {
        return { ...item, isComplete: false };
      } else {
        return item;
      }
    });
    setNoteArray(newArr);
    setCopyArr(newArr); //makes a copy of the array
  }

  function filterList(name) {
    switch (name) {
      case "completed":
        return setNoteArray(copyArr.filter((item) => item.isComplete === true));
      case "active":
        return setNoteArray(
          copyArr.filter((item) => item.isComplete === false)
        );
      case "all":
        return setNoteArray(copyArr);
      default:
        setNoteArray([]);
        setCopyArr([]);
    }
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
      <Filter filter={filterList} />
    </div>
  );
}

export default App;
