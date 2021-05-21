import React, { useState } from "react";
// Material-ui core components
import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
//consumer component
import { AlertConsumer } from "../../LocalContext/AlertContext";

const styles = makeStyles((theme) => ({
  root: {
    padding: "20px 20px",
    margin: "20px 0",
  },
}));

export function Name() {
  const classes = styles();
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setValidName(false);
  };

  return (
    <AlertConsumer>
      {(props) => {
        const { setVarName } = props;
        return (
          <Paper elevation={2} className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="სახელი"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={classes.input}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => {
                    if (name !== "") {
                      setVarName(name);
                      setName("");
                    } else {
                      setValidName(true);
                    }
                  }}
                >
                  შენახვა
                </Button>
              </Grid>
            </Grid>
            <Snackbar
              open={validName}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success">
                სახელი წარმატებით დაემატა!
              </Alert>
            </Snackbar>
          </Paper>
        );
      }}
    </AlertConsumer>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
