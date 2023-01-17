import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* we want delete button to trigger handleClick function in App.jsx*/}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
