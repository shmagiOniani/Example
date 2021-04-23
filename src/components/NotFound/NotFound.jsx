import React, { Component } from "react";
import { Link } from "react-router-dom";
// image for 404 page
import illustration from "../../assets/img/illustration_404.svg";
// Material-UI core Components
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  content: {
    maxWidth: "480px",
    margin: "auto",
    textAlign: "center",
    "& > a": {
      textDecoration: "none",
    },
  },
  header: {
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.625rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.875rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  illustration: {
    marginTop: theme.spacing(3) * 3,
    marginBottom: theme.spacing(3) * 3,
    width: "100%",
    maxHeight: "240px",
  },
  button: {
    padding: "8px 24px",
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

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box pt={3} className={this.props.classes.content}>
            <Typography
              paragraph
              variant="h3"
              className={this.props.classes.header}
            >
              Sorry, page not found!
            </Typography>
            <Typography variant="body1">
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>
            <img
              src={illustration}
              alt="404 illustration"
              className={this.props.classes.illustration}
            />
            <Link to="/">
              <Button variant="contained" className={this.props.classes.button}>
                Go To Home
              </Button>
            </Link>
          </Box>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(NotFound);
