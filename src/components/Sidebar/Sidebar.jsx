import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

// Material-UI Core Components
import { Collapse } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

// Material-UI Icons
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SpeedSharpIcon from "@material-ui/icons/SpeedSharp";
import TableChartIcon from "@material-ui/icons/TableChart";

// Inner Source
import { styles } from "./styles.js";
import person from "../..//assets/img/1.jpg";
import logo from "../..//assets/img/logo.svg";

function Sidebar(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const classes = styles();
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [dashboardOpen, setDashboardOpen] = React.useState(false);
  // const [mailOpen, setMailOpen] = React.useState(false);
  const [tableOpen, setTableOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);
  const [DeviceOpen, setDeviceOpen] = React.useState(false);

  const handleClick = (name) => {
    name === "dashboard"
      ? setDashboardOpen(!dashboardOpen)
      : name === "user"
      ? setUserOpen(!userOpen)
      : name === "table"
      ? setTableOpen(!tableOpen)
      : // : name === "mail"
      // ? setMailOpen(!mailOpen)
      name === "device"
      ? setDeviceOpen(!DeviceOpen)
      : console.log("not found");
  };

  // sidebar
  const drawer = (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Link to="/Dashboard/Application">
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>
      {/* <List className={classes.tollBarList}> */}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Link to="/User/Account">
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.listHeader}
            >
              <Avatar alt="Remy Sharp" src={person} />
              <div className="text">
                <Typography variant="h6">სახელი გვარი</Typography>
                <Typography variant="body2">სტატუსი</Typography>
              </div>
            </ListSubheader>
          </Link>
        }
        className={classes.tollBarList}
      >
        <ListItem className={classes.listSectionHeader}>
          <Typography variant="subtitle2" gutterBottom>
            ზოგადი
          </Typography>
        </ListItem>

        <ListItem
          button
          selected={
            selectedIndex === "application" || selectedIndex === "analytics"
          }
          onClick={() => handleClick("dashboard")}
        >
          <ListItemIcon
            className={
              selectedIndex === "application" || selectedIndex === "analytics"
                ? classes.activeListIcon
                : classes.listIcon
            }
          >
            <SpeedSharpIcon />
          </ListItemIcon>
          <ListItemText
            primary="მთავარი"
            className={
              selectedIndex === "application" || selectedIndex === "analytics"
                ? classes.activeListText
                : classes.listText
            }
          />
          {dashboardOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={dashboardOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/Dashboard/Application">
              <ListItem
                button
                selected={selectedIndex === "application"}
                className={clsx(
                  selectedIndex === "application" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "application")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "application" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "application" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="აპლიკაცია"
                />
              </ListItem>
            </Link>
            <Link to="/Dashboard/Analytics">
              <ListItem
                button
                selected={selectedIndex === "analytics"}
                onClick={(event) => handleListItemClick(event, "analytics")}
                className={clsx(
                  selectedIndex === "analytics" && classes.activeItem,
                  classes.childList
                )}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "analytics" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "analytics" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="ანალიტიკა"
                />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem
          button
          selected={selectedIndex === "Account" || selectedIndex === "Setting"}
          onClick={() => handleClick("user")}
        >
          <ListItemIcon
            className={
              selectedIndex === "Account" || selectedIndex === "Setting"
                ? classes.activeListIcon
                : classes.listIcon
            }
          >
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="პროფილი"
            className={
              selectedIndex === "Account" || selectedIndex === "Setting"
                ? classes.activeListText
                : classes.listText
            }
          />
          {userOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={userOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/User/Account">
              <ListItem
                button
                selected={selectedIndex === "Account"}
                className={clsx(
                  selectedIndex === "Account" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Account")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Account" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Account" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="პირადი"
                />
              </ListItem>
            </Link>
            <Link to="/User/Setting">
              <ListItem
                button
                selected={selectedIndex === "Setting"}
                onClick={(event) => handleListItemClick(event, "Setting")}
                className={clsx(
                  selectedIndex === "Setting" && classes.activeItem,
                  classes.childList
                )}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Setting" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Setting" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="პარამეტრები"
                />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem
          button
          selected={selectedIndex === "Users"}
          onClick={() => handleClick("table")}
        >
          <ListItemIcon
            className={
              selectedIndex === "Users"
                ? classes.activeListIcon
                : classes.listIcon
            }
          >
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText
            primary="თანამშრომლები"
            className={
              selectedIndex === "Users"
                ? classes.activeListText
                : classes.listText
            }
          />
          {tableOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={tableOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/Table/Users">
              <ListItem
                button
                selected={selectedIndex === "Users"}
                className={clsx(
                  selectedIndex === "Users" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Users")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Users" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Users" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="ცხრილი"
                />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem className={classes.listSectionHeader}>
          <Typography variant="subtitle2" gutterBottom>
            მოწყობილობები
          </Typography>
        </ListItem>
        <Link to="/Notification/all">
          <ListItem
            button
            selected={selectedIndex === "notification"}
            onClick={(event) => handleListItemClick(event, "notification")}
          >
            <ListItemIcon
              className={
                selectedIndex === "notification"
                  ? classes.activeListIcon
                  : classes.listIcon
              }
            >
              <NotificationImportantIcon />
            </ListItemIcon>
            <ListItemText
              primary="შეტყობინებები"
              className={
                selectedIndex === "notification"
                  ? classes.activeListText
                  : classes.listText
              }
            />
          </ListItem>
        </Link>

        <ListItem
          button
          selected={
            selectedIndex === "Device" ||
            selectedIndex === "Gateway" ||
            selectedIndex === "Schedule"
          }
          onClick={() => handleClick("device")}
        >
          <ListItemIcon
            className={
              selectedIndex === "Device" ||
              selectedIndex === "Gateway" ||
              selectedIndex === "Schedule"
                ? classes.activeListIcon
                : classes.listIcon
            }
          >
            <DeveloperBoardIcon />
          </ListItemIcon>
          <ListItemText
            primary="მოწყობილობები"
            className={
              selectedIndex === "Device" ||
              selectedIndex === "Gateway" ||
              selectedIndex === "Schedule"
                ? classes.activeListText
                : classes.listText
            }
          />
          {DeviceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={DeviceOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/Device/Gateway">
              <ListItem
                button
                selected={selectedIndex === "Gateway"}
                className={clsx(
                  selectedIndex === "Gateway" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Gateway")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Gateway" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Gateway" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="გეითვეი"
                />
              </ListItem>
            </Link>
            <Link to="/Device/GatewayGroup">
              <ListItem
                button
                selected={selectedIndex === "GatewayGroup"}
                className={clsx(
                  selectedIndex === "GatewayGroup" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "GatewayGroup")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "GatewayGroup" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "GatewayGroup" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="გეითვეი ჯგუფები"
                />
              </ListItem>
            </Link>
            <Link to="/Device/Device">
              <ListItem
                button
                selected={selectedIndex === "Device"}
                className={clsx(
                  selectedIndex === "Device" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Device")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Device" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Device" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="მექანიზმები"
                />
              </ListItem>
            </Link>
            <Link to="/Device/DeviceGroups">
              <ListItem
                button
                selected={selectedIndex === "Schedule"}
                className={clsx(
                  selectedIndex === "Schedule" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Schedule")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Schedule" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Schedule" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="მექანიზმის განრიგი"
                />
              </ListItem>
            </Link>
            <Link to="/Device/Schedule">
              <ListItem
                button
                selected={selectedIndex === "Schedule"}
                className={clsx(
                  selectedIndex === "Schedule" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Schedule")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Schedule" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Schedule" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="მექანიზმის განრიგი"
                />
              </ListItem>
            </Link>
          </List>
        </Collapse>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // material-ui menu type

  // sidebar end

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* sidebar  */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Sidebar;
