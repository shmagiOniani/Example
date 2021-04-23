import React from "react";
import axios from "axios";
// Material-UI core view
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, withStyles } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
// Component's inner material
import { inputArr } from "./inputArr";
// App components
import Input from "../../../Input/Input";

const styles = () => ({
  container: {
    margin: "0",
    justifyContent: "flex-end",
  },
  buttons: {
    margin: "20px",
  },
  submit: {
    marginLeft: "16px!important",
  },
  success: {
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
});

export class AddForm extends React.Component {
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
      additable: false,
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
          "http://localhost/portall-test-users-table/registration.php",
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

  handleSubmite = (e, formValidity, authErrors, submitable) => {
    if (formValidity && authErrors === "register") {
      return (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={this.props.classes.success}
          disabled={submitable}
          onClick={this.props.close}
        >
          Successfully Registered
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
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
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
          maxWidth={"md"}
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <form
              noValidate
              onSubmit={this.handleSubmit}
              className={this.props.classes.form}
            >
              <Grid
                container
                spacing={2}
                className={this.props.classes.container}
              >
                {inputArr.map((inner) => (
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
                      additable={this.state.additable}
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
                <DialogActions className={this.props.classes.buttons}>
                  <Button
                    onClick={this.props.close}
                    color="secondary"
                    variant="contained"
                  >
                    Cancel
                  </Button>

                  {this.handleSubmite(
                    Object.values(this.state.formValidity).every(Boolean),
                    this.state.authErrors,
                    isSubmitting
                  )}
                </DialogActions>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(AddForm);
