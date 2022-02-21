import React from "react";

import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import style from "./ActiveCard.style";
import placeholder from "../../assets/images/placeholder.svg";

const SliderMainCard = (props) => {
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
        <CardActions>
          <Button
            size="small"
            sx={style.card_actions}
            endIcon={<ArrowForwardIosIcon sx={{ height: 13 }} />}
          >
            START HERE
          </Button>
        </CardActions>
      </Card>
  );
};

export default SliderMainCard;

SliderMainCard.propTypes = {
  title: PropTypes.string.isRequired,
};
