import React, { Component } from "react";
import { Container, withStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { data } from "./data";
import Input from "../../../Input/Input";

const styles = (theme) => ({
  paper: {
    paddingTop: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "16px",
  },

  formGrid: {
    padding: theme.spacing(5),
    justifyContent: "flex-end",
  },
  updateButton: {
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

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Paper elevation={3} className={this.props.classes.paper}>
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={5}
            className={this.props.classes.formGrid}
          >
            {data.map((inner) => (
              <Grid item xs={inner.xs} sm={inner.sm} key={inner.userId}>
                <Input
                  key={inner.userId}
                  inputType={inner.inputType}
                  userId={inner.userId}
                  userName={inner.userName}
                  userLabel={inner.userLabel}
                  // handleChange={this.handleChange}
                  // inputValue={formValues[inner.userName]}
                  // error={formErrors[inner.userName]}
                  autoComplete={inner.userName}
                >
                  {inner.option
                    ? inner.option.map((option) => (
                        <MenuItem key={option.key} value={option.key}>
                          {option.name}
                        </MenuItem>
                      ))
                    : ""}
                </Input>
              </Grid>
            ))}
            <Button
              variant="contained"
              className={this.props.classes.updateButton}
            >
              Save Changes
            </Button>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(ChangePassword);
