import React from "react";
// Material-ui core components

import {
  Box,
  Grid,
  makeStyles,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
// material-ui icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// import context
import { AlertConsumer } from "../../LocalContext/AlertContext";
// local data
import { gatewayData } from "../../../assets/dataImitators/gatewayData";

const styles = makeStyles((theme) => ({
  grid: {
    position: "relative",
    padding: "30px",
    border: "1px solid #8080804a",
    "& > div": {
      paddingTop: "0px!important",
      paddingBottom: "0px!important",
      "& > div": {
        paddingTop: "0px!important",
        paddingBottom: "0px!important",
      },
    },
  },
  textfield: {
    margin: "20px 0",
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
    position: "absolute",
    top: "0px",
    right: "0px",
  },
  closeButton: {
    color: "#4caf50",
  },
}));

function LogicCondition(props) {
  const classes = styles();

  const [deviceArr, setDeviceArr] = React.useState([]);
  const [variableArr, setVariableArr] = React.useState([]);

  const [conditionVar, setConditionVar] = React.useState([]);

  const handleOperand = (event) => {
    setConditionVar({ type: event.target.value });
  };

  const handleLocalVariable = (event) => {
    setConditionVar({ ...conditionVar, localVariable: event.target.value });
  };

  const handleGateway = (event) => {
    const data = gatewayData.find((item) => item.value === event.target.value);
    setDeviceArr(data.device);
    setConditionVar({ ...conditionVar, gateway: event.target.value });
  };
  const handleDevice = (event) => {
    const data = deviceArr.find((item) => item.value === event.target.value);
    setVariableArr(data.variables);
    setConditionVar({ ...conditionVar, device: event.target.value });
  };
  const handleVariables = (event) => {
    setConditionVar({
      ...conditionVar,
      gatewayVariable: event.target.value,
    });
  };

  const handleOperator = (event) => {
    setConditionVar({ ...conditionVar, operator: event.target.value });
  };

  const handleSecondOperand = (event) => {
    setConditionVar({ ...conditionVar, secondOperand: event.target.value });
  };

  const handleSubmit = () => {
    setConditionVar([]);
  };

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Box className={classes.close}>
        <IconButton
          component="span"
          onClick={() => props.handleCloseCondition(props.id)}
          className={classes.closeButton}
        >
          <HighlightOffIcon />
        </IconButton>
      </Box>
      <AlertConsumer>
        {(props) => {
          const { variables, conditions, setCondition } = props;
          return (
            <>
              <Grid item xs={12}>
                <Box pb={2} pt={2}>
                  <TextField
                    fullWidth
                    select
                    variant="outlined"
                    id="demo-controlled-open-select"
                    value={conditionVar.type ? conditionVar.type : ""}
                    onChange={handleOperand}
                    defaultValue={"localVariable"}
                    label="აირჩიეთ ცვლადის ტიპი"
                    className={classes.textfield}
                  >
                    <MenuItem value={"localVariable"}>ლოკალური ცვლადი</MenuItem>
                    <MenuItem value={"gatewayVariable"}>
                      მოწყობილობის ცვლადი
                    </MenuItem>
                  </TextField>
                </Box>
              </Grid>
              {conditionVar.type === "localVariable" ? (
                <>
                  <Grid item xs={12}>
                    <Box pb={2} pt={2}>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        value={
                          conditionVar.localVariable
                            ? conditionVar.localVariable
                            : ""
                        }
                        onChange={handleLocalVariable}
                        label="აირჩიეთ ლოკალური ცვლადი"
                        className={classes.textfield}
                      >
                        {variables.map((value) => {
                          return (
                            <MenuItem key={value.key} value={value.name}>
                              {value.name}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Box>
                  </Grid>
                </>
              ) : (
                ""
              )}
              {conditionVar.type === "gatewayVariable" ? (
                <>
                  <Grid item xs={12} lg={4}>
                    <Box pb={2} pt={2}>
                      <TextField
                        select
                        fullWidth
                        variant="outlined"
                        value={conditionVar.gateway ? conditionVar.gateway : ""}
                        onChange={handleGateway}
                        label="აირჩიეთ გეითვეი"
                        className={classes.textfield}
                      >
                        {gatewayData.map((index) => {
                          return (
                            <MenuItem value={index.value} key={index.value}>
                              {index.label}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Box pb={2} pt={2}>
                      <TextField
                        select
                        fullWidth
                        variant="outlined"
                        value={conditionVar.device ? conditionVar.device : ""}
                        onChange={handleDevice}
                        label="აირჩიეთ მოწყობილობა"
                        className={classes.textfield}
                      >
                        {deviceArr.map((item) => {
                          return (
                            <MenuItem value={item.value} key={item.id}>
                              {item.name}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Box pb={2} pt={2}>
                      <TextField
                        select
                        fullWidth
                        variant="outlined"
                        onChange={handleVariables}
                        value={
                          conditionVar.gatewayVariable
                            ? conditionVar.gatewayVariable
                            : ""
                        }
                        label="აირჩიეთ ცვლადი"
                        className={classes.textfield}
                      >
                        {variableArr.map((item) => {
                          return (
                            <MenuItem value={item.value} key={item.id}>
                              {item.name}
                              {console.log(item)}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Box>
                  </Grid>
                </>
              ) : (
                ""
              )}
              <Grid item xs={12} md={3}>
                <Box pb={2} pt={2}>
                  <TextField
                    fullWidth
                    select
                    variant="outlined"
                    value={conditionVar.operator ? conditionVar.operator : ""}
                    onChange={handleOperator}
                    label="ოპერატორი"
                    className={classes.textfield}
                  >
                    <MenuItem value={"="}>=</MenuItem>
                    <MenuItem value={"!="}>!=</MenuItem>
                    <MenuItem value={">="}>{">="}</MenuItem>
                    <MenuItem value={"<="}>{"<="}</MenuItem>
                    <MenuItem value={">"}> {">"} </MenuItem>
                    <MenuItem value={"<"}> {"<"} </MenuItem>
                  </TextField>
                </Box>
              </Grid>

              <Grid item xs={12} md={9}>
                <Box pb={2} pt={2}>
                  <TextField
                    fullWidth
                    type="number"
                    variant="outlined"
                    value={
                      conditionVar.secondOperand
                        ? conditionVar.secondOperand
                        : ""
                    }
                    onChange={handleSecondOperand}
                    label="მიუთითეთ რიცხვის მნიშვნელობა"
                    className={classes.textfield}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button
                  className={classes.saveButton}
                  onClick={() => {
                    setCondition(conditionVar);
                    handleSubmit();
                    console.log(conditions);
                  }}
                >
                  შენახვა
                </Button>
              </Grid>
              {/* {conditionVar.localVariable === "" ||
              conditionVar.gatewayVariable === "" ? (
              ) : (
                ""
              )} */}
            </>
          );
        }}
      </AlertConsumer>
    </Grid>
  );
}

export default LogicCondition;
