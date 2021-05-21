import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
// Material-Ui core components
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Collapse from "@material-ui/core/Collapse";
//Material-Color
import green from "@material-ui/core/colors/green";
// Material-Ui icons
import AddIcon from "@material-ui/icons/Add";
import { gatewayData } from "../../assets/dataImitators/gatewayData";

const styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  container: {
    position: "relative",
  },
  gridContainer: {
    padding: "60px",
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
      padding: "15px 23px",
    },
  },
  fadePaper: {
    padding: "50px 0",
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
  button: {
    marginBottom: "30px",
    marginRight: theme.spacing(1),
  },

  textarea: {
    padding: "20px 0",
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
  paper: {
    padding: "20px",
  },
}));

const columns = [
  { field: "type", headerName: "ტიპი", width: 130 },
  { field: "content", headerName: "შიგთავსი", width: 500 },
];

const rows = [
  {
    id: 1,
    content: "SnowSnow Snow Snow Snow Snow Snow Snow Snow Snow",
    type: "SMS",
  },
  {
    id: 2,
    content:
      "LannisterLannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister",
    type: "Email",
  },
  {
    id: 3,
    content:
      "LannisterLannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister",
    type: "SMS",
  },
  {
    id: 4,
    content: "StarkStark Stark Stark Stark Stark Stark Stark Stark Stark",
    type: "Email",
  },
  {
    id: 5,
    content:
      "TargaryenTargaryen Targaryen Targaryen Targaryen Targaryen Targaryen Targaryen Targaryen Targaryen",
    type: "SMS",
  },
  {
    id: 6,
    content:
      "MelisandreMelisandre Melisandre Melisandre Melisandre Melisandre Melisandre Melisandre Melisandre Melisandre",
    type: "SMS",
  },
  {
    id: 7,
    content:
      "CliffordClifford Clifford Clifford Clifford Clifford Clifford Clifford Clifford Clifford",
    type: "Email",
  },
  {
    id: 8,
    content:
      "FrancesFrances Frances Frances Frances Frances Frances Frances Frances Frances",
    type: "Email",
  },
  {
    id: 9,
    content: "RoxieRoxie Roxie Roxie Roxie Roxie Roxie Roxie Roxie Roxie",
    type: "Email",
  },
];

export default function MailTemplate() {
  const classes = styles();

  const [checked, setChecked] = useState(false);
  const [mailType, setMailType] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [deviceData, setDeviceData] = React.useState([]);
  const [variableData, setVariableData] = React.useState([]);

  const [actionArr, setActionArr] = React.useState([]);

  const handleDevice = (e) => {
    setActionArr({ ...actionArr, device: e.target.value });
    const data = deviceData.find((item) => item.value === e.target.value);
    setVariableData(data.variables);
    console.log(variableData);
  };

  const handleGateway = (e) => {
    setActionArr({ ...actionArr, gateway: e.target.value });
    const data = gatewayData.find((item) => item.value === e.target.value);
    setDeviceData(data.device);
  };

  const handleVariable = (item) => {
    setContent(content + item);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleMailtype = (e) => {
    setMailType(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <Typography variant="h5" className={classes.header}>
          შეტყობინების შაბლონები
        </Typography>
        <Fab
          aria-label="add"
          className={classes.addSign}
          onClick={handleChange}
        >
          <AddIcon />
        </Fab>
        <div className={classes.fade}>
          <Collapse in={checked}>
            <Grid container spacing={3} className={classes.fadePaper}>
              <Grid item xs={12}>
                <Typography variant="h6" className={classes.header}>
                  შაბლონის დამატება
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6">დეტალური ინფორმაცია</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        id="demo-controlled-open-select"
                        value={mailType}
                        onChange={handleMailtype}
                        // className={classes.textfield}
                        label="აირჩიეთ შეტყობინების ტიპი"
                      >
                        <MenuItem value={"sms"}>SMS</MenuItem>
                        <MenuItem value={"email"}>ელ.ფოსტა</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        onChange={handleName}
                        value={name}
                        label="მიუთითეთ დასახელება"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        გამოიყენეთ მოწყობილობის ცვლადები
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        id="demo-controlled-open-select"
                        value={actionArr.gateway ? actionArr.gateway : ""}
                        onChange={handleGateway}
                        label="აირჩიეთ გეითვეი"
                      >
                        {gatewayData.map((index) => {
                          return (
                            <MenuItem key={index.model} value={index.value}>
                              {index.label}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        value={actionArr.device ? actionArr.device : ""}
                        onChange={handleDevice}
                        label="აირჩიეთ მოწყობილობა"
                        className={classes.textfield}
                      >
                        {deviceData.map((index) => {
                          return (
                            <MenuItem key={index.id} value={index.value}>
                              {index.name}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      {variableData.map((index) => {
                        return (
                          <Grid key={index.value} item>
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.button}
                              endIcon={<Icon>send</Icon>}
                              onClick={() => handleVariable(index.name)}
                            >
                              {index.name}
                            </Button>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                  <Typography variant="h6">შეიყვანეთ შეტყობინება</Typography>
                  <TextField
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                    onChange={handleContent}
                    value={content ? content : ""}
                    className={classes.textarea}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" className={classes.saveButton}>
                  შენახვა
                </Button>
              </Grid>
            </Grid>
          </Collapse>
        </div>
        <Paper>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              checkboxSelection
            />
          </div>
        </Paper>
      </Container>
    </div>
  );
}
