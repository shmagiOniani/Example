// Maetrial-Ui core View
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
// Material-Ui icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { gatewayData } from "../../assets/dataImitators/gatewayData";
import { GatewayGroupConsumer } from "../LocalContext/GatewayGroupContext";
import GatewayComponent from "../Gateway/component/GatewayComponent";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  fadeGrid: {
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    top: "20px",
    left: "20px",
    paddingLeft: "6px",
    zIndex: "200",
  },
}));

function CollapseGroup(prop) {
  const classes = useStyles();

  return (
    <GatewayGroupConsumer>
      {(props) => {
        const {} = props;
        return (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.fadeGrid}
          >
            <Fab
              size="medium"
              color="secondary"
              aria-label="add"
              className={classes.backIcon}
              onClick={() => {
                prop.close(false);
                // removeSelectedGroup();
              }}
            >
              <ArrowBackIosIcon />
            </Fab>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.header}>
                გეითვეი
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                {gatewayData.map((index) => {
                  return (
                    <GatewayComponent
                      model={index.model}
                      status={index.status}
                      label={index.label}
                      key={index.model}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </GatewayGroupConsumer>
  );
}

export default CollapseGroup;
