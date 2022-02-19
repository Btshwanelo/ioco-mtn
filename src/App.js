import * as React from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "./components/Appbar";
import "./assets/theme/SlickTheme.css";
import Carousel from "./components/Carousel";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme/theme";

import { IMAGES } from "./assets/data/data";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Grid
          container
          spacing={2}
          sx={{
            display: {
              xs: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            bgcolor: theme.palette.primary.secondary,
          }}
        >
          <Grid item xs={12}>
            <Appbar />
          </Grid>
          <Grid item xs={12} sx={{ minHeight: "90vh" }}>
            <div className="slidr">
              <div className="slidr_heading">
                <p>What are you</p>
                <h2>here to do?</h2>
              </div>
              <Carousel images={IMAGES} />
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
