import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import style from "./Appbar.style";
import logo from "../../assets/images/mtn_logo.svg";
import CustomDivider from "../CustomDivider";

const pages = ["Store", "Product & Services", "Help & Support"];

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" sx={style.app}>
      <CustomDivider height={4} />
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={style.app_toolbar}>
          <IconButton sx={style.app_iconButton} disableRipple="true">
            <Avatar alt="logo" src={logo} sx={style.app_avatar} />
          </IconButton>

          <Box sx={style.app_boxOne}>
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
              <ListItem button sx={style.app_listItem}>
                <ListItemText>Personal</ListItemText>
              </ListItem>
              <Divider />
              {pages.map((page) => (
                <>
                  <ListItem button key={page} sx={style.app_listItem}>
                    <ListItemText sx={style.app_listItemText}>
                      {page}
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </Drawer>
          </Box>

          <Box sx={style.app_boxTwo}>
            {pages.map((page) => (
              <Button key={page} sx={style.app_button}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={style.app_boxThree}>
            <Stack direction="row" alignItems={"center"}>
              <Box component="span" sx={style.app_boxFour} />
              <Typography
                variant="h6"
                noWrap
                component="h2"
                sx={style.app_typography}
              >
                PERSONAL
              </Typography>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
