import React, { Component } from "react";
import Totals from "./components/Totals/Totals";
import ChartRow from "./components/ChartRow/ChartRow";
import Table from "./components/Table/Table";
import Grid from "@material-ui/core/Grid";
// import Weather from "./components/Weather/Weather";
import Conversions from "./components/Conversions/Conversions";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { classes } = this.props;
    return (
      <div className="Application">
        <Grid container spacing={4}>
          <Totals />
          <ChartRow />
          <Table />
          {/* <Weather /> */}
          <Conversions />
        </Grid>
      </div>
    );
  }
}

export default Application;
