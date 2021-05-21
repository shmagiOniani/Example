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
import GatewayComponent from "../Gateway/component/GatewayComponent";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  fade: {
    // height: 180,
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
    padding: "20px 0",
    display: "flex",
    position: "relative",
  },
  directory: {
    maxHeight: "75px",
    display: "inline-grid",
    justifyContent: "center",
    cursor: "pointer",
    "& > svg": {
      width: "3em",
      height: "3em",
      color: "primary",
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
  const [fadeType, setFadeType] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]);
  const [checkboxArr, setCheckboxArr] = useState(
    Array.from({ length: gatewayData.length }, (_, i) => false)
  );
  const [name, setName] = useState(`ჯგუფი `);
  const [group, setGroup] = useState([
    {
      name: "ჯგუფი",
      model: ["d-71345", "d-34845"],
    },
  ]);

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

  const handleSidebarToggle = (item) => {
    setFormOpen((prev) => !prev);
    setFadeType(item);
  };

  const handleSubmit = () => {
    setGroup([
      ...group,
      {
        name: name + count,
        model: checkedArr,
      },
    ]);
    setCount((prev) => prev++);
    setFormOpen((prev) => !prev);
    setCheckedArr([]);
    console.log(checkedArr);
    setCheckboxArr(Array.from({ length: gatewayData.length }, (_, i) => false));
    console.log(group);
  };

  // useEffect(() => {
  //   // setCount((count) => count + 1);
  // }, [checkboxArr]);

  return (
    <div>
      <CssBaseline />
      <Container>
        <Typography variant="h5" className={classes.header}>
          გეითვეის ჯგუფები
        </Typography>

        <Paper className={classes.main} elevation={3}>
          <div className={classes.fade}>
            <Collapse in={formOpen}>
              <Paper elevation={5} className={classes.fadePaper}>
                {fadeType === "create" ? (
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
                      onClick={handleSidebarToggle}
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
                        </Grid>
                      );
                    })}
                    <Grid item xs={12}>
                      <Button
                        onClick={() => {
                          handleSubmit();
                          setCount(count + 1);
                        }}
                        className={classes.saveButton}
                      >
                        შენახვა
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
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
                      onClick={handleSidebarToggle}
                    >
                      <ArrowBackIosIcon />
                    </Fab>
                    <Grid item xs={12}>
                      <Typography variant="h5" className={classes.header}>
                        გეითვეი
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {gatewayData.map((index) => {
                        return (
                          <GatewayComponent
                            model={index.model}
                            status={index.status}
                            label={index.label}
                            key={index.model}
                          />
                        );
                      })}
                    </Grid>
                  </Grid>
                )}
              </Paper>
            </Collapse>
          </div>

          <Grid container>
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
                    onClick={() => handleSidebarToggle("show")}
                  />
                  {index.name}
                </Grid>
              );
            })}

            <Grid xs={2} item className={classes.directory}>
              <QueueIcon
                style={{ color: green[500] }}
                onClick={() => handleSidebarToggle("create")}
              />
              ჯგუფის შექმნა
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
