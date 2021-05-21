import React, { useState } from "react";
// Material-Ui core components
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Stepper } from "@material-ui/core";
import { Step } from "@material-ui/core";
import { StepLabel } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Fab from "@material-ui/core/Fab";
import { Box, StepContent } from "@material-ui/core";
import { getStepContent } from "./getStepContent";
// Material-Ui icons
import AddIcon from "@material-ui/icons/Add";
// import context
import { AlertProvider, AlertConsumer } from "../LocalContext/AlertContext";

const styles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  fade: {
    position: "absolute",
    zIndex: "1000",
    top: "70px",
    width: "100%",
    left: "0",
    padding: "0 15px",
    [theme.breakpoints.up("lg")]: {
      left: "0",
      padding: "0 21px",
    },
    [theme.breakpoints.up("sm")]: {
      left: "0",
      padding: "0 23px",
    },
  },
  header: { paddingBottom: "40px" },
  fadePaper: {
    padding: "50px 0",
    border: "1px solid gray",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  addSign: {
    position: "absolute",
    zIndex: "1001",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    margin: "-25px",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
}));

function getSteps() {
  return [
    "ოპერანდების შექმნა",
    "ლოგიკა",
    "ქმედებები",
    "შეტყობინებები",
    "შეტყობინების დრო",
    "სახელი",
  ];
}

export default function Alerts() {
  const classes = styles();

  const [alertData, setAlertData] = useState([
    ["Business Consultant", 1232453536],
  ]);
  const [checked, setChecked] = useState(false);
  const handleOpen = () => {
    setChecked((prev) => !prev);
    setActiveStep(0);
  };
  const handleAdd = () => {
    setChecked((prev) => !prev);
    setActiveStep(0);
  };
  const alertColumns = ["დასახელება", "შექმნის დრო"];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
  };
  // stepper start
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDataPush = (item) => {
    setAlertData([...alertData, item]);
    console.log(alertData);
  };

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <AlertProvider>
      <AlertConsumer>
        {(props) => {
          const {
            variables,
            conditions,
            actions,
            notifications,
            notificationTimes,
            varName,
          } = props;
          return (
            <div className={classes.root}>
              <CssBaseline />
              <Container className={classes.container}>
                <Typography variant="h5" className={classes.header}>
                  ალერტები
                </Typography>
                <Fab
                  aria-label="add"
                  className={classes.addSign}
                  onClick={handleOpen}
                >
                  <AddIcon />
                </Fab>

                <div className={classes.fade}>
                  <Collapse in={checked}>
                    <div className={classes.fadePaper}>
                      {/* stepper start */}
                      <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                          <Step key={label}>
                            <StepLabel>
                              <Typography variant="h6">{label}</Typography>
                            </StepLabel>
                            <StepContent>
                              <Typography component={"span"} variant={"body2"}>
                                {getStepContent(index)}
                              </Typography>
                              <Box>
                                <Box
                                  mt={2}
                                  display="flex"
                                  justifyContent="space-between"
                                >
                                  <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    variant="contained"
                                  >
                                    უკან
                                  </Button>

                                  {activeStep === steps.length - 1 ? (
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={() => {
                                        handleDataPush([varName, date]);
                                        handleOpen();
                                      }}
                                    >
                                      შენახვა
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={handleNext}
                                    >
                                      შემდეგ
                                    </Button>
                                  )}
                                </Box>
                              </Box>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
                      {/* stepper end */}
                    </div>
                  </Collapse>
                </div>
                <MUIDataTable
                  title={"ალერტები"}
                  data={alertData}
                  columns={alertColumns}
                  options={options}
                />
                <Button onClick={() => handleDataPush([varName, date])}>
                  click
                </Button>
              </Container>
            </div>
          );
        }}
      </AlertConsumer>
    </AlertProvider>
  );
}
