import React, { useState } from "react";

// Maetrial-Ui core View
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
// Material-Ui icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import QueueIcon from "@material-ui/icons/Queue";
// local components
import { gatewayData } from "../../assets/dataImitators/gatewayData";
import CollapseGroup from "./CollapseGroup";
import {
  GatewayGroupProvider,
  GatewayGroupConsumer,
} from "../LocalContext/GatewayGroupContext";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  fade: {
    // height: "10px",
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    backgroundColor: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  fadePaper: {
    display: "flex",
    padding: theme.spacing(5),
    paddingTop: theme.spacing(3),
    "& > svg": {
      cursor: "pointer",
    },
    "& > div": {
      paddingTop: "20px",
    },
  },
  checklistItem: {
    padding: "10px",
  },
  main: {
    minHeight: "73vh",
    position: "relative",
  },
  directory: {
    cursor: "pointer",
    "& > svg": {
      width: "3em",
      height: "3em",
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
  fadeGrid: {
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    top: "0",
    left: "-20px",
    paddingLeft: "6px",
    zIndex: "200",
  },
}));

export default function GatewayGroup() {
  const classes = useStyles();

  const [count, setCount] = useState(1);
  const [formOpen, setFormOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]);
  const [checkboxArr, setCheckboxArr] = useState(
    Array.from({ length: gatewayData.length }, (_, i) => false)
  );
  const [name, setName] = useState("ჯგუფი");
  const [group, setGroup] = useState([]);

  const handleAdd = (e, model, index) => {
    checkboxArr[index] = e.target.checked;
    console.log(checkboxArr);
    setCheckboxArr(checkboxArr);
    if (e.target.checked) {
      setCheckedArr([...checkedArr, model]);
      console.log("checked");
    } else if (!e.target.checked) {
      const index = checkedArr.findIndex((val) => val === model);
      checkedArr.splice(index, 1);
      setCheckedArr(checkedArr);
      console.log(" not checked");
      // e.target.checked = false;
    }
  };

  const handleFormSidebar = () => {
    setFormOpen((prev) => !prev);
  };

  const handleGroupSidebar = () => {
    setGroupOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    const newName = name === "ჯგუფი" ? name + " " + count : name;
    setGroup([
      ...group,
      {
        name: newName,
        model: checkedArr,
      },
    ]);
    setFormOpen((prev) => !prev);
    setCheckedArr([]);
    setCheckboxArr(Array.from({ length: gatewayData.length }, (_, i) => false));
    setCount(count + 1);

    console.log(checkedArr);
    console.log(group, newName);
  };

  // useEffect(() => {
  //   // setCount((count) => count + 1);
  // }, [checkboxArr]);

  return (
    <GatewayGroupProvider>
      <div>
        <CssBaseline />
        <Container>
          <Typography variant="h5" className={classes.header}>
            გეითვეის ჯგუფები
          </Typography>
          <GatewayGroupConsumer>
            {(props) => {
              const { groups, setGroups, setGroupElements, selectedGroup } =
                props;
              return (
                <Paper className={classes.main} elevation={3}>
                  <div className={classes.fade}>
                    <Collapse in={formOpen}>
                      <Paper elevation={5} className={classes.fadePaper}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          className={classes.fadeGrid}
                        >
                          <Fab
                            size="medium"
                            color="secondary"
                            aria-label="add"
                            className={classes.backIcon}
                            onClick={handleFormSidebar}
                          >
                            <ArrowBackIosIcon />
                          </Fab>
                          <Grid item xs={12}>
                            <Box pb={5}>
                              <Typography variant="h6">
                                ახალი ჯგუფის შექმნა
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              id="outlined-basic"
                              label="ჯგუფის დასახელება"
                              variant="outlined"
                              fullWidth
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Grid>
                          {gatewayData.map((key, value) => {
                            return (
                              <Grid
                                xs={3}
                                item
                                className={classes.checklistItem}
                                key={key.model}
                              >
                                <Box m={4}>
                                  <Paper elevation={3}>
                                    <Grid
                                      container
                                      direction="row"
                                      justify="center"
                                      alignItems="center"
                                    >
                                      <Grid item xs={3}>
                                        <Checkbox
                                          name={key.model}
                                          color="primary"
                                          onChange={(e) =>
                                            handleAdd(e, key.model, value)
                                          }
                                          // checked={checkboxArr[value]}
                                          checked={checkboxArr[value]}
                                        />
                                      </Grid>
                                      <Grid item xs={9}></Grid>
                                      <Grid item xs={12}>
                                        <Typography variant="body1">
                                          {key.label}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Typography variant="body1">
                                          {key.model}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Paper>
                                </Box>
                              </Grid>
                            );
                          })}

                          <Grid item xs={12}>
                            <Button
                              onClick={() => {
                                handleSubmit();
                                setGroups(group);
                              }}
                              className={classes.saveButton}
                            >
                              შენახვა
                            </Button>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Collapse>
                  </div>
                  <div className={classes.fade}>
                    <Collapse in={groupOpen}>
                      <CollapseGroup close={() => setGroupOpen(false)} />
                    </Collapse>
                  </div>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={5}
                  >
                    {group.map((index) => {
                      return (
                        <Grid
                          xs={2}
                          item
                          className={classes.directory}
                          key={index.name}
                        >
                          <FolderOpenIcon
                            color="primary"
                            onClick={() => {
                              handleGroupSidebar();
                              setGroupElements(index.name);
                            }}
                          />
                          <Typography variant="body2">{index.name}</Typography>
                        </Grid>
                      );
                    })}

                    <Grid xs={2} item className={classes.directory}>
                      <QueueIcon
                        style={{ color: green[500] }}
                        onClick={handleFormSidebar}
                      />
                      <Typography variant="body2">ჯგუფის შექმნა</Typography>
                    </Grid>
                    <Button
                      onClick={() => console.log(groups, group, selectedGroup)}
                    >
                      check
                    </Button>
                  </Grid>
                </Paper>
              );
            }}
          </GatewayGroupConsumer>
        </Container>
      </div>
    </GatewayGroupProvider>
  );
}
