import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import image from "../../../../assets/img/1.jpg";
import Input from "../../../Input/Input";
import { data } from "./data";
import axios from "axios";

const styles = (theme) => ({
  paper: {
    paddingTop: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "16px",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  avatarText: {
    fontSize: "12px",
    padding: " 0 40px",
    fontWeight: "600",
  },
  form: {
    "& > label": {
      flexDirection: "row-reverse",
    },
  },
  activeForm: {
    "& > label": {
      flexDirection: "row-reverse",
    },
    "& > label > span:first-child > span:nth-child(2)": {
      backgroundColor: "#00AB55!important",
    },
  },

  activeInput: {
    "& > span": {
      color: "#00AB55!important",
    },
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

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      selectedFile: null,
    };
  }

  // const [checked, setChecked] = React.useState(false);

  toggleChecked = () => {
    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  fileUploadHandler = (event) => {
    event.preventDefault();

    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post("http://localhost/portall-test-users-table/imageUpload.php", fd, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "upload progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Paper className={this.props.classes.paper} elevation={3}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item>
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  className={this.props.classes.large}
                />
              </Grid>
              {/* <Grid item>
                <form onSubmit={this.fileUploadHandler}>
                  <input type="file" onChange={this.fileSelectedHandler} />
                  <button type="submit" name="submit">
                    ატვირთვა
                  </button>
                </form>
              </Grid> */}
              <Grid item>
                <Typography
                  variant="body2"
                  className={this.props.classes.avatarText}
                >
                  დაშვებული ფორმატები: *.jpeg, *.jpg, *.png, *.gif მაქსიმუმ 3.1
                  MB
                </Typography>
              </Grid>
              <Grid item>
                <FormGroup
                  className={
                    this.state.check
                      ? this.props.classes.activeForm
                      : this.props.classes.form
                  }
                >
                  <FormControlLabel
                    label="საჯარო პროფილი"
                    control={
                      <Switch
                        checked={this.state.check}
                        onChange={this.toggleChecked}
                        className={
                          this.state.check
                            ? this.props.classes.activeInput
                            : this.props.classes.input
                        }
                      />
                    }
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={this.props.classes.paper} elevation={3}>
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
                ინფორმაციის განახლება
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(General);
