import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Search(props) {
  const [inputText, setInputText] = useState({
    content: "",
    isComplete: false,
    uid: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInputText({
      [name]: value,
      isComplete: false,
      uuid: uuidv4(),
    });
  }

  function submitNote(event) {
    props.pushNote(inputText);
    event.preventDefault();

    setInputText({
      content: "",
      isComplete: false,
      uuid: "",
    });
  }

  return (
    <div className="search-bar">
      <form onSubmit={submitNote}>
        <div className="search-field">
          <input
            autoFocus
            name="content"
            onChange={handleChange}
            className={props.toggle ? "search-box-light" : "search-box-dark"}
            type="text"
            placeholder="Create a new todo..."
            value={inputText.content}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Search;
