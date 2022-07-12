function Filter(props) {
  function filter(event) {
    let name = event.target.getAttribute("name");
    props.filter(name);
  }

  return (
    <div className="filter-bar">
      <div>5 Items left</div>
      <button className="filter-btn" name="all" onClick={filter}>
        All
      </button>
      <button className="filter-btn" name="active" onClick={filter}>
        Active
      </button>
      <button className="filter-btn" name="completed" onClick={filter}>
        Completed
      </button>
      <button className="filter-btn" name="clearCompleted" onClick={filter}>
        Clear Completed
      </button>
    </div>
  );
}

export default Filter;
