import React, { useState } from "react";

function Filter(props) {
  const activeColor = {
    color: "#9f1a46",
  };

  const [selectedButton, setSelectedButton] = useState({
    isAllClicked: false,
    isActiveClicked: false,
    isCompletedClicked: false,
  });

  function filter(event) {
    if (event.target.name === "all") {
      setSelectedButton({
        isAllClicked: true,
      });
    } else if (event.target.name === "active") {
      setSelectedButton({
        isActiveClicked: true,
      });
    } else if (event.target.name === "completed") {
      setSelectedButton({
        isCompletedClicked: true,
      });
    } else {
      setSelectedButton({});
    }

    let name = event.target.getAttribute("name");
    props.filter(name);
  }

  return (
    <div>
      <div className="filter-bar">
        <div>{props.itemsLeft} Items left</div>
        <button
          className="filter-btn"
          style={selectedButton.isAllClicked === true ? activeColor : null}
          name="all"
          onClick={filter}
        >
          All
        </button>
        <button
          className="filter-btn"
          style={selectedButton.isActiveClicked === true ? activeColor : null}
          name="active"
          onClick={filter}
        >
          Active
        </button>
        <button
          className="filter-btn"
          style={
            selectedButton.isCompletedClicked === true ? activeColor : null
          }
          name="completed"
          onClick={filter}
        >
          Completed
        </button>
        <button className="filter-btn" name="clearCompleted" onClick={filter}>
          Clear Completed
        </button>
      </div>
      <p className="reorder"> Drag and drop to reorder list </p>
    </div>
  );
}

export default Filter;
