import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import NoteItem from "../../components/NoteItem/NoteItem";
import { useState } from "react";

function Trash({ notesData, setNotesData }) {
  function handleUndo(id) {
    setNotesData(
      notesData.map((note) =>
        note.id === id ? { ...note, isTrashed: false } : note
      )
    );
  }
  function handleRemovePerm(id) {
    setNotesData(notesData.filter((note) => note.id !== id));
  }
  return (
    <Box>
      <Header title={"TRASH"} subheading={"Bring Back Your Deleted Notes"} />
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        justifyItems="center"
        alignContent="center"
      >
        {notesData.map(
          (item) =>
            item.isTrashed && (
              <NoteItem
                name={"Guest"}
                title={item.title}
                category={item.category}
                description={item.description}
                btn1={"UNDO"}
                OnClickBtn1={() => handleUndo(item.id)}
                btn2={"REMOVE"}
                OnClickBtn2={() => handleRemovePerm(item.id)}
                key={item.id}
              />
            )
        )}
      </Box>
    </Box>
  );
}

export default Trash;
