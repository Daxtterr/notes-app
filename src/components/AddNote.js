import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { dispatchUserEvent } = useContext(AppContext);

  const handleAddNote = () => {
    if (title === "") {
      alert("Add a title");
    } else if (description === "") {
      alert("Add a description");
    }
    if (title != "" && description != "") {
      const note = { id: Math.random(), title, description };
      dispatchUserEvent("ADD_NOTE", { newNote: note });
    }
  };
  return (
    <div className="flex flex-col space-y-4 items-center pt-4">
      <h3 className="text-green-700 font-bold text-xl md:text-2xl">New Note</h3>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Title"
        className="rounded-md border-green-700 border-2 p-2 w-9/12 md:w-3/12"
      ></input>
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Description"
        className="rounded-md border-green-700 border-2 p-2 w-10/12 md:w-4/12 h-32"
      ></textarea>

      <button
        onClick={handleAddNote}
        className="bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
      >
        {" "}
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
