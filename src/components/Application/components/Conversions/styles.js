export const styles = () => ({
  paper: {
    justifyContent: "space-between",
    borderRadius: "20px",
    height: "fitContent",
  },
  userPaper: {
    backgroundColor: "#005249",
  },
  mailPaper: {
    backgroundColor: "#7A4F01",
  },
  conversio: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "16px",
  },
  progressBar: {
    position: "relative",
    textAlign: "center",
    "& > svg": {
      height: "87px",
    },
    "& > .info": {
      position: "absolute",
      top: "36%",
      left: "30%",
      color: "white",
      fontWeight: "600",
    },
  },
  total: {
    marginLeft: "24px",
    color: "rgb(255, 255, 255)",
    fontFamily: "'Be Vietnam', sans-serif",
    "& > h6": {
      margin: "0px",
      fontSize: "1.25rem",
      fontWeight: "600",
    },
    "& > p": {
      margin: "0px",
      fontWeight: "500",
      fontSize: "0.875rem",
      lineHeight: "1.57143",
      opacity: " 0.72",
    },
  },
  icon: {
    right: "-24px",
    position: "absolute",
    "& > svg": {
      color: "#fff",
      width: "120px",
      height: "120px",
      opacity: "0.12",
    },
  },
});
