import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Circle } from "rc-progress";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import { styles } from "./styles";

class Conversions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper
                className={`${classes.paper} ${classes.userPaper}`}
                elevation={4}
              >
                <div className={classes.conversio}>
                  <div>
                    <div className={classes.progressBar}>
                      <Circle
                        percent="44"
                        strokeWidth="6"
                        strokeColor="rgb(0, 171, 85)"
                        trailWidth="6"
                        trailColor="rgba(145, 158, 171, 0.16)"
                        className="diagramm"
                      />
                      <div className="info">
                        <div className="cost">%44</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.total}>
                    <Typography variant="h6" gutterBottom>
                      38,566
                    </Typography>
                    <Typography variant="body2">Conversion</Typography>
                  </div>
                  <div className={classes.icon}>
                    <PersonIcon />
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                className={`${classes.paper} ${classes.mailPaper}`}
                elevation={4}
              >
                <div className={classes.conversio}>
                  <div>
                    <div className={classes.progressBar}>
                      <Circle
                        percent="75"
                        strokeWidth="6"
                        strokeColor="rgb(255, 193, 7)"
                        trailWidth="6"
                        trailColor="rgba(145, 158, 171, 0.16)"
                        className="diagramm"
                      />
                      <div className="info">
                        <div className="cost">%75</div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.total}>
                    <Typography variant="h6" gutterBottom>
                      38,566
                    </Typography>
                    <Typography variant="body2">Conversion</Typography>
                  </div>
                  <div className={classes.icon}>
                    <EmailIcon />
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Conversions);
