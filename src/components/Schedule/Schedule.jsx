import { useState } from "react";
// Material-Ui core components
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import MUIDataTable from "mui-datatables";
// Material-Ui icons
import AddIcon from "@material-ui/icons/Add";
//Material-Color
import green from "@material-ui/core/colors/green";
// import context
import { ScheduleProvider } from "../LocalContext/ScheduleContext";
import AddSchedule from "./AddSchedule";

const styles = makeStyles((theme) => ({
  root: {
    paddingBottom: "50px",
  },
  container: {
    position: "relative",
  },

  fade: {
    position: "absolute",
    zIndex: "1000",
    top: "70px",
    width: "100%",
    left: "0",
    padding: "0 15px 50px",
    [theme.breakpoints.up("lg")]: {
      left: "0",
      padding: "0 21px 50px",
    },
    [theme.breakpoints.up("sm")]: {
      left: "0",
      padding: "0 23px 50px",
    },
  },
  header: { paddingBottom: "40px" },
  fadePaper: {
    padding: "50px 0 0px",
    border: "1px solid gray",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  addSign: {
    position: "absolute",
    zIndex: "1001",
    backgroundColor: green[500],
    color: "white",
    margin: "-25px",
    "&:hover": {
      backgroundColor: "#61cf65",
    },
  },
}));

export default function Schedule() {
  const classes = styles();

  const [collapseChecked, setCollapseChecked] = useState(false);

  const handleChange = () => {
    setCollapseChecked((prev) => !prev);
  };

  const scheduleColumns = [
    "სტატუსი",
    "შექმნის დრო",
    "განრიგის დასახელება",
    "მოწყობილოის ტიპი",
    "დღეები",
    "დო",
    "გეითვეი",
    "მოწყობილობები",
    "პარამეტრები",
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
  };

  const scheduleData = [
    [
      "აქტიური",
      "2021/04/02 19:55:14",
      "განრიგი 1",
      "fan coil",
      "ოთხშაბათი",
      "03:02",
      "გეითვეი 2",
      "მოწყოპბილობა 4",
      "        model: winter        thermostate: 21        fan_speed: low        co_sensor_trigger_value: 3",
    ],
  ];

  return (
    <ScheduleProvider>
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.container}>
          <Typography variant="h5" className={classes.header}>
            განრიგები
          </Typography>
          <Fab
            aria-label="add"
            className={classes.addSign}
            onClick={handleChange}
          >
            <AddIcon />
          </Fab>

          <div className={classes.fade}>
            <Collapse in={collapseChecked}>
              <div className={classes.fadePaper}>
                {/* stepper start */}
                <AddSchedule />
                {/* stepper end */}
              </div>
            </Collapse>
          </div>
          <MUIDataTable
            title={"განრიგები"}
            data={scheduleData}
            columns={scheduleColumns}
            options={options}
          />
        </Container>
      </div>
    </ScheduleProvider>
  );
}
