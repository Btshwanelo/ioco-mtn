import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "./components/Appbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Appbar />
        </Grid>
        <Grid item xs={12}>
          <Item sx={{justifyContent: "center"}}>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
