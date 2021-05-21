import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Material-UI Core Components
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
// Material-Ui icons
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import RoomIcon from "@material-ui/icons/Room";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ToysIcon from "@material-ui/icons/Toys";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import TuneIcon from "@material-ui/icons/Tune";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapIcon from "@material-ui/icons/Map";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import ListAltIcon from "@material-ui/icons/ListAlt";
// select resource
import Select from "react-select";
import { gatewayData } from "../../assets/dataImitators/gatewayData";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import GatewayComponent from "../Gateway/component/GatewayComponent";
// Local Components

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "80vh",
  },
  hide: {
    display: "none",
  },
  tab: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  active: {
    color: "green",
  },

  tabNav: {
    "& > * > *": {
      justifyContent: "space-around",
    },
  },
  sectionGrid: {
    padding: "0!important",
  },
  device: {
    padding: "40px 20px 30px!important",
  },
  deviceContainer: {
    padding: "10px",
  },
  temperature: {
    fontSize: "55px",
    fontWeight: "600",
    color: "hsl(0deg 0% 20%)",
  },
  infoIcon: {
    backgroundColor: "#f6a821",
    "&:hover": {
      backgroundColor: "#d7921c",
    },
  },
  status: {
    height: "20px",
    width: "20px",
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
    fontSize: "15px",
    "& > *": {
      marginRight: "10px",
    },
  },
  selectInput: {
    padding: "50px 10px 15px!important",
  },
}));

// select input source
const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  border: "none!important",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

// tabs source
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

//

