import {
  Box,
  Button,
  colors,
  Select,
  TextField,
  MenuItem,
  Checkbox,
  Snackbar,
} from "@mui/material";
import Header from "../../components/Header/Header";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";

const initialValues = {
  title: "",
  description: "",
  category: "life",
  isImportant: false,
};

const noteSchema = yup.object().shape({
  title: yup.string().required("required"),
  description: yup.string().required("required"),
  category: yup.string().required("required"),
});

const AddNotes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [notes, setNotes] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  console.log(notes);
  const handleFormSubmit = (values) => {
    const newNote = {
      ...values,
      id: crypto.randomUUID(),
    };

    setNotes((notes) => [...notes, newNote]);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box m="20px" display="flex" minHeight="100vh" flexDirection="column">
      <Header
        title={"ADD NOTES"}
        subheading={"You can write your notes here!"}
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={noteSchema}
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
            <Box display="flex" flexDirection="column" gap="1rem" width="400px">
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
              <label style={{ color: `${colors.grey[100]}` }}>Category</label>
              <Select
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
              <Checkbox
                style={{ backgroundColor: "transparent" }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                color="default"
                checked={values.isImportant}
                onChange={handleChange}
                onBlur={handleBlur}
                name="isImportant"
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="0.5rem">
              <Button
                fullWidth
                type="submit"
                color="secondary"
                variant="contained"
              >
                Add New Note
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Snackbar
        autoHideDuration={2000}
        message="Note added successfully!"
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
};

export default AddNotes;
