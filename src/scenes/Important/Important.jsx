import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import NoteItem from "../../components/NoteItem/NoteItem";
import { useState } from "react";

function Important({ notesData, setNotesData }) {
  const favouriteNotes = notesData.filter((note) => note.isImportant);
  function handleUnfavourite(id) {
    const newNotes = notesData.map((note) =>
      note.id === id ? { ...note, isImportant: false } : note
    );
    setNotesData(newNotes);
  }

  return (
    <Box>
      <Header
        title={"IMPORTANT"}
        subheading={"Here You Can View Important Notes"}
      />
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        justifyItems="center"
        alignContent="center"
      >
        {favouriteNotes.map((note) => (
          <NoteItem
            name={"Guest"}
            title={note.title}
            category={note.category}
            description={note.description}
            key={note.id}
            OnClickBtn1={() => handleUnfavourite(note.id)}
            btn1={"UNFAVOURITE"}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Important;
