import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const Customtheme = createTheme({
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
        },
      },
    },
  },
});

export default Customtheme;
