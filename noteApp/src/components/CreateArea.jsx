import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //1- Create a constant that keeps track of the title and content.
  //1 receive event when it gets triggered
  function handleChange(event) {
    //1 distructure event so we can get hold of
    const { name, value } = event.target;
    //1 when we start typing it will be savced inside state
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //2 prevent below
  //2 when a button that is inside a from is clicked the default behavior
  //2to refresh page
  function submitNote(event) {
    //2pass current created note
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          values={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          values={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
