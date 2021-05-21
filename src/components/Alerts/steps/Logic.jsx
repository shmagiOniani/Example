import React, { useEffect, useState } from "react";
// Material-ui core components
import {
  Button,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// Material-ui icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// helper component
import LogicGroup from "./LogicGroup";
import LogicCondition from "./LogicCondition";
//consumer component
import { AlertConsumer } from "../../LocalContext/AlertContext";

const styles = makeStyles((theme) => ({
  root: {
    padding: "20px 50px",
    margin: "20px 0",
  },
  logicCondition: {
    paddingBottom: "20px",
  },
  groupButton: {
    backgroundColor: "#f6a821",
    fontWeight: "600",
    color: "white",
    "&:hover": {
      backgroundColor: "#d7921c",
      boxShadow: "none",
    },
  },
  saveButton: {
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  conContainer: {
    position: "relative",
    padding: "0px",
  },
  closeButton: {
    "& > *": {
      padding: "0",
      color: "#f50057",
    },
  },
}));

export function Logic() {
  const classes = styles();

  const [logicData, setLogicData] = useState([]);
  const [groupId, setGroupId] = useState("");

  const [conditionArr, setConditionArr] = useState([]);
  const [conditionId, setConditionId] = useState("");

  const [status, setStatus] = useState("");

  const handleCreateGroup = () => {
    setLogicData([
      ...logicData,
      {
        id: logicData.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  const handleCreateCondition = () => {
    setConditionArr([
      ...conditionArr,
      {
        id: conditionArr.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setLogicData((logicData) => logicData.filter((x) => x.id !== groupId));
  }, [groupId]);

  useEffect(() => {
    setConditionArr((conditionArr) =>
      conditionArr.filter((x) => x.id !== conditionId)
    );
  }, [conditionId]);

  return (
    <AlertConsumer>
      {(props) => {
        const {
          conditionAlertOpen,
          handleConditionAlertClose,
          conditions,
          deleteCondition,
        } = props;
        return (
          <Paper elevation={2} className={classes.root}>
            <Grid container spacing={5}>
              {/*  */}
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.groupButton}
                  onClick={handleCreateGroup}
                >
                  ჯგუფის შექმნა
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  className={classes.saveButton}
                  onClick={() => handleCreateCondition()}
                >
                  მდგომარეობის შექმნა
                </Button>
              </Grid>
              {/* handle status of action */}
              {conditionArr.length >= 2 ? (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    select
                    value={status}
                    onChange={handleStatus}
                    label="შესრულების პირობა"
                  >
                    <MenuItem value={"or"}>შესრულდეს ყველა</MenuItem>
                    <MenuItem value={"&&"}>შესრულდეს რომელიმე</MenuItem>
                  </TextField>
                </Grid>
              ) : (
                ""
              )}

              {/* logic conditions place */}
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
              {logicData.map((value) => {
                return (
                  <Grid item xs={12} key={value.id}>
                    <LogicGroup
                      id={value.id}
                      handleCloseGroup={(groupId) => setGroupId(groupId)}
                      createChild={<LogicGroup />}
                      createCondition={<LogicCondition />}
                    />
                  </Grid>
                );
              })}
              {/* submited conditions */}
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  {conditions.length > 0
                    ? conditions.map((index) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={index.id}
                            style={{ paddingBottom: "30px" }}
                          >
                            <Paper elevation={3}>
                              <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={3}
                                className={classes.conContainer}
                              >
                                <Grid item xs={9}>
                                  <Typography variant="body1">
                                    {index.name}
                                  </Typography>
                                </Grid>

                                <Grid
                                  ite
                                  xs={3}
                                  className={classes.closeButton}
                                >
                                  <IconButton
                                    component="span"
                                    onClick={() => deleteCondition(index.id)}
                                  >
                                    <HighlightOffIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                        );
                      })
                    : ""}
                </Grid>
              </Grid>
              {/* conditions end */}
            </Grid>
            <Snackbar
              open={conditionAlertOpen}
              autoHideDuration={6000}
              onClose={handleConditionAlertClose}
            >
              <Alert onClose={handleConditionAlertClose} severity="success">
                მდგომარეობა წარმატებით დაემატა!
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
