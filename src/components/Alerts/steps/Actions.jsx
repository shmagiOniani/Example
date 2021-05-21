import { useEffect, useState } from "react";
import clsx from "clsx";
import { gatewayData } from "../../../assets/dataImitators/gatewayData";
import {
  Box,
  Button,
  makeStyles,
  Grid,
  Fab,
  TextField,
  MenuItem,
  Checkbox,
  Paper,
  Typography,
} from "@material-ui/core";
// Material icons
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// context component
import { AlertConsumer } from "../../LocalContext/AlertContext";

const styles = makeStyles((theme) => ({
  root: {
    padding: "50px 0 30px",
  },
  hide: {
    display: "none",
  },

  saveButton: {
    marginTop: "20px",
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  varBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  operand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {},
}));

// const columns = ["გეითვეი", "მოწყობილობა", "პარამეტრები"];

// const data = [
//   ["Joe James", "Test Corp", "Yonkers"],
//   ["John Walsh", "Test Corp", "Hartford"],
// ];

// const options = {
//   filterType: "checkbox",
// };

export function Actions() {
  const classes = styles();

  const [addButton, setAddButton] = useState(false);
  const [deviceData, setDeviceData] = useState([]);
  const [variableData, setVariableData] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);

  const [actionArr, setActionArr] = useState([]);

  const handleDevice = (e) => {
    setActionArr({ ...actionArr, device: e.target.value });
    const data = deviceData.find((item) => item.id === e.target.value);
    setVariableData(data.variables);
    setCheckedArr([]);
    // setAddButton(false);
  };

  const handleGateway = (e) => {
    setActionArr({ ...actionArr, gateway: e.target.value });
    const data = gatewayData.find((item) => item.value === e.target.value);
    setDeviceData(data.device);
    setVariableData([]);
    setCheckedArr([]);
  };

  const handleCheck = (e, name, value) => {
    if (e.target.checked) {
      const data = { name, value };
      setCheckedArr([...checkedArr, data]);
      console.log("add");
    } else if (!e.target.checked) {
      const newData = checkedArr.filter((item) => item.name !== name);
      setCheckedArr(newData);
      console.log("delete");
    }
  };

  const handleButton = () => {
    setAddButton((prev) => !prev);
  };

  const increaseOperand = (id) => {
    const newData = checkedArr.find((item) => item.name === id);
    newData.value++;
    const newArray = checkedArr.splice(0);
    setCheckedArr(newArray);
    console.log(newData, newArray, checkedArr);
  };

  const decreaseOperand = (id) => {
    const newData = checkedArr.find((item) => item.name === id);
    newData.value--;
    const newArray = checkedArr.splice(0);
    setCheckedArr(newArray);
    console.log(newData, newArray, checkedArr);
  };

  const handleOperand = (e, id) => {
    const newData = checkedArr.find((item) => item.name === id);
    newData.value = e.target.value;
    setCheckedArr(checkedArr);
    console.log(newData, checkedArr);
  };

  useEffect(() => {
    setCheckedArr(checkedArr);
  }, [checkedArr]);

  return (
    <AlertConsumer>
      {(props) => {
        const { setAction } = props;
        return (
          <Box className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Button
                  onClick={handleButton}
                  className={clsx({
                    [classes.saveButton]: true,
                    [classes.hide]: addButton,
                  })}
                >
                  ახალი ქმედება
                </Button>
              </Grid>
              <Grid
                container
                spacing={3}
                className={clsx({
                  [classes.hide]: !addButton,
                })}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    select
                    variant="outlined"
                    id="demo-controlled-open-select"
                    value={actionArr.gateway ? actionArr.gateway : ""}
                    onChange={handleGateway}
                    label={"აირჩიეთ გეითვეი"}
                    // className={classes.textfield}
                  >
                    {gatewayData.map((index) => {
                      return (
                        <MenuItem key={index.value} value={index.value}>
                          {index.label}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="აირჩიეთ დივაისი"
                    fullWidth
                    select
                    variant="outlined"
                    id="demo-controlled-open-select"
                    value={actionArr.device ? actionArr.device : ""}
                    onChange={handleDevice}
                  >
                    {deviceData.map((index) => {
                      return (
                        <MenuItem key={index.id} value={index.id}>
                          {index.name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {actionArr.device !== undefined ? (
                      <>
                        <Grid item xs={12}>
                          <Typography variant="h6">
                            მოწყობილობის ცვლადები
                          </Typography>
                        </Grid>
                        {variableData ? (
                          variableData.map((key) => {
                            return (
                              <Grid item xs={3} key={key.value}>
                                {/* imported start */}
                                <Paper elevation={3}>
                                  <Checkbox
                                    name={key.model}
                                    color="primary"
                                    onChange={(e) =>
                                      handleCheck(e, key.name, key.value)
                                    }
                                    // checked={checkboxArr[value]}
                                    // value={key.model}
                                  />
                                  <div>
                                    <Typography variant="h6">
                                      {key.name}
                                    </Typography>
                                    <Typography variant="body2">
                                      {key.status}
                                    </Typography>
                                  </div>
                                </Paper>
                                {/* imported end */}
                              </Grid>
                            );
                          })
                        ) : (
                          <Typography variant="body2">
                            "მოცემული დივაისისთვის ცვლადები ვერ მოიძებნა"
                          </Typography>
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.varContainer}
                >
                  {checkedArr.map((index) => {
                    return (
                      <Box key={index.name} className={classes.varBox} pt={3}>
                        <Grid item xs={6}>
                          <Box pr={3}>
                            <Typography variant="body1">
                              {index.name} :
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6} className={classes.operand}>
                          <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item xs={3}>
                              <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                onClick={() => decreaseOperand(index.name)}
                              >
                                <RemoveIcon />
                              </Fab>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                variant="outlined"
                                id="demo-controlled-open-select"
                                value={index.value}
                                onChange={(e) => handleOperand(e, index.name)}
                                className={classes.input}
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <Fab
                                size="small"
                                color="primary"
                                aria-label="edit"
                                onClick={() => increaseOperand(index.name)}
                              >
                                <AddIcon />
                              </Fab>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid
                xs={12}
                item
                className={clsx({
                  [classes.hide]: !actionArr.device,
                })}
              >
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SaveIcon />}
                  className={classes.saveButton}
                  onClick={() => {
                    console.log(checkedArr);
                    setAction(checkedArr);
                  }}
                >
                  ქმედების დამატება
                </Button>
              </Grid>
            </Grid>
          </Box>
        );
      }}
    </AlertConsumer>
  );
}
