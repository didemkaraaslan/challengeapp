import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(2),
  },
  divider: {
    border: `0.5px solid ${grey[500]}`,
    height: 0,
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h6" className={classes.title}>
        hepsiburada.com
      </Typography>
      <p className={classes.divider} />
    </div>
  );
};

export default Header;
