import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Material-UI core view
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// Material-UI icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
// Component's inner material
import { style } from "./style";
import { usersArr } from "../../usersArr";
// App components
import AddForm from "../AddForm/AddForm";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  toolbarRoot: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },

  title: {
    textAlign: "initial",
    flex: "1 1 100%",
  },
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    borderRadius: 20,
  },
  table: {
    minWidth: 750,
  },

  toolbarItem: {
    marginRight: "20px",
  },
  deleteButton: {
    color: "#d789a8",
  },
});

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  { id: "ID", numeric: true, disablePadding: false, label: "ID" },
  { id: "Mobile", numeric: true, disablePadding: false, label: "Mobile" },
  { id: "Email", numeric: true, disablePadding: false, label: "Email" },
  {
    id: "Position",
    numeric: true,
    disablePadding: false,
    label: "Position",
  },
  {
    id: "Actions",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const classes = style();
  const [open, setOpen] = React.useState(false);
  const handleDialogClose = () => {
    setOpen(!open);
  };

  return (
    <Toolbar className={classes.toolbarRoot}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Users
      </Typography>

      <IconButton onClick={handleDialogClose}>
        <PersonAddIcon />
      </IconButton>
      <AddForm open={open} close={handleDialogClose} />
    </Toolbar>
  );
};

export class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5,
      data: usersArr,
      response: [],
      open: false,
    };
  }

  componentDidMount(event) {
    axios
      .post("http://localhost/portall-test-users-table/usersTable.php")
      .then((res) => {
        this.setState({
          response: res.data,
        });
        console.log(this.state.response);
      });
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    this.setState({ page: 0 });
  };

  handleDelete(id) {
    axios
      .post("http://localhost/portall-test-users-table/deleteUser.php", id)
      .then((res) => {
        console.log(res);
      });
    this.setState({ open: false });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleEdit = (id) => {
    console.log(id);
  };
  render() {
    const emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        this.state.response.length - this.state.page * this.state.rowsPerPage
      );

    return (
      <div className={this.props.classes.root}>
        <Paper className={this.props.classes.paper}>
          {/* <button onClick={this.handleGet}>get</button> */}
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              className={this.props.classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <EnhancedTableHead rowCount={this.state.response.length} />
              <TableBody>
                {this.state.response
                  .slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                  .map((row) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.mobile}>
                        <TableCell component="th" scope="row">
                          {row.firstname}
                        </TableCell>
                        <TableCell align="right">{row.personal_id}</TableCell>
                        <TableCell align="right">{row.mobile}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.position}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={this.handleClickOpen}
                            color="secondary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <DeleteOutlineIcon
                              className={this.props.classes.deleteButton}
                            />
                          </IconButton>
                          <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Delete User"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                It will permanently delete user from database.
                                <br />
                                Do you want to continue action?
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={this.handleClose}
                                color="primary"
                              >
                                Disagree
                              </Button>
                              <Button
                                onClick={() =>
                                  this.handleDelete(row.personal_id)
                                }
                                color="primary"
                                autoFocus
                              >
                                Agree
                              </Button>
                            </DialogActions>
                          </Dialog>
                          <IconButton
                            onClick={() => this.handleEdit(row.personal_id)}
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={usersArr.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.state.handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(UserTable);
