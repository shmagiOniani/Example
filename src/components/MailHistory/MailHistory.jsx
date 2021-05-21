import React from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  header: { paddingBottom: "40px" },
}));

export default function MailHistory() {
  const classes = styles();
  const columns = [
    "შეტყობინების ID",
    "ტიპი",
    "სტატუსი",
    "დრო",
    "კონტაქტები",
    "კონტენტი",
  ];

  const data = [
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Minneapolis",
      "Business Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Dallas",
      "Business Consultant",
    ],
    [1232453536, "SMS", "გაგზავნილი", "2020/10/25", "Ana", "Attorney"],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "St.  Petersburg",
      "Business Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Toledo",
      "Business Consultant",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "  Diego",
      "Business Management Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Jacksonville",
      "Agency Legal Counsel",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Omaha",
      "Commercial Specialist",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Los  Angeles",
      "Business Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "OklahomaCity",
      "Business Consultant",
    ],
    [1232453536, "SMS", "გაგზავნილი", "2020/10/25", "Pittsburgh", "Attorney"],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Laredo",
      "Agency Legal Counsel",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Austin",
      "Industrial Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Norfolk",
      "Business Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Chicago",
      "Business Consultant",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Seattle",
      "Agency Legal Counsel",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Long  Beach",
      "Commercial Specialist",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Hartford",
      "Industrial Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Newark",
      "Computer Scientist",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Cincinnati",
      "Corporate Counselor",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Baltimore",
      "Business Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Tampa",
      "Agency Legal Counsel",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Miami",
      "Commercial Specialist",
    ],
    [1232453536, "SMS", "გაგზავნილი", "2020/10/25", "Tucson", "Attorney"],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Memphis",
      "Computer Scientist",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Buffalo",
      "Industrial Analyst",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Arlington",
      "Corporate Counselor",
    ],
    [
      1232453536,
      "SMS",
      "გაგზავნილი",
      "2020/10/25",
      "Francisco",
      "Computer Scientist",
    ],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "scroll",
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Typography variant="h5" className={classes.header}>
          შეტყობინებების ისტორია
        </Typography>
        <MUIDataTable
          title={"შეტყობინებები"}
          data={data}
          columns={columns}
          options={options}
        />
      </Container>
    </div>
  );
}
