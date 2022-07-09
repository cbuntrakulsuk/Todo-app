import './App.css';
import {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Search from "./Search";
import Filter from "./Filter";


function App() {

  const [noteArray, setNoteArray] = useState([]);

  function pushtoArray(note) {
    setNoteArray((prevNote)=>{
      return (
        [
          ...prevNote,
          note
        ]
      )
    })
  }

  return (
    <div className="app">
      <Header />
      <Search pushNote={pushtoArray}/>
      {noteArray.map((item)=> {
        return(
          <Note content={item} />
        )
      })}
      <Filter />
    </div>
  );
}

export default App;
