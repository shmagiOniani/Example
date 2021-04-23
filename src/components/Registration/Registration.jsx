import React from "react";
import axios from "axios";
import Input from "../Input/Input";
import { data } from "./data";
// Material-Ui core components
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authErrors: [],
      formValues: {
        firstname: "",
        lastname: "",
        gender: "",
        birthDay: "",
        personalId: "",
        mobile: "",
        phone: "",
        email: "",
        password: "",
        cPassword: "",
        department: "",
        position: "",
        startWorking: "",
        status: "",
      },
      formErrors: {
        firstname: "",
        lastname: "",
        gender: "",
        birthDay: "",
        personalId: "",
        mobile: "",
        phone: "",
        email: "",
        password: "",
        cPassword: "",
        department: "",
        position: "",
        startWorking: "",
        status: "",
      },
      formValidity: {
        firstname: false,
        lastname: false,
        gender: false,
        birthDay: false,
        personalId: false,
        mobile: false,
        phone: false,
        email: false,
        password: false,
        cPassword: false,
        department: false,
        position: false,
        startWorking: false,
        status: false,
      },
      isSubmitting: false,
    };
  }

  handleValidation = (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;

    switch (name) {
      case "email":
        validity[name] = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`;
        break;
      case "firstname":
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid name`;
        break;
      case "password":
        validity[name] = value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/);
        validity[name] = value.length >= 9;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 9 characters minimum`;
        break;
      case "cPassword":
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} is required and cannot be empty`;

        validity[name] = this.confirmPassword(target);
        // console.log(validity[name]);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : ` password does not match`;
        break;
      case "phone":
      case "mobile":
        validity[name] = value.length >= 9;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} must be more than 9 digits`;
        break;
      default:
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} is required and can not be empty`;
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      axios
        .post(
          "http://localhost/PHP-React/registration.php",
          this.state.formValues
        )
        .then((response) => {
          console.log(response.data);
          if (response.data === "success") {
            console.log("success");
          } else {
            this.setState({
              authErrors: response.data,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ isSubmitting: false });
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key],
        };
        this.handleValidation(target);
      }
      this.setState({ isSubmitting: false });
    }
  };

  confirmPassword = ({ value }) => {
    const password = this.state.formValues["password"];
    return value === password;
  };

  popUp = (errorArr, key) => {
    if (errorArr[key]) {
      return <span className="db-error">{errorArr[key]}</span>;
    }
  };

  redirect = (formValidity, authErrors, submitable) => {
    if (formValidity && authErrors === "register") {
      return this.props.history.push("/Login");
    } else {
      return (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={this.props.classes.submit}
          disabled={submitable}
        >
          Submit
        </Button>
      );
    }
  };

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    target.type === "checkbox"
      ? (formValues[target.name] = target.checked)
      : (formValues[target.name] = target.value);
    this.setState({ formValues });
    this.handleValidation(target);
  };

  render() {
    const { formValues, formErrors, isSubmitting } = this.state;
    return (
      <Container component="main">
        <CssBaseline />
        <main className={this.props.classes.root}>
          <Paper className={this.props.classes.paper}>
            <form
              noValidate
              onSubmit={this.handleSubmit}
              className={this.props.classes.form}
            >
              <Grid container spacing={3}>
                {data.map((inner) => (
                  <Grid item xs={inner.xs} sm={inner.sm} key={inner.userId}>
                    <Input
                      key={inner.userId}
                      inputType={inner.inputType}
                      userId={inner.userId}
                      userName={inner.userName}
                      userLabel={inner.userLabel}
                      handleChange={this.handleChange}
                      inputValue={formValues[inner.userName]}
                      error={formErrors[inner.userName]}
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
                    <FormHelperText id="my-helper-text">
                      {this.popUp(this.state.authErrors, inner.error)}
                    </FormHelperText>
                  </Grid>
                ))}

                {this.redirect(
                  Object.values(this.state.formValidity).every(Boolean),
                  this.state.authErrors,
                  isSubmitting
                )}
              </Grid>
            </form>
          </Paper>
        </main>
      </Container>
    );
  }
}
export default withStyles(styles)(Registration);
