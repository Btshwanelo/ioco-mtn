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

const SliderMainCard = ({ title }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          minWidth: 250,
          minHeight: 250,
          display: {
            xs: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          backgroundColor: theme.palette.common.black,
          boxShadow: "0 4px 0 -1px #ffc000,0 2px 4px 0 rgba(0,0,0,.08)",
          borderRadius: "8px",
        }}
      >
        <CardMedia
          component="img"
          height="20"
          image={placeholder}
          alt="green iguana"
          sx={{ width: 70, height: 70, mb: 4, mt: 4 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: 600, color: theme.palette.common.white }}
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ color: theme.palette.common.white }}
            endIcon={<ArrowForwardIosIcon sx={{ height: 13 }} />}
          >
            START HERE
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default SliderMainCard;
