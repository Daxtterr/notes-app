import React, { useContext } from "react";
import { AppContext } from "./Context";
import Note from "./Note";

const NoteList = () => {
  const { notes } = useContext(AppContext);
  return (
    <div className=" w-11/12 mx-auto pb-10 mt-10">
      <h3 className="text-green-700 font-bold text-2xl mb-4">Available Notes</h3>
      <div className="grid md:grid-cols-4 gap-8 md:gap-4">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
