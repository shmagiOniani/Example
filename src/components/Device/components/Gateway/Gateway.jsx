import { Link } from "react-router-dom";
import clsx from "clsx";
import InsideTextChart from "../../../charts/InsideTextChart";
import { data } from "./data";
// Material-ui Core Components
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
// Material-UI Icons
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AdbIcon from "@material-ui/icons/Adb";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import TuneIcon from "@material-ui/icons/Tune";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: { position: "relative" },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chartDiv: {
    height: "220px",
    "& > *": {
      cursor: "default",
      width: "100%!important",
      height: "100%!important",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute!important",
      top: "-5%",
      left: "0",
    },
  },
  active: {
    color: "green",
  },
  status: {
    position: "absolute",
    top: "7%",
    left: "8%",
    height: "20px",
    width: "20px",
  },
  setting: {
    position: "absolute",
    zIndex: "10",
    top: "5%",
    right: "5%",
    height: "30px",
    width: "30px",
    padding: "20px",
    "& > * ": {
      height: "100%",
      width: "100%",
    },
  },
  button: {
    margin: "5px 0",
    textDecoration: "none",
  },
}));

function Gateway() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Typography variant="h5">მექანიზმები</Typography>
        <Grid container spacing={3}>
          {data.map((index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index.model}
                className={classes.item}
              >
                <Paper className={classes.paper}>
                  <FiberManualRecordIcon
                    className={clsx({
                      [classes.active]: index.status === 1,
                      [classes.status]: true,
                    })}
                  />
                  <IconButton
                    color="primary"
                    component="span"
                    className={classes.setting}
                  >
                    <TuneIcon />
                  </IconButton>
                  <div>
                    <Typography variant="h6">{index.gateway}</Typography>
                    <Typography variant="body2">
                      მოდელი: {index.model}
                    </Typography>
                    <div className={classes.chartDiv}>
                      <InsideTextChart className={classes.chart} />
                    </div>
                    <Link to={"/Device/Gateways"} className={classes.button}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AdbIcon />}
                        fullWidth
                      >
                        იმიტატორი
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<ErrorOutlineIcon />}
                      fullWidth
                      className={classes.button}
                    >
                      ხარვეზები
                    </Button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Gateway;
