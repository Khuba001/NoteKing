import {
  Box,
  Button,
  colors,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import Header from "../../components/Header/Header";
import { SearchOutlined } from "@mui/icons-material";
import NoteItem from "../../components/NoteItem/NoteItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

function Notes({ notesData, setNotesData }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const filteredNotes = notesData
    .filter((note) => !note.isTrashed)
    .filter((note) => note.title.toLowerCase().includes(query.toLowerCase()));

  const sortedItems = [...filteredNotes].sort((a, b) => {
    if (sortBy === "normal") return 0;
    if (sortBy === "favourites") return b.isImportant - a.isImportant;
    if (sortBy === "longest") return b.title.length - a.title.length;
    return 0;
  });

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentNotes = sortedItems.slice(firstIndex, lastIndex);

  function handleDeleteNote(id) {
    setNotesData((notesData) =>
      notesData.map((note) =>
        note.id === id ? { ...note, isTrashed: true } : note
      )
    );
  }

  function handleDeleteAll() {
    setNotesData((notesData) =>
      notesData.map((note) => ({ ...note, isTrashed: true }))
    );
  }

  function handleNavigate(id) {
    navigate(`/notes/${id}`);
  }

  function handleSortBy(e) {
    const sortOption = e.target.value;
    setSortBy(sortOption);
  }

  function handlePageChange(event, value) {
    setCurrentPage(value);
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box mb="32px">
        <Header title={"NOTES"} subheading={"Browse all your notes"} />
        <form>
          <Box display="flex" alignItems="center" gap="24px" padding="0 81px">
            <TextField
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
              variant="filled"
              type="text"
              label="Search"
              name="search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ width: "50%" }}
            />
            <FormControl fullWidth sx={{ width: "30%" }}>
              <InputLabel id="select-label">Sort by</InputLabel>
              <Select
                labelId="select-label"
                label="Sort by"
                variant="filled"
                name="sort"
                value={sortBy}
                onChange={handleSortBy}
              >
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="favourites">Favourites</MenuItem>
                <MenuItem value="longest">Longest</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="button"
              color="secondary"
              fullWidth
              variant="contained"
              size="large"
              onClick={handleDeleteAll}
              sx={{
                width: "10%",
                fontSize: "14px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: colors.blueAccent[500],
                },
              }}
            >
              Trash all
            </Button>
          </Box>
        </form>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          justifyItems="center"
          alignContent="center"
        >
          {currentNotes.map(
            (item) =>
              !item.isTrashed && (
                <NoteItem
                  name={"Guest"}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  btn1={"DETAILS"}
                  btn2={"DELETE"}
                  OnClickBtn2={() => handleDeleteNote(item.id)}
                  OnClickBtn1={() => handleNavigate(item.id)}
                  key={item.id}
                />
              )
          )}
        </Box>
      </Box>
      <Pagination
        siblingCount={0}
        count={Math.ceil(
          sortedItems.filter((note) => !note.isTrashed).length / itemsPerPage
        )}
        sx={{ alignSelf: "center" }}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
}

export default Notes;
