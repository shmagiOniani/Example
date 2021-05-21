import React from "react";

import MUIDataTable from "mui-datatables";
// Material-UI core components
import { Container, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
}));

export default function Contacts() {
  const classes = styles();

  const columns = [
    "სახელი გვარი",
    "პირადი ნომერი",
    "ძირითადი ელ.ფოსტა",
    "ძირითადი ტელეფონი",
    "დაბადების თარიღი",
    "თანამდებობა",
    "როლი",
  ];

  const data = [
    [
      "სახელი 1 გვარი",
      1232453536,
      "example@gmail.com",
      "+995 555 55 55 55",
      "2020/20/20",
      "developer",
      "DMT full permissions",
    ],
    [
      "სახელი 2 გვარი",
      1232453536,
      "example@gmail.com",
      "+995 555 55 55 55",
      "2020/20/20",
      "developer",
      "DMT full permissions",
    ],
    [
      "სახელი 3 გვარი",
      1232453536,
      "example@gmail.com",
      "+995 555 55 55 55",
      "2020/20/20",
      "developer",
      "DMT full permissions",
    ],
    [
      "სახელი 4 გვარი",
      1232453536,
      "example@gmail.com",
      "+995 555 55 55 55",
      "2020/20/20",
      "developer",
      "DMT full permissions",
    ],
    [
      "სახელი 5 გვარი",
      1232453536,
      "example@gmail.com",
      "+995 555 55 55 55",
      "2020/20/20",
      "developer",
      "DMT full permissions",
    ],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "scroll",
  };

  return (
    <Container>
      <Typography variant="h5" className={classes.header}>
        კონტაქტების სია
      </Typography>
      <MUIDataTable
        title={"კონტაქტების სია"}
        data={data}
        columns={columns}
        options={options}
      />
    </Container>
  );
}
