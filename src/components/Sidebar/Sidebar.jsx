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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SpeedSharpIcon from "@material-ui/icons/SpeedSharp";
import TableChartIcon from "@material-ui/icons/TableChart";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

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
  const [deviceOpen, setDeviceOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [mailOpen, setMailOpen] = React.useState(false);

  const handleClick = (name) => {
    name === "dashboard"
      ? setDashboardOpen(!dashboardOpen)
      : name === "user"
      ? setUserOpen(!userOpen)
      : name === "notification"
      ? setNotificationOpen(!notificationOpen)
      : name === "table"
      ? setTableOpen(!tableOpen)
      : name === "mail"
      ? setMailOpen(!mailOpen)
      : name === "device"
      ? setDeviceOpen(!deviceOpen)
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
            {/* <Link to="/User/Setting">
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
            </Link> */}
          </List>
        </Collapse>
        <ListItem
          button
          selected={
            selectedIndex === "Admin" ||
            selectedIndex === "Customers" ||
            selectedIndex === "Contacts"
          }
          onClick={() => handleClick("table")}
        >
          <ListItemIcon
            className={
              selectedIndex === "Admin" ||
              selectedIndex === "Customers" ||
              selectedIndex === "Contacts"
                ? classes.activeListIcon
                : classes.listIcon
            }
          >
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText
            primary="ცხრილები"
            className={
              selectedIndex === "Admin" ||
              selectedIndex === "Customers" ||
              selectedIndex === "Contacts"
                ? classes.activeListText
                : classes.listText
            }
          />
          {tableOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={tableOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/Table/Admin">
              <ListItem
                button
                selected={selectedIndex === "Admin"}
                className={clsx(
                  selectedIndex === "Admin" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Admin")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Admin" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Admin" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="ადმინისტრატორი"
                />
              </ListItem>
            </Link>
            <Link to="/Table/Customers">
              <ListItem
                button
                selected={selectedIndex === "Customers"}
                className={clsx(
                  selectedIndex === "Customers" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Customers")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Customers" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Customers" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="მომხმარებლები"
                />
              </ListItem>
            </Link>
            <Link to="/Table/Contacts">
              <ListItem
                button
                selected={selectedIndex === "Contacts"}
                className={clsx(
                  selectedIndex === "Contacts" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Contacts")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Contacts" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Contacts" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="კონტაქტები"
                />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem className={classes.listSectionHeader}>
          <Typography variant="subtitle2" gutterBottom>
            შეტყობინებები
          </Typography>
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === "Alerts" || selectedIndex === "AlertLogs"}
          onClick={() => handleClick("notification")}
        >
          <ListItemIcon
            className={
              selectedIndex === "Alerts" || selectedIndex === "AlertLogs"
                ? classes.activeListIcon
                : classes.listIcon
            }
          >
            <ErrorOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary="გაფრთხილება"
            className={
              selectedIndex === "Alerts" || selectedIndex === "AlertLogs"
                ? classes.activeListText
                : classes.listText
            }
          />
          {notificationOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={notificationOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/Notification/Alerts">
              <ListItem
                button
                selected={selectedIndex === "Alerts"}
                className={clsx(
                  selectedIndex === "Alerts" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "Alerts")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "Alerts" && classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "Alerts" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="ალერტები"
                />
              </ListItem>
            </Link>
          </List>
          <List component="div" disablePadding>
            <Link to="/Notification/AlertLogs">
              <ListItem
                button
                selected={selectedIndex === "AlertLogs"}
                className={clsx(
                  selectedIndex === "AlertLogs" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "AlertLogs")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "AlertLogs" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "AlertLogs" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="ალერტების ლოგები"
                />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem
          button
          selected={
            selectedIndex === "Device" ||
            selectedIndex === "Gateway" ||
            selectedIndex === "Schedule" ||
            selectedIndex === "DeviceGroup"
          }
          onClick={() => handleClick("device")}
        >
          <ListItemIcon
            className={
              selectedIndex === "Device" ||
              selectedIndex === "Gateway" ||
              selectedIndex === "Schedule" ||
              selectedIndex === "DeviceGroup"
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
              selectedIndex === "Schedule" ||
              selectedIndex === "DeviceGroup"
                ? classes.activeListText
                : classes.listText
            }
          />
          {deviceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={deviceOpen} timeout="auto" unmountOnExit>
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
                  primary="მოწყობილობები"
                />
              </ListItem>
            </Link>
            <Link to="/Device/DeviceGroup">
              <ListItem
                button
                selected={selectedIndex === "DeviceGroup"}
                className={clsx(
                  selectedIndex === "DeviceGroup" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "DeviceGroup")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "DeviceGroup" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "DeviceGroup" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="მოწყობილობის ჯგუფები"
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
                  primary="მოწყობილობის განრიგი"
                />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem
          button
          selected={
            selectedIndex === "MailTemplate" || selectedIndex === "MailHistory"
          }
          onClick={() => handleClick("mail")}
        >
          <ListItemIcon
            className={
              selectedIndex === "MailTemplate" ||
              selectedIndex === "MailHistory"
                ? classes.activeListIcon
                : classes.listIcon
            }
          >
            <ErrorOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary="შეტყობინებები"
            className={
              selectedIndex === "MailTemplate" ||
              selectedIndex === "MailHistory"
                ? classes.activeListText
                : classes.listText
            }
          />
          {mailOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={mailOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/Mail/MailTemplate">
              <ListItem
                button
                selected={selectedIndex === "MailTemplate"}
                className={clsx(
                  selectedIndex === "MailTemplate" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "MailTemplate")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "MailTemplate" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "MailTemplate" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="შაბლონები"
                />
              </ListItem>
            </Link>
            <Link to="/Mail/MailHistory">
              <ListItem
                button
                selected={selectedIndex === "MailHistory"}
                className={clsx(
                  selectedIndex === "MailHistory" && classes.activeItem,
                  classes.childList
                )}
                onClick={(event) => handleListItemClick(event, "MailHistory")}
              >
                <ListItemIcon
                  className={clsx(
                    selectedIndex === "MailHistory" &&
                      classes.activeChildListIcon,
                    classes.childListIcon
                  )}
                >
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText
                  className={clsx(
                    selectedIndex === "MailHistory" && classes.activeChildList,
                    classes.childList
                  )}
                  primary="ისტორია"
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
