
function Filter () {

    function clearList() {
        console.log("Cleared");
    }

    return(
        <div className="filter-bar">
            <div>5 Items left</div>
            <div class="center-items">All</div>
            <div class="center-items">Active</div>
            <div class="center-items">Completed</div>
            <div class="center-items" onClick={clearList}>Clear Completed</div>
        </div>
    )
}

export default Filter;