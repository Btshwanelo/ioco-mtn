import { createTheme } from "@mui/material/styles";
import { palette } from "@mui/system";

// Create a theme instance.
const Dtheme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#fafafa",
      secondary: "#f0f0f0",
    },
    secondary: {
      main: "#ffc000",
    },
  },
  shape: {
    borderRadius: 40,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: palette.secondary,
        },
        MuiButtonText: palette.secondary,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "yellow",
          backgroundColor: "green",
        },
      },
    },
  },
});

export default Dtheme;
