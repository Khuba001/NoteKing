import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d3d3d4",
          200: "#a6a8a9",
          300: "#7a7c7f",
          400: "#4d5154",
          500: "#212529",
          600: "#1a1e21",
          700: "#141619",
          800: "#0d0f10",
          900: "#070708",
        },

        blueAccent: {
          100: "#fef3d1",
          200: "#fee7a3",
          300: "#fddc75",
          400: "#fdd047",
          500: "#fcc419",
          600: "#ca9d14",
          700: "#97760f",
          800: "#654e0a",
          900: "#322705",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          900: "#070708",
          800: "#0d0f10",
          700: "#141619",
          600: "#1a1e21",
          500: "#212529",
          400: "#4d5154",
          300: "#7a7c7f",
          200: "#a6a8a9",
          100: "#d3d3d4",
        },

        blueAccent: {
          900: "#322705",
          800: "#654e0a",
          700: "#97760f",
          600: "#ca9d14",
          500: "#fcc419",
          400: "#fdd047",
          300: "#fddc75",
          200: "#fee7a3",
          100: "#fef3d1",
        },
      }),
});

// mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: { main: colors.blueAccent[600] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: { default: colors.primary[700] },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: { main: colors.blueAccent[600] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: { default: "#fcfcfc" },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
