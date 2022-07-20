import { ReactComponent as Sun } from "../images/icon-sun.svg";
import { ReactComponent as Moon } from "../images/icon-moon.svg";
// import React, { useState } from "react";

function Header(props) {
  function toggleTheme() {
    props.theme();
  }

  return (
    <div>
      <header className={props.toggle ? "header-light" : "header"}>
        <div className="title-bar">
          <div className="brand">
            <h1>TODO</h1>
          </div>
          <div className="icon">
            {!props.toggle ? (
              <Sun onClick={toggleTheme} fontSize="large" />
            ) : (
              <Moon onClick={toggleTheme} fontSize="large" />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
