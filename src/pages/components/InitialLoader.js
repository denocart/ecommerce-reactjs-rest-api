import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  initialLoader: {
    position: "fixed",
    top: "50%",
    left: "50%"
  }
}));

const InitialLoader = () => {
  const classes = useStyles();
  return (
    <div>
      <CircularProgress className={classes.initialLoader} />
    </div>
  );
};

export default InitialLoader;