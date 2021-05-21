import React from "react";
// import { alertLogsInputs } from "./alertLogsInputs";
// import Input from "../Input/Input";
// Material-Ui core components
// import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@material-ui/core";
// import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
// import { MenuItem } from "@material-ui/core";
// import { Button } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
// import Fab from "@material-ui/core/Fab";
// Material-Ui icons
// import AddIcon from "@material-ui/icons/Add";
// import SaveIcon from "@material-ui/icons/Save";
//Material-Color
import green from "@material-ui/core/colors/green";

const styles = makeStyles((theme) => ({
  root: {},
  container: {
    position: "relative",
  },
  gridContainer: {
    padding: "60px",
  },
  fade: {
    position: "absolute",
    zIndex: "1000",
    top: "90px",
    width: "100%",
    left: "0",
    padding: "0 15px",
    [theme.breakpoints.up("lg")]: {
      left: "0",
      padding: "0 21px",
    },
  },
  header: { paddingBottom: "40px" },
  fadePaper: {
    backgroundColor: "#f3f3f3",
    borderRadius: "10px",
  },
  addSign: {
    // left: "50%",
    // top: "-20px",
    position: "absolute",
    zIndex: "1001",
    backgroundColor: green[500],
    color: "white",
    margin: "-25px",
    "&:hover": {
      backgroundColor: "#61cf65",
    },
  },
  button: {
    // backgroundColor: green[500],
    // color: "white",
    // "&:hover": {
    //   backgroundColor: "#61cf65",
    // },
    marginBottom: "30px",
  },
}));

export default function AlertLogs() {
  const classes = styles();
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // };

  const columns = [
    "ორგანიზაციის დასახელება",
    "საიდენტიფიკაციო კოდი",
    "მისამართი",
  ];

  const data = [
    ["Business Analfdfyst", 12324532536, "Minneapolis"],
    ["Business Consfdfultant", 1232432253536, "Dallas"],
    ["Attorney", 12324522223536, "Ana"],
    ["Business Anadfdflyst", 123245332243536, "St. Petersburg"],
    ["Business ddf", 12324543223536, "Toledo"],
    ["Business Management Analyst", 12324544243536, " Diego"],
    ["Agency Legal Counsel", 12324532424536, "Jacksonville"],
    ["Commercial Specialist", 1232242424453536, "Omaha"],
    ["Business Anadfffdlyst", 123245352436, "Los Angeles"],
    ["Business Conffsultant", 123242453536, "OklahomaCity"],
    ["Attorney", 123245444213536, "Pittsburgh"],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <Typography variant="h5" className={classes.header}>
          ალერტების ლოგები
        </Typography>
        {/* <Fab
          aria-label="add"
          className={classes.addSign}
          onClick={handleChange}
        >
          <AddIcon />
        </Fab> */}

        {/* <div className={classes.fade}>
          <Collapse in={checked}>
            <div elevation={4} className={classes.fadePaper}>
              <form
                noValidate
                // onSubmit={this.handleSubmit}
              >
                <Grid container spacing={4} className={classes.gridContainer}>
                  {alertLogsInputs.map((inner) => (
                    <Grid item xs={inner.xs} sm={inner.sm} key={inner.userId}>
                      <Input
                        inputType={inner.inputType}
                        userId={inner.userId}
                        userName={inner.userName}
                        userLabel={inner.userLabel}
                        // handleChange={this.handleChange}
                        // inputValue={formValues[inner.userName]}
                        // error={formErrors[inner.userName]}
                        autoComplete={inner.userName}
                      >
                        {inner.option
                          ? inner.option.map((option) => (
                              <MenuItem key={option.key} value={option.key}>
                                {option.name}
                              </MenuItem>
                            ))
                          : ""}
                      </Input>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </form>
            </div>
          </Collapse>
        </div> */}
        <MUIDataTable
          title={"ალერტების ლოგები"}
          data={data}
          columns={columns}
          options={options}
        />
      </Container>
    </div>
  );
}
