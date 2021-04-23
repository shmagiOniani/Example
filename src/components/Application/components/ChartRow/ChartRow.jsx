import React, { Component } from "react";
import CircleChart from "../../../charts/CircleChart";
import LinedChart from "../../../charts/LinedChart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { styles } from "./styles";
// import classes from "*.module.css";

class ChartRow extends Component {
  state = {};
  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid item xs={12} md={4}>
          <Paper className={classes.chartpaper} elevation={4}>
            <Typography variant="h6">Current Download</Typography>
            <CircleChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.chartpaper} elevation={4}>
            <Typography variant="h6">Area Installed</Typography>
            <Typography variant="overline" display="block" gutterBottom>
              (+43%) than last year
            </Typography>
            <LinedChart />
          </Paper>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(ChartRow);
