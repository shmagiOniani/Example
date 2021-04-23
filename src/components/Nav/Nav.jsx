import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { styles } from "./styles";
import { languages } from "./languages";
import { notification } from "./notification";
import { useHistory } from "react-router-dom";
// Images
import person from "../../assets/img/1.jpg";
import english from "../../assets/img/united-kingdom.png";
// import france from "../../assets/img/france.png";
// import german from "../../assets/img/germany.png";
// Material-UI Core tags
import { InputBase } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
// Material-UI Icons
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
// import context

function Nav() {
  const classes = styles();

  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  // notification pop-up handler
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
  const isNotificationOpen = Boolean(notificationAnchorEl);

  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleSearchOpen = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleSearchClose = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  // Message pop-up handler

  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const isLanguageOpen = Boolean(languageAnchorEl);

  const handleMessageOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleMessageClose = () => {
    setLanguageAnchorEl(null);
  };

  const [languageIcon, setLanguageIcon] = React.useState(english);
  const [localLan, setLocalLan] = React.useState(english);

  const handleLanguage = (name) => {
    setLocalLan(window.localStorage.setItem("language", name));
  };
  const handleLanguageIcon = (image, name) => {
    setLanguageIcon(image);
    handleLanguage(name);
    setLanguageAnchorEl(null);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const logButton = () => {
    localStorage.removeItem("userKey");
    history.push("Login");
  };

  // notification pop-up
  const notificationId = "primary-notification-pop-up";
  const renderNotification = (
    <Menu
      anchorEl={notificationAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={notificationId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isNotificationOpen}
      onClose={handleNotificationClose}
      className={classes.popUp}
    >
      {notification.map((index) => (
        <MenuItem onClick={handleNotificationClose} key={index.id}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Avatar alt="Remy Sharp" src={person} />
            </Badge>
          </IconButton>
          <div>
            {index.name}
            {index.content}
          </div>
        </MenuItem>
      ))}
    </Menu>
  );

  // Message pop-up
  const messageId = "primary-Message-pop-up";
  const renderMessage = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={messageId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isLanguageOpen}
      onClose={handleMessageClose}
      className={classes.popUp}
    >
      <div>
        {languages.map((index) => (
          <MenuItem
            onClick={() => handleLanguageIcon(index.image, index.name)}
            key={index.id}
            className={classes.languageItem}
          >
            <Avatar
              variant="rounded"
              src={index.image}
              className={classes.languageList}
            />
            <div>{index.name}</div>
          </MenuItem>
        ))}
      </div>
    </Menu>
  );

  // avatar pop-up for desktop
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.popUp}
    >
      <MenuItem onClick={handleMenuClose}>
        <Box mr={2}>
          <AccountCircleIcon />
        </Box>
        პროფილი
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Box mr={2}>
          <SettingsIcon />
        </Box>
        პარამეტრები
      </MenuItem>

      <MenuItem onClick={logButton}>გამოსვლა</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <div className={classes.blur}></div>

        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleSidebarToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <SearchIcon
            onClick={handleSearchOpen}
            className={classes.searchIcon}
          />

          <div className={classes.searchContainer}>
            <div className={classes.searchBlur} />

            <Collapse in={searchOpen} className={classes.collapseBg}>
              <Paper elevation={3} className={classes.searchPaper}>
                <form className={classes.searchForm}>
                  <IconButton
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={handleSearchClose}
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    className={classes.input}
                    placeholder="Search..."
                  />
                  <Button
                    variant="contained"
                    className={classes.searchButton}
                    onClick={handleSearchOpen}
                  >
                    Search
                  </Button>
                </form>
              </Paper>
            </Collapse>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              color="inherit"
              aria-controls={messageId}
              aria-haspopup="true"
              onClick={handleMessageOpen}
            >
              <Avatar
                variant="rounded"
                src={languageIcon}
                className={classes.languageIcon}
              />
            </IconButton>
            <IconButton
              aria-label="show new notifications"
              color="inherit"
              aria-controls={notificationId}
              aria-haspopup="true"
              onClick={handleNotificationOpen}
            >
              <Badge
                badgeContent={notification.length}
                color="secondary"
                // badgeContent={notification.length}
                className={classes.badge}
              >
                <NotificationsIcon className={classes.barIcon} />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="account of current user"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Avatar alt="Remy Sharp" src={person} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* sidebar */}
      <Sidebar
        mobileOpen={sidebarOpen}
        handleDrawerToggle={handleSidebarToggle}
      />

      {/* {renderMobileMenu} */}
      {renderMenu}
      {renderNotification}
      {renderMessage}
    </div>
  );
}

export default Nav;
