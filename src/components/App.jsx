import './App.css';
import Header from "./Header";
import Note from "./Note";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <div className="note-area">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>

    </div>
  );
}

export default App;
