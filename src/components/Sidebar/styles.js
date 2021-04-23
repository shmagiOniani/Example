import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 260;

export const styles = makeStyles((theme) => ({
  root: {
    paddingBottom: "50px",
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    minHeight: theme.spacing(8),
    fontSize: "xx-large",
    fontStyle: "italic",
    fontWeight: "600",
    color: "blueviolet",
  },
  logo: {
    display: "flex",
    paddingLeft: theme.spacing(2),
    "& > img": {
      width: "50px",
      height: "50px",
    },
  },
  listHeader: {
    display: "flex",
    margin: theme.spacing(2),
    padding: theme.spacing(2, 1),
    backgroundColor: "#ececec",
    borderRadius: "10px",
    "& .text": {
      paddingLeft: "10px",
      "& h6": {
        color: "black",
        fontWeight: "600",
        fontSize: " 0.875rem",
      },
    },
  },
  listSectionHeader: {
    margin: theme.spacing(3, 0, 1),
    "& > *": {
      fontWeight: "700!important",
    },
  },
  tollBarList: {
    "& a": {
      textDecoration: "none",
      color: fade(theme.palette.common.black, 0.7),
    },
  },
  listIcon: {
    display: "flex",
    justifyContent: "center",
  },
  activeListIcon: {
    display: "flex",
    justifyContent: "center",
    "& > svg": {
      fill: "#00AB55",
    },
  },
  listText: {
    "& > *": {
      fontWeight: "600",
      color: "gray",
    },
  },
  activeListText: {
    borderLeft: "",
    "& > *": {
      color: "#00AB55",
      fontWeight: "600",
    },
  },
  childList: {
    "& > *": {
      color: "#637381",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      textTransform: "capitalize",
      fontWeight: "600",
      transition: "all .3s ease-in-out",
    },
  },
  childListIcon: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      transition: "all .3s ease-in-out",
      width: "10px",
      height: "10px",
      fill: "gray",
    },
  },
  activeItem: {
    backgroundColor: "transparent!important",
  },
  activeChildListIcon: {
    "& > svg": {
      fill: "#00AB55",
      transform: "scale(1.5)",
    },
  },
  activeChildList: {
    "& > *": {
      color: "#212B36",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));
