import { Box, Button, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
  title: "",
  description: "",
  category: "",
};

const noteSchema = yup.object().shape({
  title: yup.string().required("required"),
  description: yup.string().required("required"),
});

const AddNotes = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
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
            <Box display="flex"></Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddNotes;
