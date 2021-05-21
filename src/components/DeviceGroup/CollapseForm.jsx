import React, { useEffect } from "react";
// Maetrial-Ui core View
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
// Material-Ui icons
import { gatewayData } from "../../assets/dataImitators/gatewayData";
import { GatewayGroupConsumer } from "../LocalContext/GatewayGroupContext";

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
    margin: theme.spacing(1),
    padding: theme.spacing(1),
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
}));

function CollapseForm(props) {
  const classes = useStyles();

  const [count, setCount] = React.useState(1);
  const [checkedArr, setCheckedArr] = React.useState([]);
  const [checkboxArr, setCheckboxArr] = React.useState(
    Array.from({ length: gatewayData.length }, (_, i) => false)
  );
  const [group, setGroup] = React.useState([
    {
      name: "ჯგუფი",
      model: ["d-71345", "d-34845"],
    },
  ]);
  const [name, setName] = React.useState(`ჯგუფი ${count}`);

  const handleSubmit = () => {
    setGroup([
      ...group,
      {
        name: name,
        model: checkedArr,
      },
    ]);
    setCheckedArr([]);
    console.log(checkedArr);
    setCheckboxArr(Array.from({ length: gatewayData.length }, (_, i) => false));
    console.log(count, name);
  };

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
      e.target.checked = false;
    }
  };

  useEffect(() => {
    setCount((count) => count + 1);
    console.log("i'm here");
  }, [checkboxArr]);
  useEffect(() => {}, [checkedArr]);

  return (
    <GatewayGroupConsumer>
      {(props) => {
        const { groups, setGroup } = props;
        return (
          <div>
            <Collapse in={props.status}>
              <Paper elevation={0} className={classes.fadePaper}>
                <FormGroup>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="დირექტორიის დასახელება"
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
                            <Checkbox
                              name={key.model}
                              color="primary"
                              // checked={() =>
                              //   setCheckedArr(...checkedArr, key.value)
                              // }
                              onChange={(e) => handleAdd(e, key.model, value)}
                              checked={checkboxArr[value]}
                              // value={key.model}
                            />
                            <div className={classes.gatewayContent}>
                              <Typography variant="h5">{key.label}</Typography>
                              <Typography variant="h6">{key.model}</Typography>
                            </div>
                          </Paper>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={handleSubmit}
                      className={classes.saveButton}
                    >
                      შენახვა
                    </Button>
                  </Grid>
                </FormGroup>
              </Paper>
            </Collapse>
          </div>
        );
      }}
    </GatewayGroupConsumer>
  );
}

export default CollapseForm;
