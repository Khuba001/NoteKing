import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import { SearchOutlined } from "@mui/icons-material";

function NoteItem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="80%"
      border="1px solid #7777"
      borderRadius="9px"
      padding="20px 16px"
      gap="24px"
      mt="56px"
    >
      <Box display="flex" gap="9px" alignItems="center">
        <Typography variant="h4">Guest</Typography>

        <Typography
          variant="h5"
          borderLeft="1px solid #7777 "
          paddingLeft="10px"
        >
          Note1
        </Typography>
      </Box>
      <Box
        border="1px solid #7777"
        borderRadius="9px"
        display="flex"
        flexDirection="column"
        padding="14px"
        gap="4px"
      >
        <Typography variant="h5" color={colors.grey[300]}>
          Shopping
        </Typography>
        <Typography>dsadakdsadkokd</Typography>
      </Box>
      <Box display="flex" gap="14px">
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          type="button"
        >
          Details
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          size="medium"
          type="button"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

function Notes() {
  return (
    <Box>
      <Box>
        <Header title={"NOTES"} subheading={"Browse all your notes"} />
        <form>
          <Box display="flex" alignItems="center" gap="14px" padding="0 81px">
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
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
        </Box>
      </Box>
    </Box>
  );
}

export default Notes;
