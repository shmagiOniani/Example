import React from "react";
import NotificationTable from "./components/NotificationTable/NotificationTable";
import NotificationSidebar from "./components/NotificationSidebar/NotificationSidebar";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
// import { styles } from "./styles.js";

const styles = (theme) => ({
  root: {
    borderRadius: "16px",
  },
  container: {},
  navigatioin: {
    maxHeight: 525,
    borderRight: "1px solid rgba(145, 158, 171, 0.24)",
    overflow: "overlay",
  },
  composeDiv: {
    padding: "24px",
  },
  composeButton: {
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  mailGrid: {
    borderRadius: "16px",
    "& > div": {
      maxHeight: "525px",
      overflow: "overlay",
    },
  },
});

export class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  updateSelected(item) {
    this.setState({
      selected: item,
    });
  }
  // const classes = styles();
  render() {
    return (
      <Paper elevation={1} className={this.props.classes.root}>
        <Grid container className={this.props.classes.container}>
          <Grid item xs={3} className={this.props.classes.navigatioin}>
            <NotificationSidebar
              data={{
                selected: this.state.selected,
                updateSelected: this.updateSelected.bind(this),
              }}
            />
          </Grid>
          <Grid item xs={9} className={this.props.classes.mailGrid}>
            <NotificationTable selected={this.state.selected} />
            {console.log(this.state.selected)}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Notification);
