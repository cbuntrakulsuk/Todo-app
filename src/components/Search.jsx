import React, { useState } from "react";

function Search(props) {
  const [inputText, setInputText] = useState({
    content: "",
    isComplete: false,
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInputText({
      [name]: value,
      isComplete: false,
    });
  }

  function submitNote(event) {
    props.pushNote(inputText);
    event.preventDefault();

    setInputText({
      content: "",
      isComplete: false,
    });
  }

  return (
    <div className="search-bar">
      <form>
        <div className="search-field">
          <input
            name="content"
            onChange={handleChange}
            className="search-box"
            type="text"
            placeholder="Enter Note"
            value={inputText.content}
          ></input>
          <button onClick={submitNote} className="search-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
