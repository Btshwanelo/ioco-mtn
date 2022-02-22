const CardStyle = {
  card: {
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
    backgroundColor: "primary.main",
  },

  card_media: {
    width: 70,
    height: 70,
    mb: 3,
    mt: 4,
  },

  card_content: {
    wordWrap: "break-word",
    width: 120,
    textAlign: "center",
    color: "common.black",
  },
};
export default CardStyle;
