import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 90, align: "center" },
  {
    id: "population",
    label: "Population",
    minWidth: 80,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354),
  createData("China", "CN", 1403500365),
  createData("Italy", "IT", 60483973),
  createData("United States", "US", 327167434),
  createData("Canada", "CA", 37602103),
  createData("Australia", "AU", 25475400),
  createData("Germany", "DE", 83019200),
  createData("Ireland", "IE", 4857000),
  createData("Mexico", "MX", 126577691),
  createData("Japan", "JP", 126317000),
  createData("France", "FR", 67022000),
  createData("United Kingdom", "GB", 67545757),
  createData("Russia", "RU", 146793744),
  createData("Nigeria", "NG", 200962417),
  createData("Brazil", "BR", 210147125),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "24px",
    borderRadius: "20px",
  },
  container: {
    height: "300px",
  },
  tableHead: {
    backgroundColor: "rgb(244, 246, 248)",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid item xs={12} md={8}>
      <Paper className={classes.root} elevation={5}>
        <h3>New Invoice</h3>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
}
