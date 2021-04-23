export const styles = (theme) => ({
  paper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px",
    borderRadius: "20px",
  },
  info: {
    textAlign: "left",
    "& > *": {
      margin: "15% 0",
    },
    "& > h2": {
      margin: "0px",
      fontFamily: "'Be Vietnam', sans-serif",
      fontWeight: "600",
      fontSize: "0.875rem",
      lineHeight: "1.57143",
    },
    "& > h3": {
      margin: "0px",
      fontFamily: "'Be Vietnam', sans-serif",
      fontWeight: "600",
      lineHeight: "1.5",
      fontSize: "1.625rem",
    },
  },
  profit: {
    display: "flex",
    marginTop: "12px",
    alignItems: "center",
    marginBottom: "4px",
    "& > span": {
      margin: "0px",
      fontFamily: "'Be Vietnam', sans-serif",
      fontWeight: "600",
      fontSize: "0.875rem",
      lineHeight: "1.57143",
      color: "rgb(0, 171, 85)",
    },
    "& > svg": {
      color: "#00AB55",
      width: "24px",
      height: "24px",
      display: "flex",
      alignItems: "center",
      marginRight: "8px",
      borderRadius: "50%",
      justifyContent: "center",
      backgroundColor: "rgba(0, 171, 85, 0.16)",
    },
  },
  loose: {
    "& > span": {
      color: "#FF4842",
    },
    "& > svg": {
      color: "#FF4842",
      backgroundColor: "rgba(255, 72, 66, 0.16)",
    },
  },
  statistic: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80px",
    width: "80px",
  },
});
