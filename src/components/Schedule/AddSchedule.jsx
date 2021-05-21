import { useState } from "react";
// Material-Ui core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Fab } from "@material-ui/core";
// Material-icon
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// import context
import { ScheduleConsumer } from "../LocalContext/ScheduleContext";
// import local data
import Transfer from "./Transfer";

const styles = makeStyles((theme) => ({
  root: {
    padding: "30px",
  },
  dataTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dataContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  saveButton: {
    // textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  deviceFormControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  paper: {
    padding: "20px",
  },
  operand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "50px",
    margin: "0 10px",
    "& > div > input": {
      padding: "10px 0px",
      textAlign: "center",
    },
  },
}));

function AddSchedule() {
  const classes = styles();

  const [operandValue, setOperandValue] = useState(22);

  const increaseOperand = () => {
    setOperandValue(operandValue + 1);
  };

  const decreaseOperand = () => {
    setOperandValue(operandValue - 1);
  };

  const [scheduleName, setScheduleName] = useState("");
  const days = [
    { name: "ორშაბათი" },
    { name: "სამშაბათი" },
    { name: "ოთხშაბათი" },
    { name: "ხუთშაბათი" },
    { name: "პარასკევი" },
    { name: "შაბათი" },
    { name: "კვირა" },
  ];
  const devices = [{ name: "მოწყობილობა 1" }, { name: "მოწყობილობა 2" }];

  const handleScheduleName = (e) => {
    setScheduleName(e.target.value);
  };

  // device types
  const deviceTypeArr = ["fan coil", "midea vrf"];
  const [deviceType, setDeviceType] = useState("");
  const handleDeviceTypes = (e) => {
    setDeviceType(e.target.value);
  };
  //

  return (
    <ScheduleConsumer>
      {(props) => {
        // const { setTime, setDay, setDevice, setGateway } = props;
        return (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.root}
          >
            <Grid item xs={12}>
              <Box>
                <Typography variant="h6">განრიგის შექმნა</Typography>
              </Box>
              <Box pt={3}>
                <TextField
                  label="განრიგის დასახელება"
                  fullWidth
                  variant="outlined"
                  onChange={handleScheduleName}
                  value={scheduleName}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">დროები და დღეები</Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} md={3} className={classes.dataContainer}>
                    <Typography variant="h6">დრო:</Typography>
                    <Box>
                      <form noValidate>
                        <TextField
                          id="time"
                          label="სთ/წთ"
                          type="time"
                          variant="outlined"
                          defaultValue="07:30"
                          className={classes.dataTextField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                      </form>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    {/* transfer place */}
                    <Transfer arr={days} type={"days"} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <Typography vraiant="h6">მოწყობილობის ტიპები</Typography>

                    <TextField
                      fullWidth
                      select
                      variant="outlined"
                      id="demo-controlled-open-select"
                      value={deviceType}
                      onChange={handleDeviceTypes}
                    >
                      {deviceTypeArr.map((index) => {
                        return (
                          <MenuItem key={index} value={index}>
                            {index}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6"></Typography>
                    <TextField
                      fullWidth
                      select
                      variant="outlined"
                      id="demo-controlled-open-select"
                      label="გეითვეი"
                      //   value={deviceType}
                      //   onChange={handleDeviceTypes}
                    >
                      <MenuItem value="firstGateway">გეითვეი 1</MenuItem>
                      <MenuItem value="secondGateway">გეითვეი 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6"></Typography>
                    <Paper elevation={3}>
                      {/* transfer */}
                      <Transfer arr={devices} type="devices" />
                      {/*  */}
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6">მოწყობილობის მართვა</Typography>
                  </Grid>
                  {deviceType === "fan coil" ? (
                    <>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          variant="outlined"
                          id="demo-controlled-open-select"
                          label="მოდელი"

                          //   value={deviceType}
                          //   onChange={handleDeviceTypes}
                        >
                          <MenuItem>item 1</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          variant="outlined"
                          id="demo-controlled-open-select"
                          label="სიჩქარე"

                          //   value={deviceType}
                          //   onChange={handleDeviceTypes}
                        >
                          <MenuItem>item 1</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item xs={8}>
                            <Typography variant="body1">
                              ტემპერატურა :
                            </Typography>
                          </Grid>
                          <Grid item xs={4} className={classes.operand}>
                            <Fab
                              size="small"
                              color="secondary"
                              aria-label="add"
                              onClick={decreaseOperand}
                            >
                              <RemoveIcon />
                            </Fab>
                            <TextField
                              variant="outlined"
                              id="demo-controlled-open-select"
                              value={operandValue}
                              onChange={() => setOperandValue(operandValue)}
                              className={classes.input}
                            />
                            <Fab
                              size="small"
                              color="primary"
                              aria-label="edit"
                              onClick={increaseOperand}
                            >
                              <AddIcon />
                            </Fab>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  ) : deviceType === "midea vrf" ? (
                    <>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          select
                          variant="outlined"
                          id="demo-controlled-open-select"
                          label="მოდელი"

                          //   value={deviceType}
                          //   onChange={handleDeviceTypes}
                        >
                          <MenuItem value="Off">Off</MenuItem>
                          <MenuItem value="Fan">Fan</MenuItem>
                          <MenuItem value="Cool">Cool</MenuItem>
                          <MenuItem value="Heat">Heat</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          select
                          variant="outlined"
                          id="demo-controlled-open-select"
                          label="სიჩქარე"

                          //   value={deviceType}
                          //   onChange={handleDeviceTypes}
                        >
                          <MenuItem value="Off">Off</MenuItem>
                          <MenuItem value="Low">Low</MenuItem>
                          <MenuItem value="Middle">Middle</MenuItem>
                          <MenuItem value="High">High</MenuItem>
                          <MenuItem value="Auto">Auto</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          variant="outlined"
                          id="demo-controlled-open-select"
                          label="მდგომარეობა"

                          //   value={deviceType}
                          //   onChange={handleDeviceTypes}
                        >
                          <MenuItem value="open">ღია</MenuItem>
                          <MenuItem value="closed">დახურული</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item xs={8}>
                            <Typography variant="body1">
                              ტემპერატურა :
                            </Typography>
                          </Grid>
                          <Grid item xs={4} className={classes.operand}>
                            <Fab
                              size="small"
                              color="secondary"
                              aria-label="add"
                              onClick={decreaseOperand}
                            >
                              <RemoveIcon />
                            </Fab>
                            <TextField
                              variant="outlined"
                              id="demo-controlled-open-select"
                              value={operandValue}
                              onChange={() => setOperandValue(operandValue)}
                              className={classes.input}
                            />
                            <Fab
                              size="small"
                              color="primary"
                              aria-label="edit"
                              onClick={increaseOperand}
                            >
                              <AddIcon />
                            </Fab>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Button variant="contained" className={classes.saveButton}>
                  <Typography variant="body1">შენახვა</Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        );
      }}
    </ScheduleConsumer>
  );
}

export default AddSchedule;
