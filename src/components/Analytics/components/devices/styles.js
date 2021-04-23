export const styles = (theme) => ({
  deviceHeader: {
    "& > h2": {
      textAlign: "left",
      fontSize: "1.5rem",
      fontWeight: "600",
      fontFamily: "'Be Vietnam', sans-serif",
      color: "#4e4e4ed4",
    },
  },
  paper: {
    padding: "40px 0",
    borderRadius: "20px",
    "& > h3": {
      fontSize: "1.85rem",
      fontWeight: "600",
    },
    "& > h6": {
      margin: "0px",
      fontFamily: "'Be Vietnam', sans-serif",
      fontWeight: "500",
      fontSize: "0.875rem",
      lineHeight: "1.57143",
      opacity: "0.72",
    },
  },
  icon: {
    width: "64px",
    height: "64px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    marginBottom: "24px",
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(179deg, rgb(190 141 147 / 0%) 0%, rgb(114 112 113 / 24%) 100%)",
  },
});
