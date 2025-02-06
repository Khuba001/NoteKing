import {
  Box,
  Button,
  Select,
  TextField,
  MenuItem,
  Checkbox,
  Snackbar,
  FormControl,
  InputLabel,
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
  isTrashed: false,
  editedAt: null,
};

const noteSchema = yup.object().shape({
  title: yup.string().required("required"),
  description: yup.string().required("required"),
  category: yup.string().required("required"),
});

const AddNotes = ({ notesData, setNotesData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFormSubmit = (values, { resetForm }) => {
    const newNote = {
      ...values,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };

    setNotesData((notesData) => [...notesData, newNote]);
    resetForm();
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column">
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
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "48px",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              gap="2rem"
              sx={{ width: "50%", backgroundColor: colors.primary[800] }}
              border="3px solid"
              borderColor={colors.primary[600]}
              borderRadius="9px"
              padding="20px 16px
              "
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
            <Box display="flex" justifyContent="center" mt="32px" width="100%">
              <Button
                fullWidth
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "10%", padding: "16px 16px" }}
                style={{ fontSize: "14px", fontWeight: "bold" }}
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
