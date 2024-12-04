import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./global/Navbar";
import AddNotes from "./scenes/AddNotes/AddNotes";
import Notes from "./scenes/Notes/Notes";
import Trash from "./scenes/Trash/Trash";
import Important from "./scenes/Important/Important";
import { Route, Routes } from "react-router-dom";
import Note from "./scenes/SingleNote/Note";
import useLocalStorageState from "./hooks/useLocalStorageState";

function App() {
  const [theme, colorMode] = useMode();
  const [notesData, setNotesData] = useLocalStorageState([], "notes");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <main className="content">
            <Routes>
              <Route
                path="/add"
                element={
                  <AddNotes notesData={notesData} setNotesData={setNotesData} />
                }
              />
              <Route
                path="/notes"
                element={
                  <Notes notesData={notesData} setNotesData={setNotesData} />
                }
              />
              <Route
                path="/notes/:noteId/"
                element={<Note notesData={notesData} />}
              />
              <Route path="/trash" element={<Trash />} />
              <Route
                path="/important"
                element={
                  <Important
                    notesData={notesData}
                    setNotesData={setNotesData}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
