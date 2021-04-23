import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

class Weather extends Component {
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
            weather
          </Paper>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Weather);
