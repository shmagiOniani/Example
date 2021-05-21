import React from "react";
// Material-ui core components
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
// import context component
import { ScheduleConsumer } from "../LocalContext/ScheduleContext";
// Material icon
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const styles = makeStyles((theme) => ({
  // transfer list
  transferRoot: {
    padding: "10px",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 130,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  transferButton: {
    margin: theme.spacing(0.5, 0),
  },
  //
}));

// Transfer List
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}
//
function Transfer(props) {
  const classes = styles();

  // Transfer list
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(props.arr);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} `}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={items.indexOf(value)}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );
  //
  return (
    <>
      {props.type === "devices" ? (
        <ScheduleConsumer>
          {(props) => {
            // const { setTime, setDay, setDevice, setGateway } = props;
            return (
              <Grid
                container
                spacing={2}
                justify="center"
                alignItems="center"
                className={classes.transferRoot}
              >
                <Grid item xs={12}>
                  {customList("ასარჩევი მოწყობილობები", left)}
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      className={classes.transferButton}
                      onClick={handleCheckedRight}
                      disabled={leftChecked.length === 0}
                      aria-label="move selected right"
                    >
                      <ArrowDownwardIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      className={classes.transferButton}
                      onClick={handleCheckedLeft}
                      disabled={rightChecked.length === 0}
                      aria-label="move selected left"
                    >
                      <ArrowUpwardIcon />
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {customList("არჩეული მოწყობილობები", right)}
                </Grid>
              </Grid>
            );
          }}
        </ScheduleConsumer>
      ) : (
        <ScheduleConsumer>
          {(props) => {
            // const { setTime, setDay, setDevice, setGateway } = props;
            return (
              <Grid
                container
                spacing={2}
                justify="center"
                alignItems="center"
                className={classes.transferRoot}
              >
                <Grid item xs={12} md={5}>
                  <Paper>{customList("ასარჩევი დღეები", left)}</Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Grid container direction="column" alignItems="center">
                    <Button
                      variant="outlined"
                      size="small"
                      className={classes.transferButton}
                      onClick={handleCheckedRight}
                      disabled={leftChecked.length === 0}
                      aria-label="move selected right"
                    >
                      &gt;
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      className={classes.transferButton}
                      onClick={handleCheckedLeft}
                      disabled={rightChecked.length === 0}
                      aria-label="move selected left"
                    >
                      &lt;
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Paper>{customList("არჩეული დღეები", right)}</Paper>
                </Grid>
              </Grid>
            );
          }}
        </ScheduleConsumer>
      )}
    </>
  );
}

export default Transfer;
