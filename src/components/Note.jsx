
function Note (props) {
    return (
        <div className="note">
            {console.log(props.content)}
            <p>{props.content}</p>
        </div>
    );
} 

export default Note;