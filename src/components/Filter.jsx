
function Filter (props) {

    function clearCompleted() {
        props.clearList();
    }

    return(
        <div className="filter-bar">
            <div>5 Items left</div>
            <div className="center-items">All</div>
            <div className="center-items">Active</div>
            <div className="center-items">Completed</div>
            <div className="center-items" onClick={clearCompleted}>Clear Completed</div>
        </div>
    )
}

export default Filter;