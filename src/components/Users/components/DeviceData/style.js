import { makeStyles } from "@material-ui/core/styles";

export const style = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  tablePaper: {
    borderRadius: 20,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  title: {
    textAlign: "start",
  },
}));
