import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Search from "./Search";
import Filter from "./Filter";
import { ReactSortable } from "react-sortablejs";

function App() {
  const [noteArray, setNoteArray] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const FILTER_MAP = {
    All: () => true,
    Active: (item) => !item.isComplete,
    Completed: (item) => item.isComplete,
  };

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(noteArray));
  }, [noteArray]);

  let count = noteArray.filter((item) => item.isComplete === false).length;

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
  }

  function filterList(name) {
    switch (name) {
      case "completed":
        return setFilter("Completed");
      case "active":
        return setFilter("Active");
      case "all":
        return setFilter("All");
      default:
        setNoteArray([]);
    }
  }

  return (
    <div className="app">
      <Header />
      <Search pushNote={pushtoArray} />

      <ReactSortable
        tag="div"
        list={noteArray}
        setList={setNoteArray}
        animation={500}
      >
        {noteArray.filter(FILTER_MAP[filter]).map((item, index) => {
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
      </ReactSortable>

      <Filter filter={filterList} itemsLeft={count} />
    </div>
  );
}

export default App;
