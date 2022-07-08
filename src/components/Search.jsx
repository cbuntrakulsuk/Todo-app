import React, {useState} from "react";

function Search(props) {

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const {value} = event.target;
        setInputText(value);
    }

    function handleClick(event) {
        props.pushNote(inputText);
        event.preventDefault();
    }

    return(
        <div className='search-bar'>
            <form>
                <div className="search-field">
                    <input name="inputNote" onChange={handleChange} className="ser" type="text" placeholder='Enter Note' value={inputText}></input>
                    <button onClick={handleClick} className="search-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Search;