import { AppContext } from "./components/Context";
import { useState } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
function App() {
  const note = [
    {
      id: 1,
      title: "Jason Onfroy",
      description:
        "Fire Starters like lit matches, I've been feeling really lost ducking all attachments,I don't really go outside because i hate traffic, don't wanna go outside getting caught in traffic",
    },
    {
      id: 2,
      title: "Lorem Ipsum Baby",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
  ];
  const [notes, setNotes] = useState(note);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_NOTE":
        setNotes([...notes, payload.newNote]);
        return;
      case "REMOVE_NOTE":
        setNotes(notes.filter((note) => note.id !== payload.noteId));
        return;
      default:
        return;
    }
  };
  return (
    <div className="App">
      <Header />
      <AppContext.Provider value={{ notes, dispatchUserEvent }}>
        <AddNote />
        <NoteList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
