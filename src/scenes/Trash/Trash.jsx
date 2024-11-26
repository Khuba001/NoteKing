import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import NoteItem from "../../components/NoteItem/NoteItem";

function Trash() {
  return (
    <Box>
      <Header title={"TRASH"} subheading={"Bring Back Your Deleted Notes"} />
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        justifyItems="center"
        alignContent="center"
      >
        <NoteItem
          name={"Guest"}
          title={"Note1"}
          category={"shopping"}
          description={"cos tam cos tam siema neiu"}
          btn1={"UNDO"}
          btn2={"REMOVE"}
        />
        <NoteItem
          name={"Guest"}
          title={"Note1"}
          category={"shopping"}
          description={"cos tam cos tam siema neiu"}
          btn1={"UNDO"}
          btn2={"REMOVE"}
        />
        <NoteItem
          name={"Guest"}
          title={"Note1"}
          category={"shopping"}
          description={"cos tam cos tam siema neiu"}
          btn1={"UNDO"}
          btn2={"REMOVE"}
        />
        <NoteItem
          name={"Guest"}
          title={"Note1"}
          category={"shopping"}
          description={"cos tam cos tam siema neiu"}
          btn1={"UNDO"}
          btn2={"REMOVE"}
        />
      </Box>
    </Box>
  );
}

export default Trash;
