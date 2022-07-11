import { useState } from "react";

function Note(props) {
  const [isCompleted, setisCompleted] = useState(false);

  const strikeThough = {
    textDecoration: "line-through",
    textDecorationColor: "#9f1a46",
  };

  function handleClick() {
    setisCompleted((current) => !current);
    console.log(isCompleted);
    props.update(isCompleted, props.id);
  }

  return (
    <div
      style={props.bool ? { ...strikeThough } : null}
      onClick={handleClick}
      className="note"
    >
      {props.content}
    </div>
  );
}

export default Note;
