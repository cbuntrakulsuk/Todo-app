import { ReactComponent as Checkmark } from "../images/icon-check.svg";
import { ReactComponent as Cross } from "../images/icon-cross.svg";

function Note(props) {
  const strikeThough = {
    textDecoration: "line-through",
    textDecorationColor: "#979595",
    textDecorationThickness: "3px",
  };

  const background = {
    background: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  };

  const check = {
    display: "block",
  };

  function handleClick(event) {
    let name = event.target.getAttribute("name");
    props.update(props.id, name);
  }

  return (
    <div
      className={props.toggle ? "note-light" : "note-dark "}
      style={props.bool ? { ...strikeThough } : null}
    >
      <div className="flex-container">
        <div
          onClick={handleClick}
          name="checkMark"
          className="circle"
          style={props.bool ? { ...background } : null}
        >
          <Checkmark
            className="check"
            style={props.bool ? { ...check } : null}
          />
        </div>
        <div className="content">{props.content}</div>
        <span className="deleteButton" name="delete" onClick={handleClick}>
          <Cross className="cross" />
        </span>
      </div>
    </div>
  );
}

export default Note;
