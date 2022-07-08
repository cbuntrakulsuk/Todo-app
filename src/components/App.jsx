import './App.css';
import Header from "./Header";
import Note from "./Note";
import Search from "./Search";
import {useState} from "react";

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
    </div>
  );
}

export default App;
