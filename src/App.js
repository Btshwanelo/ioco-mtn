import React from "react";

import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline/";

import Appbar from "./components/Appbar";
import style from "./App.style";
import SliderContainer from "./components/SliderContainer/";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2} sx={style.container}>
        <Grid item xs={12}>
          <Appbar />
        </Grid>
        <Grid item xs={10} sx={style.container_item}>
          <SliderContainer />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
