
function Filter (props) {

    function clearCompleted() {
        props.clearList();
    }

    function filterCompleted(event) {
        let name = event.target.getAttribute('name');
        props.filter(name);
    }

    return(
        <div className="filter-bar">
            <div>5 Items left</div>
            <div className="filter-btn">All</div>
            <div className="filter-btn">Active</div>
            <div className="filter-btn" name = "completed" onClick = { filterCompleted }>Completed</div>
            <button className="filter-btn" onClick = { clearCompleted }>Clear Completed</button>
        </div>
    )
}

export default Filter;