import { useState } from "react";
import clsx from "clsx";
import {
  Box,
  IconButton,
  TextField,
  Grid,
  MenuItem,
  Paper,
  makeStyles,
  Button,
  Fab,
  Typography,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// Material icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddIcon from "@material-ui/icons/Add";
// context component
import { AlertConsumer } from "../../LocalContext/AlertContext";

const styles = makeStyles((theme) => ({
  root: {
    padding: "30px",
  },
  timeContainer: {
    display: "flex",
    justifyContent: "center",
    alingnItems: "center",
    textAlign: "center",
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
  margin: {
    margin: theme.spacing(1),
  },
  close: {
    "& > *": {
      color: "red",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: "none",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function NotificationTime() {
  const classes = styles();
  const [timeVariant, setTimeVariant] = useState("");
  const [notificationTimeArr, setNotificationTimeArr] = useState([[]]);
  const [weekDay, setWeekDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const [warning, setWarning] = useState(false);

  const weekDays = [
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
    "კვირა",
  ];

  const handleWarningClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setWarning(false);
  };

  const [selectedNotificationTime, setSelectedNotificationTime] = useState("");

  const handleChange = (e) => {
    setSelectedNotificationTime(e.target.value);
    setTimeVariant(e.target.value);
  };

  const add = () => {
    if (!selectedNotificationTime) return;
    const isExist = notificationTimeArr.find(
      (val) => val.name === "immediatily"
    );
    console.log(isExist, "isExist");
    if (isExist && selectedNotificationTime === "immediatily") {
      setWarning(true);
    } else {
      if (selectedNotificationTime === "immediatily") {
        notificationTimeArr.push({
          name: selectedNotificationTime,
          weekday: weekDays[new Date().getDay()],
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          second: new Date().getSeconds(),
        });
      } else {
        notificationTimeArr.push({
          name: selectedNotificationTime,
          weekday: weekDay,
          hour: hour,
          minute: minute,
          second: second,
        });
      }

      setNotificationTimeArr(notificationTimeArr);
      setSelectedNotificationTime("");
      setTimeVariant("");
      setHour("");
      setMinute("");
      setSecond("");
      setWeekDay("");
      console.log(notificationTimeArr, "notificationTimeArr");
    }
  };

  const remove = (index) => {
    notificationTimeArr.splice(index, 1);
    const data = notificationTimeArr.splice(0);
    setNotificationTimeArr(data);
  };

  return (
    <AlertConsumer>
      {(props) => {
        const { setNotificationTimes, notificationTimes } = props;
        return (
          <Box p={4}>
            <Paper elevation={4} className={classes.root}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                {notificationTimeArr.map((item, index) => {
                  if (item.name) {
                    return (
                      <Grid item xs={11} key={index}>
                        <Paper elevation={4}>
                          <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item xs={2}>
                              {item.name === "immediatily"
                                ? "დაუყოვნებლივ"
                                : item.name === "fixed"
                                ? "ფიქსირებული"
                                : "შემდეგ"}
                            </Grid>

                            <Grid item xs={8} className={classes.timeContainer}>
                              <Typography variant="body1">
                                {item.weekday}/
                              </Typography>
                              <Typography variant="body1">
                                {item.hour}სთ/
                              </Typography>
                              <Typography variant="body1">
                                {item.minute}წთ/
                              </Typography>
                              <Typography variant="body1">
                                {item.second}
                                წმ
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <IconButton
                                className={classes.close}
                                onClick={() => remove(index)}
                              >
                                <HighlightOffIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    );
                  } else {
                    return (
                      <Grid item xs={12} key={index}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          spacing={4}
                        >
                          <Grid item xs={12}>
                            <TextField
                              select
                              fullWidth
                              variant="outlined"
                              value={timeVariant}
                              onChange={(e) => handleChange(e)}
                              label="აირჩიეთ დრო"
                            >
                              <MenuItem value={"immediatily"}>
                                დაუყოვნებლივ
                              </MenuItem>
                              <MenuItem value={"fixed"}>ფიქსირებული</MenuItem>
                              <MenuItem value={"after"}>შემდეგ</MenuItem>
                            </TextField>
                          </Grid>

                          {selectedNotificationTime === "fixed" ? (
                            <Grid item xs={12}>
                              <TextField
                                select
                                fullWidth
                                variant="outlined"
                                value={weekDay}
                                label="კვირის დღე"
                                onChange={(e) => setWeekDay(e.target.value)}
                              >
                                {weekDays.map((item, index) => {
                                  return (
                                    <MenuItem key={index} value={item}>
                                      {item}
                                    </MenuItem>
                                  );
                                })}
                              </TextField>
                            </Grid>
                          ) : (
                            ""
                          )}
                          {selectedNotificationTime === "after" ||
                          selectedNotificationTime === "fixed" ? (
                            <>
                              <Grid item xs={12} md={4}>
                                <TextField
                                  select
                                  fullWidth
                                  variant="outlined"
                                  value={hour}
                                  label="საათი"
                                  onChange={(e) => setHour(e.target.value)}
                                >
                                  {[...Array(24)].map((item, index) => {
                                    return (
                                      <MenuItem key={index} value={index}>
                                        {index}
                                      </MenuItem>
                                    );
                                  })}
                                </TextField>
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <TextField
                                  select
                                  fullWidth
                                  variant="outlined"
                                  value={minute}
                                  label="წუთი"
                                  onChange={(e) => setMinute(e.target.value)}
                                >
                                  {[...Array(60)].map((item, index) => {
                                    return (
                                      <MenuItem key={index} value={index}>
                                        {index}
                                      </MenuItem>
                                    );
                                  })}
                                </TextField>
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <TextField
                                  select
                                  fullWidth
                                  variant="outlined"
                                  value={second}
                                  label="წამი"
                                  onChange={(e) => setSecond(e.target.value)}
                                >
                                  {[...Array(60)].map((item, index) => {
                                    return (
                                      <MenuItem key={index} value={index}>
                                        {index}
                                      </MenuItem>
                                    );
                                  })}
                                </TextField>
                              </Grid>
                            </>
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                    );
                  }
                })}
                <Grid item xs={12}>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.margin}
                    onClick={add}
                  >
                    <AddIcon className={classes.extendedIcon} />
                    დროის დამატება
                  </Fab>
                </Grid>
                <Snackbar
                  open={warning}
                  autoHideDuration={6000}
                  onClose={handleWarningClose}
                >
                  <Alert onClose={handleWarningClose} severity="error">
                    აირჩიეთ მხოლოდ ერთი "დაუყოვნებლივ" ტიპის შეტყობინება!
                  </Alert>
                </Snackbar>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={() => setNotificationTimes(notificationTimeArr)}
                    className={classes.saveButton}
                  >
                    შენახვა
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
      }}
    </AlertConsumer>
  );
}
