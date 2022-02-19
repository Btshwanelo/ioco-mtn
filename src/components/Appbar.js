import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../assets/theme/theme";
import logo from "../assets/images/mtn_logo.svg";
import Divider from "@mui/material/Divider";

const pages = ["Store", "Product & Services", "Help & Support"];

const Appbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ mb: 10, backgroundColor: theme.palette.common.white }}
      >
        <Grid container sx={{ height: 4 }}>
          <Grid
            item
            xs={1}
            sx={{ backgroundColor: theme.palette.secondary.main }}
          />
          <Grid
            item
            xs={11}
            sx={{ backgroundColor: theme.palette.common.black }}
          />
        </Grid>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              paddingRight: { xs: 3, sm: 6, md: 14 },
              paddingLeft: { xs: 3, sm: 6, md: 14 },
            }}
          >
            <IconButton
              sx={{
                mr: 2,
                display: { xs: "flex", justifyContent: "start" },
                flexGrow: { xs: 1, md: 0 },
                borderRadius: 0,
              }}
              disableRipple="true"
            >
              <Avatar
                alt="logo"
                src={logo}
                sx={{
                  borderRadius: 0,
                  marginBottom: -4,
                  width: 80,
                  height: 80,
                }}
              />
            </IconButton>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={handleDrawerClose}>
                <Divider />
                <ListItem button sx={{ width: 250 }}>
                  <ListItemText>Personal</ListItemText>
                </ListItem>
                {pages.map((page) => (
                  <>
                    <ListItem
                      button
                      key={page}
                      sx={{ width: 250, color: theme.palette.common.black }}
                    >
                      <ListItemText sx={{ color: theme.palette.common.black }}>
                        {page}
                      </ListItemText>
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </Drawer>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    color: theme.palette.common.black
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Stack direction="row" alignItems={"center"}>
                <Box
                  component="span"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="h2"
                  sx={{ p: 0, fontWeight: 500, fontSize: 12, }}
                >
                  PERSONAL
                </Typography>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Appbar;
