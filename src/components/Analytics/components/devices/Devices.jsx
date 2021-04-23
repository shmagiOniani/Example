import { Component } from "react";
import { styles } from "./styles";
// Material-UI Core components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// Material-UI icons
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import LaptopWindowsIcon from "@material-ui/icons/LaptopWindows";
import BugReportIcon from "@material-ui/icons/BugReport";

const data = [
  {
    name: "android",
    amount: "714k",
    header: "Weekly Sales",
    color: "#005249",
    bgColor: "#C8FACD",
  },
  {
    name: "apple",
    amount: "1.35m",
    header: "New Users",
    color: "#04297A",
    bgColor: "#D0F2FF",
  },
  {
    name: "windows",
    amount: "1.72m",
    header: "Item Orders",
    color: "#7A4F01",
    bgColor: "#FFF7CD",
  },
  {
    name: "bug",
    amount: "234",
    header: "Bug Reports",
    color: "#7A0C2E",
    bgColor: "#FFE7D9",
  },
];

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid item xs={12} className={classes.deviceHeader}>
          <Typography variant="h2"> Hi, Welcome back</Typography>
        </Grid>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.header}>
            <Paper
              className={classes.paper}
              elevation={4}
              style={{
                color: `${item.color}`,
                backgroundColor: `${item.bgColor}`,
              }}
            >
              <div className={classes.icon}>
                {item.name === "android" ? (
                  <AndroidIcon />
                ) : item.name === "apple" ? (
                  <AppleIcon />
                ) : item.name === "windows" ? (
                  <LaptopWindowsIcon />
                ) : item.name === "bug" ? (
                  <BugReportIcon />
                ) : (
                  console.log("not found")
                )}
              </div>
              <Typography variant="h3">{item.amount}</Typography>
              <Typography variant="h6">{item.header}</Typography>
            </Paper>
          </Grid>
        ))}
      </>
    );
  }
}

export default withStyles(styles)(Devices);
