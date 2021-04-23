import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
  },
  container: {
    maxHeight: 440,
  },
  header: {
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
    padding: "18px",
  },
  pagination: {
    overflow: "unset",
  },
  stickyHeader: {
    overflow: "hiddes",
  },
}));
