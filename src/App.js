import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./global/Navbar";
import AddNotes from "./scenes/AddNotes/AddNotes";
// import Notes from "./scenes/Notes/Notes";
// import Trash from "./scenes/Trash/Trash";
// import Important from "./scenes/Important/Important";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/add" element={<AddNotes />} />
              {/* <Route path="/notes" element={<Notes />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/important" element={<Important />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
