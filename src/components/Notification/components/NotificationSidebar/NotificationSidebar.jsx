import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
// Material-UI icons
import AddIcon from "@material-ui/icons/Add";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/Inbox";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import ErrorIcon from "@material-ui/icons/Error";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import GradeIcon from "@material-ui/icons/Grade";

const styles = (theme) => ({
  root: {
    borderRadius: "16px",
  },
  container: {},
  navigatioin: {
    maxHeight: 525,
    borderRight: "1px solid rgba(145, 158, 171, 0.24)",
    overflow: "overlay",
  },
  composeDiv: {
    padding: "24px",
  },
  composeButton: {
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  mailGrid: {
    borderRadius: "16px",
    "& > div": {
      maxHeight: "525px",
      overflow: "overlay",
    },
  },
});

class NotificationSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  //   const [selectedIndex, setSelectedIndex] = React.useState(1);

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
    });
    this.props.data.updateSelected(index);
  };

  render() {
    return (
      <>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            height: 400,
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <div className={this.props.classes.composeDiv}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              fullWidth
              className={this.props.classes.composeButton}
            >
              Compose
            </Button>
          </div>
          <Divider />

          <List
            component="nav"
            aria-label="main mailbox folders"
            className={this.props.classes.root}
          >
            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="All Mail" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 1}
              onClick={(event) => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 2}
              onClick={(event) => this.handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <NearMeIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 3}
              onClick={(event) => this.handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 4}
              onClick={(event) => this.handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <DeleteSweepIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 5}
              onClick={(event) => this.handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <ErrorIcon />
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 6}
              onClick={(event) => this.handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Important" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 7}
              onClick={(event) => this.handleListItemClick(event, 7)}
            >
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 8}
              onClick={(event) => this.handleListItemClick(event, 8)}
            >
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 9}
              onClick={(event) => this.handleListItemClick(event, 9)}
            >
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Box>
      </>
    );
  }
}

export default withStyles(styles)(NotificationSidebar);
