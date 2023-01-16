import React from "react";
import { AppContext } from "./Context";
import { useContext } from "react";
import trash from "../images/trash.png";

const Note = ({ note }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  const handleRemoveNote = () => {
    dispatchUserEvent("REMOVE_NOTE", { noteId: note.id });
  };

  return (
    <div className=" relative p-2 border-2 border-green-700 rounded-md h-auto">
      <h3
        contentEditable="true"
        className="text-green-700 font-bold outline-none"
      >
        {note.title}
      </h3>
      <div contentEditable="true" className="mb-8 outline-none">
        <small className="break-words">{note.description}</small>
      </div>
      <button
        className="mt-4 absolute bottom-0 right-0"
        onClick={handleRemoveNote}
      >
        <img src={trash}></img>
      </button>
    </div>
  );
};

export default Note;
