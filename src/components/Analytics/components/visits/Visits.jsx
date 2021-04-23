import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import MixedChart from "../../../charts/MixedChart";
import { styles } from "./styles";

class Visits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper} elevation={4}>
            <MixedChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}></Paper>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Visits);
