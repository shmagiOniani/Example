import React, { Component } from "react";
import SimpleChart from "../../../charts/SimpleChart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";

class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}>
            <div className={classes.info}>
              <h2> მოწყობილობები</h2>
              <div className={classes.profit}>
                <TrendingUpIcon />
                <span>+2.6%</span>
              </div>
              <h3>18,765</h3>
            </div>
            <div className={classes.statistic}>
              <SimpleChart color="#71de98" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}>
            <div className={classes.info}>
              <h2>სულ მომხმარებლები</h2>
              <div className={classes.profit}>
                <TrendingUpIcon />
                <span>+0.2%</span>
              </div>
              <h3>4,876</h3>
            </div>
            <div className={classes.statistic}>
              <SimpleChart color="#f88e8b" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}>
            <div className={classes.info}>
              <h2>სულ კომპანია</h2>
              <div className={`${classes.profit} ${classes.loose}`}>
                <TrendingDownIcon />
                <span>-0.1%</span>
              </div>
              <h3>678</h3>
            </div>
            <div className={classes.statistic}>
              <SimpleChart color="#76c6fa" />
            </div>
          </Paper>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Totals);
