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
      main: "#ffffff",
      secondary: "#E6E6E6",
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
