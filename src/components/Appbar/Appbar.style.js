const appbarStyle = {
  app: {
    mb: 10,
    backgroundColor: "common.white",
  },
  app_toolbar: {
    paddingRight: { xs: 3, sm: 6, md: 14 },
    paddingLeft: { xs: 3, sm: 6, md: 14 },
  },
  app_iconButton: {
    mr: 2,
    display: { xs: "flex", justifyContent: "start" },
    flexGrow: { xs: 1, md: 0 },
    borderRadius: 0,
  },
  app_avatar: {
    borderRadius: 0,
    marginBottom: -4,
    width: 80,
    height: 80,
  },
  app_boxOne: {
    flexGrow: 0,
    display: { xs: "flex", md: "none" },
  },
  app_listItem: {
    width: 250,
    color: "common.black",
  },
  app_listItemText: {
    color: "common.black",
  },
  app_boxTwo: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
  },
  app_button: {
    my: 2,
    display: "block",
    textTransform: "capitalize",
    color: "common.black",
  },
  app_boxThree: {
    flexGrow: 0,
    display: { xs: "none", md: "flex" },
  },
  app_boxFour: {
    bgcolor: "secondary.main",
    width: 10,
    height: 10,
    borderRadius: "50%",
    mr: 1,
  },
  app_typography: {
    p: 0,
    fontWeight: 500,
    fontSize: 12,
    cursor: "pointer",
  },
};
export default appbarStyle;
