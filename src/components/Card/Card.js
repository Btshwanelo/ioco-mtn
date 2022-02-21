import React from "react";

import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import style from "./Card.style";
import placeholder from "../../assets/images/placeholder.svg";

const SliderCard = (props) => {
  return (
      <Card sx={style.card}>
        <CardMedia
          component="img"
          height="20"
          image={placeholder}
          alt="green iguana"
          sx={style.card_media}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={style.card_content}
            component="div"
          >
            {props.title}
          </Typography>
        </CardContent>
      </Card>
  );
};

export default SliderCard;

SliderCard.propTypes = {
  title: PropTypes.string.isRequired,
};
