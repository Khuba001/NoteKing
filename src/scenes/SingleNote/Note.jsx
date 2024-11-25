import { Box, colors, Typography } from "@mui/material";
import { tokens, useMode } from "../../theme";
import Header from "../../components/Header/Header";
import NoteItem from "../../components/NoteItem/NoteItem";
import { useTheme } from "@emotion/react";
import { useState } from "react";

function NoteDetails() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      {/* CONTAINER */}
      <Box
        display="flex"
        flexDirection="column"
        border="1px solid #7777"
        borderRadius="9px"
        padding="20px 16px"
        mt="56px"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Box display="flex" flexDirection="column" gap="14px">
          {/* SINGLE ROW */}
          <Box>
            <Typography variant="h5">Last edit</Typography>
            <Typography variant="h6" color={colors.grey[300]}>
              This note hasn't been edited yet
            </Typography>
          </Box>
          {/* SINGLE ROW */}
          <Box>
            <Typography variant="h5">Created At</Typography>
            <Typography variant="h6" color={colors.grey[300]}>
              25/11/2024
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Note() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  const [openEdit, setOpenEdit] = useState(false);

  function handleEditMode() {
    setOpenEdit((openEdit) => !openEdit);
  }

  return (
    <Box display="flex">
      <Box width="50%">
        <Header title={"EDIT YOUR NOTE"} />

        <NoteItem
          name={"Guest"}
          title={"Note1"}
          category={"shopping"}
          description={"cos tam cos tam siema neiu"}
          btn1={"BACK"}
          btn2={openEdit ? "SAVE" : "EDIT"}
          size={1.2}
          OnClickBtn2={handleEditMode}
        />
      </Box>
      <Box>
        <Header title={"DETAILS"} />
        <NoteDetails />
      </Box>
    </Box>
  );
}

export default Note;
