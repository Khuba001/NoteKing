import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./global/Navbar";
// import AddNotes from "./scenes/AddNotes/AddNotes";
// import Notes from "./scenes/Notes/Notes";
// import Trash from "./scenes/Trash/Trash";
// import Favourite from "./scenes/Favourite/Favourite";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Navbar />
            <Routes>
              {/* <Route path="/add" element={<AddNotes />} />
              <Route path="/notes" ement={<Notes />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/favourite" element={<Favourite />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
