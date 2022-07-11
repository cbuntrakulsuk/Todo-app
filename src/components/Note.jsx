// import { useState } from "react";

function Note(props) {
  const strikeThough = {
    textDecoration: "line-through",
    textDecorationColor: "#9f1a46",
  };

  function handleClick() {
    props.update(props.id);
  }

  return (
    <div
      className="note"
      style={props.bool ? { ...strikeThough } : null}
      onClick={handleClick}
    >
      {props.content}
    </div>
  );
}

export default Note;
