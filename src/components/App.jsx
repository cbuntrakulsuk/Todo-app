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
  const [copyArr, setCopyArr] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(copyArr));
  }, [copyArr]);

  let count = copyArr.filter((item) => item.isComplete === false).length;

  function pushtoArray(note) {
    setNoteArray((prevNote) => {
      return [...prevNote, note];
    });

    setCopyArr((prevNote) => {
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
    setCopyArr(newArr);
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

      <ReactSortable
        tag="div"
        list={noteArray}
        setList={setNoteArray}
        animation={500}
      >
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
      </ReactSortable>

      <Filter filter={filterList} itemsLeft={count} />
    </div>
  );
}

export default App;
