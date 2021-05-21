import React from "react";
import clsx from "clsx";

// Material-UI core components
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
// Material-UI icons
import PeopleIcon from "@material-ui/icons/People";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AdbIcon from "@material-ui/icons/Adb";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
// Inner Resource
import { usersColumns } from "../../assets/dataImitators/adminPanelData/usersColumns.js";
import { usersData } from "../../assets/dataImitators/adminPanelData/usersData.js";
import { roleData } from "../../assets/dataImitators/adminPanelData/roleData.js";
import { roleColumns } from "../../assets/dataImitators/adminPanelData/roleColumns.js";
import { deviceData } from "../../assets/dataImitators/adminPanelData/deviceData.js";
import { deviceColumns } from "../../assets/dataImitators/adminPanelData/deviceColumns.js";
import { notificationData } from "../../assets/dataImitators/adminPanelData/notificationData.js";
import { notificationColumns } from "../../assets/dataImitators/adminPanelData/notificationColumns.js";

const styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  hide: {
    display: "none",
  },
  tab: {
    "& > div": {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  tabPanel: {
    padding: "20px 20px ",
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export default function Admin() {
  const classes = styles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const options = {
    filterType: "dropdown",
    responsive: "vertical",
  };

  const CustomChip = ({ label, onDelete }) => {
    return (
      <Chip
        variant="outlined"
        color="primary"
        label={label}
        onDelete={onDelete}
      />
    );
  };

  const CustomFilterList = (props) => {
    return <TableFilterList {...props} ItemComponent={CustomChip} />;
  };

  return (
    <Container>
      <Paper>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            className={classes.tab}
          >
            <Tab
              label="მომხმარებლები"
              icon={<PeopleIcon />}
              {...a11yProps(0)}
            />
            <Tab label="როლები" icon={<StarBorderIcon />} {...a11yProps(1)} />
            <Tab
              label="მოწყობილობის ტიპები"
              icon={<AdbIcon />}
              {...a11yProps(2)}
            />
            <Tab
              label="შეტყობინებები"
              icon={<LibraryBooksIcon />}
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <div className={clsx(value === 0 ? classes.tabPanel : classes.hide)}>
          <Typography variant="h5" className={classes.header}>
            თანამშრომელთა სია
          </Typography>
          <MUIDataTable
            title={"ცვლილება შესაძლებელია"}
            data={usersData}
            columns={usersColumns}
            options={options}
            components={{
              TableFilterList: CustomFilterList,
            }}
          />
        </div>
        <div className={clsx(value === 1 ? classes.tabPanel : classes.hide)}>
          <Typography variant="h5" className={classes.header}>
            როლები
          </Typography>
          <MUIDataTable
            title={"ცვლილება შესაძლებელია"}
            data={roleData}
            columns={roleColumns}
            options={options}
            components={{
              TableFilterList: CustomFilterList,
            }}
          />
        </div>
        <div className={clsx(value === 2 ? classes.tabPanel : classes.hide)}>
          <Typography variant="h5" className={classes.header}>
            მოწყობილების ტიპები
          </Typography>
          <MUIDataTable
            title={"ცვლილება შესაძლებელია"}
            data={deviceData}
            columns={deviceColumns}
            options={options}
            components={{
              TableFilterList: CustomFilterList,
            }}
          />
        </div>
        <div className={clsx(value === 3 ? classes.tabPanel : classes.hide)}>
          <Typography variant="h5" className={classes.header}>
            შეტყობინებები
          </Typography>
          <MUIDataTable
            title={"ცვლილება შეუძლებელია"}
            data={notificationData}
            columns={notificationColumns}
            options={options}
            components={{
              TableFilterList: CustomFilterList,
            }}
          />
        </div>
      </Paper>
    </Container>
  );
}
