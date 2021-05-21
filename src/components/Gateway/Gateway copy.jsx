import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import InsideTextChart from "../charts/InsideTextChart";
import { gatewayData } from "../../assets/dataImitators/gatewayData";
// Material-ui Core Components
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
// Material-UI Icons
import DnsIcon from "@material-ui/icons/Dns";
import EditIcon from "@material-ui/icons/Edit";
import LoopIcon from "@material-ui/icons/Loop";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AdbIcon from "@material-ui/icons/Adb";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import TuneIcon from "@material-ui/icons/Tune";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingBottom: "40px",
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
  gatewayMenu: {
    "& > *": {
      // boxShadow: "none",
      boxShadow: "0px 0px 3px 0px rgb(0 0 0 / 3%);",
    },
    "& > div > ul": {},
  },
  gatewayMenuList: {
    fontWeight: "600!important",
    "& > *": {
      marginRight: "10px",
    },
  },
}));

function Gateway(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Typography variant="h5" className={classes.header}>
          გეითვეი
        </Typography>
        <Grid container spacing={3}>
          {gatewayData.map((index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index.model}
                className={classes.item}
              >
                <Paper className={classes.paper} elevation={3}>
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
                    onClick={handleClick}
                  >
                    <TuneIcon />
                  </IconButton>
                  <Menu
                    id="gateway-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={classes.gatewayMenu}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className={classes.gatewayMenuList}
                    >
                      <DnsIcon />
                      მოწყობილობები
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.gatewayMenuList}
                    >
                      <EditIcon />
                      რედაქტირება
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.gatewayMenuList}
                    >
                      <LoopIcon />
                      ჩანაცვლება
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.gatewayMenuList}
                    >
                      <LocationOnIcon />
                      რუკაზე ნახვა
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.gatewayMenuList}
                    >
                      <DeleteOutlineIcon />
                      წაშლა
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.gatewayMenuList}
                    >
                      <HighlightOffIcon />
                      ფორს.წაშლა
                    </MenuItem>
                  </Menu>
                  <div>
                    <Typography variant="h6">{index.label}</Typography>
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
                        სიმულატორი
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