function Device() {
  const classes = useStyles();

  const { model } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [selectVal, setSelectVal] = useState(model);
  const [sensorsStatus, setSensorsStatus] = useState(0);
  const [deviceAnchorEl, setDeviceAnchorEl] = React.useState(null);

  const handleSettingClick = (event) => {
    setDeviceAnchorEl(event.currentTarget);
  };

  const handleSettingClose = () => {
    setDeviceAnchorEl(null);
  };
  const status =
    sensorsStatus === 0
      ? "active"
      : sensorsStatus === 1
      ? "notActive"
      : sensorsStatus === 2
      ? "removed"
      : "";

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSelect = (e) => {
    setSelectVal(e.value);
    console.log(e.value);
    console.log(selectVal);
    console.log(model);
  };

  const handleSensorTab = (event, newValue) => {
    setSensorsStatus(newValue);
  };
  console.log(gatewayData);
  console.log(selectVal);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Typography variant="h5">მექანიზმები</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.selectInput}>
            <Select
              options={gatewayData}
              formatGroupLabel={formatGroupLabel}
              onChange={handleSelect}
            />
          </Grid>

          <Grid item xs={12}>
            {gatewayData
              .filter((x) => x.value === selectVal)
              .map((index) => {
                return (
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    key={index.model}
                    // className={classes.gatewayDetails}
                  >
                    <GatewayComponent
                      model={index.model}
                      status={index.status}
                      label={index.label}
                      key={index.model}
                      setting={false}
                    />
                  </Grid>
                );
              })}
          </Grid>
          <Grid item xs={12} className={!selectVal === "" ? classes.hide : ""}>
            <AppBar position="static" color="default">
              <Tabs
                value={tabValue}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
              >
                <Tab
                  label="შეცდომები"
                  icon={<SmsFailedIcon />}
                  {...a11yProps(0)}
                />
                <Tab label="რუკა" icon={<LocationOnIcon />} {...a11yProps(1)} />
                <Tab
                  label="შენობის გეგმა"
                  icon={<MapIcon />}
                  {...a11yProps(2)}
                />
                <Tab
                  label="შესამოწმებელი სია"
                  icon={<ListAltIcon />}
                  {...a11yProps(3)}
                />
                <Tab
                  label="რეპორტი"
                  icon={<ReportProblemIcon />}
                  {...a11yProps(4)}
                />
              </Tabs>
            </AppBar>
          </Grid>
          <Grid item xs={12} md={4} className={!selectVal ? classes.hide : ""}>
            <Paper className={classes.paper}>
              <div className={classes.tab}>
                <TabPanel value={tabValue} index={0}>
                  შეცდომები
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  რუკა
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                  შენობის გეგმა
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                  შესამოწმებელი სია
                </TabPanel>
                <TabPanel value={tabValue} index={4}>
                  რეპორტი
                </TabPanel>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} className={!selectVal ? classes.hide : ""}>
            <Paper className={classes.paper}>
              {gatewayData
                .filter((x) => x.value === selectVal)
                .map((value) => {
                  return (
                    <div key={value.model} className={classes.root}>
                      <AppBar position="static" color="default">
                        <Tabs
                          value={sensorsStatus}
                          onChange={handleSensorTab}
                          indicatorColor="primary"
                          textColor="primary"
                          variant="scrollable"
                          scrollButtons="auto"
                          aria-label="scrollable auto tabs example"
                          className={classes.tabNav}
                        >
                          <Tab label="აქტიური" {...a11yProps(0)} />
                          <Tab label="გათიშული" {...a11yProps(1)} />
                          <Tab label="წაშლილი" {...a11yProps(2)} />
                        </Tabs>
                      </AppBar>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        // spacing={1}
                      >
                        {value.device
                          .filter((x) => x.status === status)
                          .map((item) => {
                            return (
                              <Grid
                                item
                                xs={12}
                                sm={4}
                                md={4}
                                lg={6}
                                key={item.id}
                                className={classes.device}
                              >
                                <Paper elevation={4}>
                                  <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={3}
                                    className={classes.deviceContainer}
                                  >
                                    <Grid item xs={8}></Grid>
                                    <Grid
                                      item
                                      xs={4}
                                      className={classes.sectionGrid}
                                    >
                                      {/* header setting start */}
                                      <Box>
                                        <IconButton
                                          color="primary"
                                          component="span"
                                          className={classes.setting}
                                          onClick={handleSettingClick}
                                        >
                                          <TuneIcon />
                                        </IconButton>
                                        <Menu
                                          id="gateway-menu"
                                          anchorEl={deviceAnchorEl}
                                          keepMounted
                                          open={Boolean(deviceAnchorEl)}
                                          onClose={handleSettingClose}
                                          className={classes.gatewayMenu}
                                        >
                                          <MenuItem
                                            onClick={handleSettingClose}
                                            className={classes.gatewayMenuList}
                                          >
                                            <EditIcon />
                                            რედაქტირება
                                          </MenuItem>

                                          <MenuItem
                                            onClick={handleSettingClose}
                                            className={classes.gatewayMenuList}
                                          >
                                            <DeleteOutlineIcon />
                                            წაშლა
                                          </MenuItem>

                                          <MenuItem
                                            onClick={handleSettingClose}
                                            className={classes.gatewayMenuList}
                                          >
                                            <HighlightOffIcon />
                                            ფორს.წაშლა
                                          </MenuItem>
                                        </Menu>
                                      </Box>
                                      {/* header setting end */}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      className={classes.deviceHeader}
                                    >
                                      {/* variable name and type */}
                                      <Typography variant="h6">
                                        {item.name}
                                      </Typography>
                                      <Typography variant="body2">
                                        {item.type}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      {/* variable value */}
                                      <Typography
                                        variant="body2"
                                        className={classes.temperature}
                                      >
                                        {item.value}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                      {/* modes start */}
                                      <AcUnitIcon />
                                      <WbSunnyIcon />
                                      <ToysIcon />
                                      <PowerSettingsNewIcon />
                                    </Grid>
                                    <Grid item xs={12}>
                                      {/* info / location / errors */}
                                      <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        spacing={3}
                                      >
                                        <Grid item xs={4}>
                                          <Fab
                                            size="small"
                                            color="primary"
                                            aria-label="add"
                                            className={classes.infoIcon}
                                          >
                                            <ContactSupportIcon />
                                          </Fab>
                                        </Grid>
                                        <Grid item xs={4}>
                                          <Fab
                                            size="small"
                                            color="primary"
                                            aria-label="add"
                                          >
                                            <RoomIcon />
                                          </Fab>
                                        </Grid>
                                        <Grid item xs={4}>
                                          <Fab
                                            size="small"
                                            color="secondary"
                                            aria-label="add"
                                          >
                                            <ErrorOutlineIcon />
                                          </Fab>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Paper>
                              </Grid>
                            );
                          })}
                      </Grid>
                    </div>
                  );
                })}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Device;
