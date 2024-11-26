import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import NoteItem from "../../components/NoteItem/NoteItem";

function Important() {
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
        <NoteItem
          name={"Guest"}
          title={"Note1"}
          category={"shopping"}
          description={"cos tam cos tam siema neiu"}
          btn1={"UNFAVOURITE"}
        />
      </Box>
    </Box>
  );
}

export default Important;
