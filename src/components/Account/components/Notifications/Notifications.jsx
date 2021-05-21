import React, { Component } from "react";
import clsx from "clsx";
import { Typography, withStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Switch } from "@material-ui/core";

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(3, 5),
    textAlign: "left",
    color: theme.palette.text.secondary,
    borderRadius: "16px",
  },
  form: {
    paddingBottom: "50px",
    position: "relative",
  },
  label: {
    maxWidth: "fit-content",

    "& > span:nth-child(2)": {
      fontSize: "0.875rem",
      lineHeight: "1.57143",
      // display: "none",
    },
  },
  activeLabel: {
    maxWidth: "fit-content",
    "& > span:nth-child(2)": {
      fontSize: "0.875rem",
      lineHeight: "1.57143",
      // display: "none",
    },
    "& > span:first-child > span:nth-child(2)": {
      backgroundColor: "#00AB55!important",
    },
  },
  activeInput: {
    "& > span": {
      color: "#00AB55!important",
    },
  },
  updateButton: {
    position: "absolute",
    bottom: "0",
    right: "0",
    maxWidth: "170px",
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: false,
      answers: false,
      follows: true,
      news: false,
      updates: true,
      blogs: false,
    };
  }

  handleCheckboxInput = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };
  render() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper className={this.props.classes.paper} elevation={3}>
            <FormGroup className={this.props.classes.form}>
              <Typography variant="h6">სხვა აქტივობები</Typography>
              <FormControlLabel
                label="
                ნებართვა შეტყობინებაზე 1"
                className={clsx(this.props.classes.label, {
                  [this.props.classes.activeLabel]: this.state.comments,
                })}
                control={
                  <Switch
                    checked={this.state.comments}
                    onChange={this.handleCheckboxInput}
                    name="comments"
                    className={
                      this.state.comments
                        ? this.props.classes.activeInput
                        : this.props.classes.input
                    }
                  />
                }
              />
              <FormControlLabel
                label="ნებართვა შეტყობინებაზე 2"
                className={clsx(this.props.classes.label, {
                  [this.props.classes.activeLabel]: this.state.answers,
                })}
                control={
                  <Switch
                    checked={this.state.answers}
                    onChange={this.handleCheckboxInput}
                    name="answers"
                    className={
                      this.state.answers
                        ? this.props.classes.activeInput
                        : this.props.classes.input
                    }
                  />
                }
              />
              <FormControlLabel
                label="
                ნებართვა შეტყობინებაზე 3"
                className={clsx(this.props.classes.label, {
                  [this.props.classes.activeLabel]: this.state.follows,
                })}
                control={
                  <Switch
                    checked={this.state.follows}
                    onChange={this.handleCheckboxInput}
                    name="follows"
                    className={
                      this.state.follows
                        ? this.props.classes.activeInput
                        : this.props.classes.input
                    }
                  />
                }
              />
              <Typography variant="h6">აპლიკაცია</Typography>
              <FormControlLabel
                label=" ნებართვა შეტყობინებაზე 4"
                className={clsx(this.props.classes.label, {
                  [this.props.classes.activeLabel]: this.state.news,
                })}
                control={
                  <Switch
                    checked={this.state.news}
                    onChange={this.handleCheckboxInput}
                    name="news"
                    className={
                      this.state.news
                        ? this.props.classes.activeInput
                        : this.props.classes.input
                    }
                  />
                }
              />
              <FormControlLabel
                label="ნებართვა შეტყობინებაზე 5"
                className={clsx(this.props.classes.label, {
                  [this.props.classes.activeLabel]: this.state.updates,
                })}
                control={
                  <Switch
                    checked={this.state.updates}
                    onChange={this.handleCheckboxInput}
                    name="updates"
                    className={
                      this.state.updates
                        ? this.props.classes.activeInput
                        : this.props.classes.input
                    }
                  />
                }
              />
              <FormControlLabel
                label="ნებართვა შეტყობინებაზე 6"
                className={clsx(this.props.classes.label, {
                  [this.props.classes.activeLabel]: this.state.blogs,
                })}
                control={
                  <Switch
                    checked={this.state.blogs}
                    onChange={this.handleCheckboxInput}
                    name="blogs"
                    className={
                      this.state.blogs
                        ? this.props.classes.activeInput
                        : this.props.classes.input
                    }
                  />
                }
              />
              <Button className={this.props.classes.updateButton}>
                ცვლილების შენახვა
              </Button>
            </FormGroup>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Notifications);
