import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import placeholder from "../assets/images/placeholder.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../assets/theme/theme";

const SliderCard = ({ title }) => {
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
            sx={{ wordWrap: "break-word", width: 120, textAlign: "center",color: theme.palette.common.black }}
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default SliderCard;
