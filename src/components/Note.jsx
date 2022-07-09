import {useState} from 'react';

function Note (props) {

    const [isCompleted, setisCompleted] = useState(false);

    const strikeThough = {
        textDecoration: 'line-through',
        textDecorationColor: '#9f1a46'
    }

    function handleClick () {
        setisCompleted(true);
    }

    return (
        <div style={isCompleted ? {...strikeThough} : null} onClick={handleClick} className="note" >
            {props.content}
        </div>
    );
} 

export default Note;