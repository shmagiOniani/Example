import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Devices from "./components/devices/Devices";
import Visits from "./components/visits/Visits";

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={4}>
        <Devices />
        <Visits />
      </Grid>
    );
  }
}

export default Analytics;
