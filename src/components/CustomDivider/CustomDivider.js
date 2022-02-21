import React from "react";
import Grid from "@mui/material/Grid";
import style from "./CustomDivider.style";

export default ({ height }) => {
  return (
    <Grid container sx={{ height }}>
      <Grid item xs={1} sx={style.colOne} />
      <Grid item xs={11} sx={style.colTwo} />
    </Grid>
  );
};
