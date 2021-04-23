import { makeStyles } from "@material-ui/core/styles";

export const style = makeStyles((theme) => ({
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
}));
