import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  Paper,
  IconButton,
} from "@material-ui/core";
// Matrial icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import LogicCondition from "./LogicCondition";

const styles = makeStyles((theme) => ({
  root: {
    boxShadow:
      "0px 2px 4px -1px #f6a821, 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    padding: "40px 10px",
    "& > *": {
      position: "relative",
    },
  },
  buttonOne: {
    backgroundColor: "#f6a821",
    color: "white",
    "&:hover": {
      backgroundColor: "#f9b746",
    },
  },
  buttonTwo: {
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
    },
  },
  close: {
    position: "absolute",
    top: "-20px",
    right: "10px",
  },
  closeButton: {
    color: "#f6a821",
  },
  logicCondition: {
    margin: "20px",
  },
}));

function LogicGroup(props) {
  const classes = styles();

  const [child, setChild] = useState("");
  const [condition, setCondition] = useState("");

  const [conditionArr, setConditionArr] = useState([]);
  const [conditionId, setConditionId] = useState("");

  const handleCreateCondition = () => {
    setConditionArr([
      ...conditionArr,
      {
        id: conditionArr.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  useEffect(() => {
    setConditionArr((conditionArr) =>
      conditionArr.filter((x) => x.id !== conditionId)
    );
  }, [conditionId]);

  return (
    <Paper className={classes.root} elevation={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>ჯგუფი</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            className={classes.buttonOne}
            onClick={() => setChild(props.createChild)}
          >
            ჯგუფის შექმნა
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            className={classes.buttonTwo}
            onClick={() => {
              setCondition(props.createCondition);
              handleCreateCondition();
            }}
          >
            მდგომარეობის შექმნა
          </Button>
        </Grid>
        {conditionArr.map((value) => {
          return (
            <Grid
              item
              xs={12}
              key={value.id}
              className={classes.logicCondition}
            >
              <LogicCondition
                id={value.id}
                handleCloseCondition={(conditionId) =>
                  setConditionId(conditionId)
                }
              />
            </Grid>
          );
        })}
        {/* close button */}
        <Box className={classes.close}>
          <IconButton
            component="span"
            onClick={() => props.handleCloseGroup(props.id)}
            className={classes.closeButton}
          >
            <HighlightOffIcon />
          </IconButton>
        </Box>
        {/* <Grid item xs={12}>
          {condition}
        </Grid> */}
        <Grid item xs={12}>
          {child}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LogicGroup;
