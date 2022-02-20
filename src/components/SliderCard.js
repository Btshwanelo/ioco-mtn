import React from "react";

import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../assets/theme/theme";
import placeholder from "../assets/images/placeholder.svg";

const SliderCard = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          minWidth: 250,
          minHeight: 280,
          display: {
            xs: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          border: "2px solid #e8e8e8",
          cursor: "pointer",
          borderRadius: "8px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <CardMedia
          component="img"
          height="20"
          image={placeholder}
          alt="green iguana"
          sx={{ width: 70, height: 70, mb: 3, mt: 4 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              wordWrap: "break-word",
              width: 120,
              textAlign: "center",
              color: theme.palette.common.black,
            }}
            component="div"
          >
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default SliderCard;

SliderCard.propTypes = {
  title: PropTypes.string.isRequired,
};
