import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Search from "./Search";
import Filter from "./Filter";
import Footer from "./Footer";
import { ReactSortable } from "react-sortablejs";

function App() {
  const [noteArray, setNoteArray] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const [isLightActive, setLight] = useState(false);

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
    console.log(note);
    setNoteArray((prevNote) => {
      return [...prevNote, note];
    });
  }

  function updateNote(id, name) {
    console.log(noteArray);
    if (name === "delete") {
      const newArr = noteArray.filter((item) => item.uuid !== id);
      setNoteArray(newArr);
    } else {
      const newArr = noteArray.map((item) => {
        if (item.uuid === id && item.isComplete === false) {
          return { ...item, isComplete: true };
        } else if (item.uuid === id && item.isComplete === true) {
          return { ...item, isComplete: false };
        } else {
          return item;
        }
      });
      setNoteArray(newArr);
    }
  }

  function filterList(name) {
    switch (name) {
      case "completed":
        return setFilter("Completed");
      case "active":
        return setFilter("Active");
      case "all":
        return setFilter("All");
      case "clearCompleted":
        clearC();
        return setFilter("Active");
      default:
        setNoteArray([]);
    }
  }

  function clearC() {
    const newArr = noteArray.filter((item) => item.isComplete !== true);
    setNoteArray(newArr);
  }

  function applyTheme() {
    setLight((current) => !current);
  }

  return (
    <div className={isLightActive ? "app-light" : "app-dark"}>
      <Header toggle={isLightActive} theme={applyTheme} />
      <Search pushNote={pushtoArray} toggle={isLightActive} />

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
              key={index}
              update={updateNote}
              bool={item.isComplete}
              toggle={isLightActive}
              uuid={item.uuid}
            />
          );
        })}
      </ReactSortable>

      <Filter toggle={isLightActive} filter={filterList} itemsLeft={count} />
      <Footer />
    </div>
  );
}

export default App;
