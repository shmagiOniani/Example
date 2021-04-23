import clsx from "clsx";
import { gateway } from "./gateway";
// Keen-Slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// Material-UI Core Components
import { Card } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";
// Material-UI Icons
import AllInboxIcon from "@material-ui/icons/AllInbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#F4F6F8",
  },
  carouselItem: {
    padding: theme.spacing(2, 1),
    boxShadow: "none",
  },
  numbers: {
    textAlign: "right",
    fontWeight: "600",
    color: "#454F5B",
    fontSize: "initial",
    fontFamily: "inherit",
    "& > *": {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  carouselPaper: {
    color: "161C24",
    padding: theme.spacing(2),
    borderRadius: "20px",
    "& > h4": {
      fontWeight: "600",
      textAlign: "left",
    },
  },
}));

function Device() {
  const classes = useStyles();

  const [sliderRef] = useKeenSlider({
    slidesPerView: 3,
    mode: "free-snap",
    spacing: 15,
    loop: true,
  });

  const carouselItem = clsx({
    [classes.paper]: true,
    [classes.carouselPaper]: true,
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Typography variant="h5">მექანიზმები</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.carousel}>
            <div ref={sliderRef} className="keen-slider">
              {gateway.map((index) => (
                <Card
                  className={clsx(
                    { [`keen-slider__slide number-slide${index.id}`]: true },
                    { [classes.carouselItem]: true }
                  )}
                  key={index.id}
                >
                  <Paper className={carouselItem} elevation={4}>
                    <Typography variant="h4">{index.id}</Typography>

                    <div className={classes.numbers}>
                      {index.details.map((detail) => (
                        <div key={detail.name}>
                          <Box pr={1}>{detail.name}</Box>
                          <Box pr={1}>{detail.amount}</Box>
                        </div>
                      ))}
                    </div>
                    <Typography variant="h6">{index.name}</Typography>
                  </Paper>
                </Card>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={8}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Device;
