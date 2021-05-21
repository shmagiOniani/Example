import { useEffect, useState } from "react";
// Material-ui core components
import {
  Button,
  Grid,
  Box,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
  IconButton,
  Typography,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// Material-ui icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
//consumer component
import { AlertConsumer } from "../../LocalContext/AlertContext";
import { userEmails } from "../../../assets/dataImitators/adminPanelData/userEmails";
import { userMobiles } from "../../../assets/dataImitators/adminPanelData/userMobiles";
import { userTemplates } from "../../../assets/dataImitators/adminPanelData/userTemplates";
import { userSMSTemplates } from "../../../assets/dataImitators/adminPanelData/userSMSTemplates";
import { userEmailTemplates } from "../../../assets/dataImitators/adminPanelData/userEmailTemplates";

const styles = makeStyles((theme) => ({
  root: {
    padding: "20px 20px",
    margin: "20px 0",
  },
  containerPaper: {
    padding: "30px",
  },
  MobileButton: {
    backgroundColor: "#f6a821",
    fontWeight: "600",
    color: "white",
    "&:hover": {
      backgroundColor: "#d7921c",
      boxShadow: "none",
    },
  },
  notContent: {
    fontSize: "small",
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

  close: {
    color: "#f50057",
  },
  selectInput: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function Notifications() {
  const classes = styles();

  const [mobileVariant, setMobileVariant] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileListOpen, setMobileListOpen] = useState(false);
  const [mobileNumberArr, setMobileNumberArr] = useState([]);
  const [mailCounter, setMailCounter] = useState(0);
  const [mailVariant, setMailVariant] = useState("");
  const [mail, setMail] = useState("");
  const [emailListOpen, setEmailListOpen] = useState(false);
  const [mailArr, setMailArr] = useState([]);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

  const [counter, setCounter] = useState(1);
  const [dataArr, setDataArr] = useState([]);

  const handleCreateVariable = (item) => {
    if ((mobileVariant && mobileNumber) !== "" && item === "mobile") {
      setDataArr([
        ...dataArr,
        {
          id: counter,
          type: "mobile",
          variant: mobileVariant,
          number: mobileNumber,
        },
      ]);
      setMobileNumber("");
      setMobileVariant("");
      setSuccess(true);
      return true;
    } else if ((mailVariant && mail) !== "" && item === "email") {
      setDataArr([
        ...dataArr,
        { id: counter, type: "email", variant: mailVariant, mail: mail },
      ]);
      setMail("");
      setMailVariant("");
      setSuccess(true);
    } else {
      setWarning(true);
      return true;
    }
  };

  const removeVariable = (index) => {
    dataArr.splice(index, 1);
    const data = dataArr.splice(0);
    console.log(data);
    setDataArr(data);
  };

  const handleWarningClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWarning(false);
    setSuccess(false);
  };

  useEffect(() => {
    setCounter((counter) => counter + 1);
  }, [dataArr]);

  return (
    <AlertConsumer>
      {(props) => {
        const { notifications, setNotifications } = props;
        return (
          <Grid container spacing={5} className={classes.root}>
            <Grid item xs={12} md={6}>
              <Paper elevation={4} className={classes.containerPaper}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item xs={12}>
                    <Box pb={3}>
                      <Typography variant="h6">SMS შეტყობინება</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={4}
                    >
                      {/* <Box>delete button</Box> */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          select
                          value={mobileVariant}
                          onChange={(e) => setMobileVariant(e.target.value)}
                          label="აირჩიეთ შაბლონი"
                        >
                          {userTemplates.map((item) => {
                            return (
                              <MenuItem
                                key={item.id}
                                value={item.text}
                                className={classes.selectInput}
                              >
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        {!mobileListOpen ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            label={"995 5xx xxx xxx"}
                          />
                        ) : (
                          <TextField
                            select
                            variant="outlined"
                            fullWidth
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            label={"995 5xx xxx xxx"}
                          >
                            {userMobiles.map((item) => {
                              return (
                                <MenuItem
                                  value={item.mobile}
                                  key={item.id}
                                  className={classes.selectInput}
                                >
                                  <span>{item.name}</span>
                                  <span>{item.mobile}</span>
                                </MenuItem>
                              );
                            })}
                          </TextField>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        {mobileListOpen ? (
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => setMobileListOpen((prev) => !prev)}
                          >
                            ახალი ნომრის დამატება
                          </Button>
                        ) : (
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => setMobileListOpen((prev) => !prev)}
                          >
                            ნომრის სიიდან დამატება
                          </Button>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.MobileButton}
                          onClick={() => {
                            if (handleCreateVariable("mobile")) {
                              setNotifications(dataArr);
                            }
                          }}
                        >
                          SMS შეტყობინების დამატება
                        </Button>
                      </Grid>
                      {/* {mobileNumberArr.map((index) => {
                        return (
                          <Grid item xs={12} key={mobileNumberArr.length}>
                            {JSON.stringify(index)}
                          </Grid>
                        );
                      })} */}
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* mobile variables */}
              <Paper elevation={5}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={4}
                >
                  {dataArr
                    .filter((item) => item.type === "mobile")
                    .map((item, index) => {
                      return (
                        <Grid item xs={11} key={item.id}>
                          <Paper elevation={3}>
                            <Grid
                              container
                              direction="row"
                              justify="center"
                              alignItems="center"
                              spacing={2}
                            >
                              <Grid item xs={4}>
                                <Typography variant="body2">
                                  {item.number.slice(-11)}
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography
                                  variant="body2"
                                  className={classes.notContent}
                                >
                                  {item.variant.slice(0, 30)}...
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <IconButton
                                  className={classes.close}
                                  onClick={() => {
                                    if (removeVariable(index)) {
                                      setNotifications(dataArr);
                                    }
                                  }}
                                >
                                  <HighlightOffIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      );
                    })}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4} className={classes.containerPaper}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item xs={12}>
                    <Box pb={3}>
                      <Typography variant="h6">ელ.ფოსტა</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={4}
                    >
                      {/* <Box>delete button</Box> */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          type="email"
                          variant="outlined"
                          select
                          value={mailVariant}
                          onChange={(e) => setMailVariant(e.target.value)}
                          label="აირჩიეთ შაბლონი"
                        >
                          {userTemplates.map((item) => {
                            return (
                              <MenuItem
                                key={item.id}
                                value={item.text}
                                className={classes.selectInput}
                              >
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        {!emailListOpen ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            label={"ელ.ფოსტა"}
                          />
                        ) : (
                          <TextField
                            variant="outlined"
                            select
                            fullWidth
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            label={"აირჩიეთ ელ.ფოსტა"}
                          >
                            {userEmails.map((item) => {
                              return (
                                <MenuItem
                                  value={item.email}
                                  key={item.id}
                                  className={classes.selectInput}
                                >
                                  <span>{item.name}</span>
                                  <span>{item.email}</span>
                                </MenuItem>
                              );
                            })}
                          </TextField>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        {emailListOpen ? (
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => setEmailListOpen((prev) => !prev)}
                            // onClick={handleUserEmailList}
                          >
                            ახალი ელ.ფოსტის დამატება
                          </Button>
                        ) : (
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => setEmailListOpen((prev) => !prev)}
                            // onClick={handleUserEmailList}
                          >
                            ელ.ფოსტის სიიდან დამატება
                          </Button>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          className={classes.saveButton}
                          onClick={() => {
                            if (handleCreateVariable("email")) {
                              setNotifications(dataArr);
                            }
                          }}
                        >
                          ელ.ფოსტის დამატება
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* mail variables */}
              <Paper elevation={5}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={4}
                >
                  {dataArr
                    .filter((item) => item.type === "email")
                    .map((item, index) => {
                      return (
                        <Grid item xs={11} key={item.id}>
                          <Paper elevation={3}>
                            <Grid
                              container
                              direction="row"
                              justify="space-between"
                              alignItems="center"
                              spacing={2}
                            >
                              <Grid item xs={4}>
                                <Typography variant="body2">
                                  {item.mail.substr(0, item.mail.indexOf("@"))}
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography
                                  variant="body2"
                                  className={classes.notContent}
                                >
                                  {item.variant.slice(0, 30)}...
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <IconButton
                                  className={classes.close}
                                  // onClick={() => console.log(index)}
                                  onClick={() => removeVariable(index)}
                                >
                                  <HighlightOffIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      );
                    })}
                </Grid>
              </Paper>
              {/* warning alert */}
              <Snackbar
                open={warning}
                autoHideDuration={6000}
                onClose={handleWarningClose}
              >
                <Alert onClose={handleWarningClose} severity="error">
                  შეტყობინების დასამატებლად აუცილებელია ყველა ველის შევსება!
                </Alert>
              </Snackbar>
              {/* Success alert */}
              <Snackbar
                open={success}
                autoHideDuration={6000}
                onClose={handleWarningClose}
              >
                <Alert onClose={handleWarningClose} severity="success">
                  შეტყობინების დასამატებლად აუცილებელია ყველა ველის შევსება!
                </Alert>
              </Snackbar>
              <Button onClick={() => console.log(notifications, dataArr)}>
                check
              </Button>
            </Grid>
          </Grid>
        );
      }}
    </AlertConsumer>
  );
}
