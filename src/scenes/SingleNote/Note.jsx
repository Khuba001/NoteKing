import {
  Box,
  colors,
  Typography,
  TextField,
  Button,
  Checkbox,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { tokens, useMode } from "../../theme";
import Header from "../../components/Header/Header";
import NoteItem from "../../components/NoteItem/NoteItem";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

function NoteDetails({ currentNote }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const timeFormatted = new Date(currentNote.createdAt).toLocaleDateString();

  return (
    <Box>
      {/* CONTAINER */}
      <Box
        display="flex"
        flexDirection="column"
        border="3px solid"
        borderColor={colors.primary[600]}
        borderRadius="9px"
        padding="20px 16px"
        mt="56px"
        sx={{ backgroundColor: colors.primary[800] }}
      >
        <Box display="flex" flexDirection="column" gap="14px">
          {/* SINGLE ROW */}
          <Box>
            <Typography variant="h4">Last edit</Typography>
            <Typography variant="h5" color={colors.grey[300]}>
              {currentNote.editedAt}
            </Typography>
          </Box>
          {/* SINGLE ROW */}
          <Box>
            <Typography variant="h4">Created At</Typography>
            <Typography variant="h5" color={colors.grey[300]}>
              {timeFormatted}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Note({ notesData, setNotesData }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  let { noteId } = useParams();
  const currentNote = notesData.find((note) => note.id === noteId);
  function handleFormSubmit(values) {
    const updatedNotes = notesData.map((note) =>
      note.id === currentNote.id
        ? {
            ...note,
            ...values,
            editedAt: new Date().toLocaleDateString(),
          }
        : note
    );
    setNotesData(updatedNotes);
    setOpenEdit(false);
  }

  const initialValues = {
    title: currentNote.title,
    description: currentNote.description,
    category: currentNote.category,
    isImportant: currentNote.isImportant,
    isTrashed: currentNote.isTrashed,
  };
  const editSchema = yup.object().shape({
    title: yup.string().required("required"),
    description: yup.string().required("required"),
    category: yup.string().required("required"),
  });

  const [openEdit, setOpenEdit] = useState(false);

  function handleBack() {
    navigate("/notes");
  }

  function handleEditMode() {
    setOpenEdit((openEdit) => !openEdit);
  }

  return (
    <Box display="flex">
      {!openEdit ? (
        <Box width="50%">
          <Header title={"EDIT YOUR NOTE"} />

          <NoteItem
            name={"Guest"}
            title={currentNote.title}
            category={currentNote.category}
            description={currentNote.description}
            btn1={"BACK"}
            OnClickBtn1={handleBack}
            btn2={openEdit ? "SAVE" : "EDIT"}
            size={1.2}
            OnClickBtn2={handleEditMode}
          />
        </Box>
      ) : (
        <Box width="50%">
          <Header title={"EDIT YOUR NOTE"} />
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={editSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="2rem"
                  width="80%"
                >
                  <TextField
                    variant="filled"
                    type="text"
                    label="Title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                    name="title"
                    error={!!touched.title && !!errors.title}
                    helperText={touched.title && errors.title}
                  />
                  <TextField
                    variant="filled"
                    type="text"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                    multiline
                    rows={3}
                  />
                  <FormControl>
                    <InputLabel id="select-label">Category</InputLabel>
                    <Select
                      labelId="select-label"
                      label="Category"
                      fullWidth
                      variant="filled"
                      name="category"
                      value={values.category || "life"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.category && !!errors.category}
                    >
                      <MenuItem value="shopping">Shopping</MenuItem>
                      <MenuItem value="life">Life</MenuItem>
                      <MenuItem value="traveling">Traveling</MenuItem>
                      <MenuItem value="school">School</MenuItem>
                      <MenuItem value="work">Work</MenuItem>
                      <MenuItem value="hobby">Hobby</MenuItem>
                    </Select>
                  </FormControl>
                  <Checkbox
                    style={{ backgroundColor: "transparent" }}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    color="default"
                    checked={values.isImportant}
                    onChange={(event) =>
                      handleChange({
                        target: {
                          name: "isImportant",
                          value: event.target.checked,
                        },
                      })
                    }
                    onBlur={handleBlur}
                    name="isImportant"
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  mt="32px"
                  width="100%"
                  gap="20px"
                  sx={{ transform: "translate(-10%)" }}
                >
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{
                      width: "20%",
                      padding: "8px 8px",
                      "&:hover": {
                        backgroundColor: colors.blueAccent[500],
                      },
                    }}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    type="submit"
                    color="secondary"
                    variant="outlined"
                    sx={{
                      width: "20%",
                      padding: "8px 8px",
                      "&:hover": {
                        borderColor: colors.blueAccent[500],
                        color: colors.blueAccent[500],
                      },
                    }}
                    onClick={() => setOpenEdit(!openEdit)}
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      )}
      <Box>
        <Header title={"DETAILS"} />
        <NoteDetails currentNote={currentNote} />
      </Box>
    </Box>
  );
}

export default Note;
