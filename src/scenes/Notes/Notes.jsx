import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import { SearchOutlined } from "@mui/icons-material";
import NoteItem from "../../components/NoteItem/NoteItem";
import { useState } from "react";
import useLocalStorageState from "../../hooks/useLocalStorageState";

function Notes({ notesData }) {
  return (
    <Box display="flex" flexDirection="column">
      <Box mb="32px">
        <Header title={"NOTES"} subheading={"Browse all your notes"} />
        <form>
          <Box display="flex" alignItems="center" gap="24px" padding="0 81px">
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Search"
              name="search"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                },
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
              >
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="favouites">Favourites</MenuItem>
                <MenuItem value="longest">Longest</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="button"
              color="secondary"
              fullWidth
              variant="contained"
              size="large"
              sx={{ width: "10%" }}
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
          {notesData.map((item) => (
            <NoteItem
              name={"Guest"}
              title={item.title}
              category={item.category}
              description={item.description}
              btn1={"DETAILS"}
              btn2={"DELETE"}
            />
          ))}{" "}
        </Box>
      </Box>
      <Pagination siblingCount={0} count={4} sx={{ alignSelf: "center" }} />
    </Box>
  );
}

export default Notes;
