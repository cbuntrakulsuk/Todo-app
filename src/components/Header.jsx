import { ReactComponent as Sun } from "../images/icon-sun.svg";

function Header() {
  return (
    <div>
      <header>
        <div className="title-bar">
          <div className="brand">
            <h1>TODO</h1>
          </div>
          <div className="icon">
            <Sun fontSize="large" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
