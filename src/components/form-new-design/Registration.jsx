import React from "react";
import { data } from "./Data";
import {
  Link,
  Container,
  Avatar,
  Grid,
  Button,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import TelegramIcon from "@material-ui/icons/Telegram";

const useStyles = makeStyles((theme) => ({
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
  grid: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1, "auto"),
    backgroundColor: theme.palette.primary.main,
  },
  header: {
    marginBottom: theme.spacing(5),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(2),
    "& a:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Registration() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            {data.map((inner) => (
              <Grid item xs={inner.xs} sm={inner.sm} key={inner.userId}>
                <TextField
                  variant={inner.variant}
                  required
                  fullWidth
                  id={inner.userId}
                  label={inner.userLabel}
                  name={inner.userName}
                  autoComplete={inner.userName}
                />
              </Grid>
            ))}
            <Grid container className={classes.grid}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                startIcon={<TelegramIcon />}
              >
                <Link href="/Login" variant="body2" color="inherit">
                  Submit
                </Link>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
