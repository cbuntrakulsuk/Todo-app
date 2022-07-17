import { ReactComponent as Checkmark } from "../images/icon-check.svg";

function Note(props) {
  const strikeThough = {
    textDecoration: "line-through",
    textDecorationColor: "#9f1a46",
    textDecorationThickness: "3px",
  };

  const background = {
    background: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
  };

  const check = {
    display: "block",
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
      <div className="flex-container">
        <div className="circle" style={props.bool ? { ...background } : null}>
          <Checkmark
            className="check"
            style={props.bool ? { ...check } : null}
          />
        </div>
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

export default Note;
